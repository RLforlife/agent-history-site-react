#!/usr/bin/env node
// Clawdbot MCP Server

const SDK_PATH = '/Users/wtfmac/clawd/node_modules/@modelcontextprotocol/sdk';
const { Server } = require(`${SDK_PATH}/dist/cjs/server/index.js`);
const { StdioServerTransport } = require(`${SDK_PATH}/dist/cjs/server/stdio.js`);
const { CallToolRequestSchema, ListToolsRequestSchema } = require(`${SDK_PATH}/dist/cjs/types.js`);

const { execSync } = require('child_process');
const { readFileSync, writeFileSync, readdirSync } = require('fs');

// Create MCP Server
const server = new Server(
  { name: 'clawdbot-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// Tool definitions
const tools = [
  { name: 'read_file', description: 'Read file contents',
    inputSchema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] }},
  { name: 'write_file', description: 'Create or overwrite a file',
    inputSchema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] }},
  { name: 'edit_file', description: 'Edit file by replacing exact text',
    inputSchema: { type: 'object', properties: { path: { type: 'string' }, oldText: { type: 'string' }, newText: { type: 'string' } }, required: ['path', 'oldText', 'newText'] }},
  { name: 'list_files', description: 'List files in a directory',
    inputSchema: { type: 'object', properties: { dir: { type: 'string' } } }},
  { name: 'grep_search', description: 'Search files for a pattern',
    inputSchema: { type: 'object', properties: { query: { type: 'string' }, path: { type: 'string' } }, required: ['query'] }},
  { name: 'git_status', description: 'Show git status',
    inputSchema: { type: 'object', properties: {} }},
  { name: 'git_commit', description: 'Create a git commit',
    inputSchema: { type: 'object', properties: { message: { type: 'string' }, add: { type: 'boolean' } }, required: ['message'] }},
  { name: 'gh_run', description: 'Run a gh CLI command',
    inputSchema: { type: 'object', properties: { command: { type: 'string' } }, required: ['command'] }},
  { name: 'exec', description: 'Execute a shell command',
    inputSchema: { type: 'object', properties: { command: { type: 'string' }, timeout: { type: 'number' } }, required: ['command'] }},
  { name: 'peekaboo_screenshot', description: 'Take a screenshot',
    inputSchema: { type: 'object', properties: { mode: { type: 'string' }, target: { type: 'string' }, path: { type: 'string' } }}}
];

// List tools handler
server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

// Call tool handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  try {
    let result;
    switch (name) {
      case 'read_file':
        result = { content: readFileSync(args.path, 'utf-8'), success: true };
        break;
      case 'write_file':
        writeFileSync(args.path, args.content);
        result = { success: true };
        break;
      case 'edit_file':
        writeFileSync(args.path, readFileSync(args.path, 'utf-8').replace(args.oldText, args.newText));
        result = { success: true };
        break;
      case 'list_files':
        result = { files: readdirSync(args.dir || '.'), success: true };
        break;
      case 'grep_search':
        try {
          const output = execSync(`grep -r "${args.query}" "${args.path || '.'}" --include="*.js" --include="*.ts" --include="*.md" -l 2>/dev/null | head -20`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 });
          result = { files: output.split('\n').filter(f => f), success: true };
        } catch (e) {
          result = { files: [], success: true };
        }
        break;
      case 'git_status':
        result = { status: execSync('git status', { encoding: 'utf-8' }), success: true };
        break;
      case 'git_commit':
        try {
          if (args.add !== false) execSync('git add .', { encoding: 'utf-8' });
          execSync(`git commit -m "${args.message}"`, { encoding: 'utf-8' });
          result = { success: true };
        } catch (e) {
          result = { error: e.message, success: false };
        }
        break;
      case 'gh_run':
        result = { output: execSync(`gh ${args.command}`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 }), success: true };
        break;
      case 'exec':
        result = { output: execSync(args.command, { encoding: 'utf-8', timeout: (args.timeout || 30) * 1000 }), success: true };
        break;
      case 'peekaboo_screenshot':
        try {
          const path = args.path || `/tmp/screenshot-${Date.now()}.png`;
          const mode = args.mode ? `--${args.mode}` : '--screen';
          const target = args.target ? args.target : '';
          execSync(`peekaboo image ${mode} ${target} --path "${path}"`, { encoding: 'utf-8' });
          result = { path, success: true };
        } catch (e) {
          result = { error: e.message, success: false };
        }
        break;
      default:
        result = { error: `Unknown tool: ${name}`, success: false };
    }
    return { content: [{ type: 'text', text: JSON.stringify(result) }] };
  } catch (error) {
    return { content: [{ type: 'text', text: JSON.stringify({ error: error.message }) }] };
  }
});

// Start server
server.connect(new StdioServerTransport()).catch(console.error);
console.error('Clawdbot MCP Server running...');
