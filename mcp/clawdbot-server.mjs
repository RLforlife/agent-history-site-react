#!/usr/bin/env node
// Clawdbot MCP Server - Expose Clawdbot capabilities to MCP clients (like Cursor)

import { Server } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { exec, execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Create MCP Server
const server = new Server(
  { name: 'clawdbot-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// Tool definitions
const tools = {
  // File operations
  'read_file': {
    name: 'read_file',
    description: 'Read file contents',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path to read' },
        limit: { type: 'number', description: 'Max lines to read' },
        offset: { type: 'number', description: 'Line number to start from' }
      },
      required: ['path']
    }
  },
  
  'write_file': {
    name: 'write_file',
    description: 'Create or overwrite a file',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path' },
        content: { type: 'string', description: 'File content' }
      },
      required: ['path', 'content']
    }
  },
  
  'edit_file': {
    name: 'edit_file',
    description: 'Edit file by replacing exact text',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path' },
        oldText: { type: 'string', description: 'Text to find' },
        newText: { type: 'string', description: 'Text to replace with' }
      },
      required: ['path', 'oldText', 'newText']
    }
  },
  
  'list_files': {
    name: 'list_files',
    description: 'List files in a directory',
    inputSchema: {
      type: 'object',
      properties: {
        dir: { type: 'string', description: 'Directory path', default: '.' }
      }
    }
  },
  
  'grep_search': {
    name: 'grep_search',
    description: 'Search files for a pattern',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search pattern' },
        path: { type: 'string', description: 'Search directory', default: '.' }
      },
      required: ['query']
    }
  },
  
  // Git operations
  'git_status': {
    name: 'git_status',
    description: 'Show git status',
    inputSchema: { type: 'object', properties: {} }
  },
  
  'git_commit': {
    name: 'git_commit',
    description: 'Create a git commit',
    inputSchema: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Commit message' },
        add: { type: 'boolean', description: 'Stage all changes', default: true }
      },
      required: ['message']
    }
  },
  
  // GitHub operations
  'gh_run': {
    name: 'gh_run',
    description: 'Run a gh CLI command',
    inputSchema: {
      type: 'object',
      properties: {
        command: { type: 'string', description: 'gh command (e.g., "repo list")' }
      },
      required: ['command']
    }
  },
  
  // Web search
  'web_search': {
    name: 'web_search',
    description: 'Search the web',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query' },
        count: { type: 'number', description: 'Number of results', default: 5 }
      },
      required: ['query']
    }
  },
  
  'web_fetch': {
    name: 'web_fetch',
    description: 'Fetch and extract readable content from a URL',
    inputSchema: {
      type: 'object',
      properties: {
        url: { type: 'string', description: 'URL to fetch' },
        maxChars: { type: 'number', description: 'Max characters', default: 10000 }
      },
      required: ['url']
    }
  },
  
  // Shell commands
  'exec': {
    name: 'exec',
    description: 'Execute a shell command',
    inputSchema: {
      type: 'object',
      properties: {
        command: { type: 'string', description: 'Shell command' },
        timeout: { type: 'number', description: 'Timeout in seconds', default: 30 }
      },
      required: ['command']
    }
  },
  
  // Screenshot with Peekaboo
  'peekaboo_screenshot': {
    name: 'peekaboo_screenshot',
    description: 'Take a screenshot using Peekaboo',
    inputSchema: {
      type: 'object',
      properties: {
        mode: { type: 'string', enum: ['screen', 'window', 'app'], default: 'screen' },
        target: { type: 'string', description: 'App name or window title' },
        path: { type: 'string', description: 'Output path' }
      }
    }
  },
  
  // Memory operations
  'memory_search': {
    name: 'memory_search',
    description: 'Search memory files',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query' },
        maxResults: { type: 'number', default: 5 }
      },
      required: ['query']
    }
  },
  
  'memory_get': {
    name: 'memory_get',
    description: 'Read memory file snippet',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Memory file path' },
        from: { type: 'number', description: 'Start line' },
        lines: { type: 'number', description: 'Number of lines' }
      }
    }
  }
};

// List tools handler
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: Object.values(tools) };
});

// Call tool handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  try {
    let result;
    
    switch (name) {
      case 'read_file': {
        const content = readFileSync(args.path, 'utf-8');
        result = { content, success: true };
        break;
      }
      
      case 'write_file': {
        writeFileSync(args.path, args.content);
        result = { success: true, path: args.path };
        break;
      }
      
      case 'edit_file': {
        let content = readFileSync(args.path, 'utf-8');
        content = content.replace(args.oldText, args.newText);
        writeFileSync(args.path, content);
        result = { success: true };
        break;
      }
      
      case 'list_files': {
        const files = readdirSync(args.dir || '.');
        result = { files, success: true };
        break;
      }
      
      case 'grep_search': {
        try {
          const output = execSync(`grep -r "${args.query}" "${args.path || '.'}" --include="*.js" --include="*.ts" --include="*.md" --include="*.json" -l 2>/dev/null | head -20`, 
            { encoding: 'utf-8', maxBuffer: 1024 * 1024 });
          result = { files: output.split('\n').filter(f => f), success: true };
        } catch (e) {
          result = { files: [], success: true };
        }
        break;
      }
      
      case 'git_status': {
        try {
          const output = execSync('git status', { encoding: 'utf-8' });
          result = { status: output, success: true };
        } catch (e) {
          result = { status: e.message, success: false };
        }
        break;
      }
      
      case 'git_commit': {
        try {
          if (args.add !== false) {
            execSync('git add .', { encoding: 'utf-8' });
          }
          execSync(`git commit -m "${args.message}"`, { encoding: 'utf-8' });
          result = { success: true };
        } catch (e) {
          result = { error: e.message, success: false };
        }
        break;
      }
      
      case 'gh_run': {
        try {
          const output = execSync(`gh ${args.command}`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 });
          result = { output, success: true };
        } catch (e) {
          result = { error: e.message, success: false };
        }
        break;
      }
      
      case 'web_search': {
        // Return placeholder - needs API key
        result = { error: 'Web search requires Brave API key configuration in Clawdbot', success: false };
        break;
      }
      
      case 'web_fetch': {
        result = { error: 'Use web_fetch through Clawdbot gateway', success: false };
        break;
      }
      
      case 'exec': {
        try {
          const output = execSync(args.command, { 
            encoding: 'utf-8', 
            timeout: (args.timeout || 30) * 1000,
            maxBuffer: 1024 * 1024 * 10
          });
          result = { output, success: true };
        } catch (e) {
          result = { output: e.stdout || '', error: e.message, success: false };
        }
        break;
      }
      
      case 'peekaboo_screenshot': {
        try {
          const path = args.path || `/tmp/screenshot-${Date.now()}.png`;
          const target = args.target ? `--${args.mode} ${args.target}` : `--${args.mode}`;
          execSync(`peekaboo image ${target} --path "${path}"`, { encoding: 'utf-8' });
          result = { path, success: true };
        } catch (e) {
          result = { error: e.message, success: false };
        }
        break;
      }
      
      case 'memory_search': {
        result = { error: 'Memory operations through Clawdbot only', success: false };
        break;
      }
      
      case 'memory_get': {
        result = { error: 'Memory operations through Clawdbot only', success: false };
        break;
      }
      
      default:
        result = { error: `Unknown tool: ${name}`, success: false };
    }
    
    return {
      content: [{ type: 'text', text: JSON.stringify(result) }]
    };
  } catch (error) {
    return {
      content: [{ type: 'text', text: JSON.stringify({ error: error.message, success: false }) }]
    };
  }
});

// Start server
const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);

console.error('Clawdbot MCP Server running...');
