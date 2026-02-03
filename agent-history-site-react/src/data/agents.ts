export interface Agent {
  name: string;
  date: string;
  year: number;
  description: string;
  significance: string;
  category: 'framework' | 'autonomous' | 'ide' | 'cli' | 'benchmark' | 'standard';
}

export const agents: Agent[] = [
  // 2022
  { name: 'LangChain', date: '2022.10', year: 2022, description: '开源 LLM 应用框架', significance: '统一 LLM 应用开发范式', category: 'framework' },
  
  // 2023
  { name: 'AutoGPT', date: '2023.03', year: 2023, description: '首个开源自主 Agent', significance: '演示目标分解与自我迭代', category: 'autonomous' },
  { name: 'AgentGPT', date: '2023.07', year: 2023, description: '浏览器端运行', significance: '自称目标即可生成任务', category: 'autonomous' },
  { name: 'SuperAGI', date: '2023.08', year: 2023, description: '开源 Agent 框架', significance: '支持多 Agent 管理', category: 'framework' },
  { name: 'AutoGen', date: '2023.10', year: 2023, description: '微软开源多 Agent 协作', significance: '多 Agent 对话框架', category: 'framework' },
  { name: 'Cursor', date: '2023', year: 2023, description: 'AI 优先代码编辑器', significance: '集成 AI 辅助开发工作流', category: 'ide' },
  { name: 'Aider', date: '2023', year: 2023, description: '轻量级结对编程', significance: '持续活跃的 CLI 编程助手', category: 'cli' },
  
  // 2024
  { name: 'OpenManus', date: '2024.06', year: 2024, description: '通用计算机操作', significance: '浏览器、文件、终端操作', category: 'autonomous' },
  { name: 'WebVoyager', date: '2024', year: 2024, description: '端到端网页导航', significance: '端到端网页操作 Agent', category: 'autonomous' },
  { name: 'SWE-Agent', date: '2024', year: 2024, description: '开源软件工程 Agent', significance: 'GitHub Issue 修复', category: 'cli' },
  { name: 'OpenHands', date: '2024', year: 2024, description: 'MIT 许可证 AI 开发者', significance: '开源 AI 软件开发助手', category: 'cli' },
  { name: 'LlamaIndex', date: '2024', year: 2024, description: 'RAG 与知识检索', significance: '构建知识增强 Agent', category: 'framework' },
  { name: 'CrewAI', date: '2024', year: 2024, description: '多角色 Agent 编排', significance: '角色分工协作框架', category: 'framework' },
  { name: 'Cursor Agent', date: '2024', year: 2024, description: '商业化 AI IDE 内置', significance: 'AI 原生开发工具', category: 'ide' },
  
  // 2025
  { name: 'Claude Code', date: '2025', year: 2025, description: 'Anthropic CLI Agent', significance: '将 Agent 能力带入终端', category: 'cli' },
  { name: 'OpenCode', date: '2025', year: 2025, description: '微软开源代码编辑器', significance: '通用开源编程 Agent', category: 'ide' },
  { name: 'Clawdbot', date: '2025', year: 2025, description: '个人 AI 助手', significance: '多渠道消息平台集成', category: 'cli' },
];

export const frameworks = [
  { name: 'LangChain/LangGraph', team: 'LangChain AI', feature: 'Agent 编排与图结构' },
  { name: 'AutoGen', team: 'Microsoft', feature: '多 Agent 对话框架' },
  { name: 'CrewAI', team: 'CrewAI Inc.', feature: '多角色 Agent 编排' },
  { name: 'LlamaIndex', team: 'LlamaIndex', feature: 'RAG 与知识检索' },
  { name: 'SuperAGI', team: '开源社区', feature: '独立 Agent 运行平台' },
  { name: 'AgentKit', team: 'AI21 Labs', feature: '结构化 Agent 构建' },
];

export const standards = [
  { name: 'MCP', org: 'Anthropic', year: '2024', desc: 'Model Context Protocol - 上下文与工具标准化' },
  { name: 'A2A', org: 'Google', year: '2024', desc: 'Agent-to-Agent - Agent 间通信协议' },
  { name: 'Agent Protocol', org: 'AI Standards', year: '2024', desc: '任务描述与结果返回标准化' },
  { name: 'Skill Schema', org: 'OpenAI', year: '2023', desc: 'GPTs 技能定义格式' },
];

export const benchmarks = [
  { name: 'GAIA', org: 'Meta AI', desc: '通用任务评测' },
  { name: 'AgentBench', org: '清华/CMU', desc: '多环境评测（代码、网页、工具）' },
  { name: 'SWE-bench', org: 'OpenAI', desc: '软件工程 GitHub Issue 修复' },
  { name: 'SWE-bench Verified', org: 'OpenAI', desc: '改进版（无数据泄露）' },
  { name: 'OS-World', org: '开源社区', desc: '计算机操作评测基准' },
  { name: 'BIRD', org: '浙大/清华', desc: '数据库操作评测' },
  { name: 'HumanEval', org: 'OpenAI', desc: '代码生成评测' },
  { name: 'MBPP', org: 'Google', desc: 'Python 编程评测' },
];
