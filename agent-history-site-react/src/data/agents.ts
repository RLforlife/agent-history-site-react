export const agents = [
  { name: 'LangChain', date: '2022.10', year: 2022, description: '开源 LLM 应用框架', significance: '统一 LLM 应用开发范式' },
  { name: 'AutoGPT', date: '2023.03', year: 2023, description: '首个开源自主 Agent', significance: '演示目标分解与自我迭代' },
  { name: 'AgentGPT', date: '2023.07', year: 2023, description: '浏览器端运行', significance: '自称目标即可生成任务' },
  { name: 'SuperAGI', date: '2023.08', year: 2023, description: '开源 Agent 框架', significance: '支持多 Agent 管理' },
  { name: 'AutoGen', date: '2023.10', year: 2023, description: '微软开源多 Agent 协作', significance: '多 Agent 对话框架' },
  { name: 'Cursor', date: '2023', year: 2023, description: 'AI 优先代码编辑器', significance: '集成 AI 辅助开发工作流' },
  { name: 'Aider', date: '2023', year: 2023, description: '轻量级结对编程', significance: '持续活跃的 CLI 编程助手' },
  { name: 'OpenManus', date: '2024.06', year: 2024, description: '通用计算机操作', significance: '浏览器、文件、终端操作' },
  { name: 'WebVoyager', date: '2024', year: 2024, description: '端到端网页导航', significance: '端到端网页操作 Agent' },
  { name: 'SWE-Agent', date: '2024', year: 2024, description: '开源软件工程 Agent', significance: 'GitHub Issue 修复' },
  { name: 'OpenHands', date: '2024', year: 2024, description: 'MIT 许可证 AI 开发者', significance: '开源 AI 软件开发助手' },
  { name: 'LlamaIndex', date: '2024', year: 2024, description: 'RAG 与知识检索', significance: '构建知识增强 Agent' },
  { name: 'CrewAI', date: '2024', year: 2024, description: '多角色 Agent 编排', significance: '角色分工协作框架' },
  { name: 'Cursor Agent', date: '2024', year: 2024, description: '商业化 AI IDE 内置', significance: 'AI 原生开发工具' },
  { name: 'Claude Code', date: '2025', year: 2025, description: 'Anthropic CLI Agent', significance: '将 Agent 能力带入终端' },
  { name: 'OpenCode', date: '2025', year: 2025, description: '微软开源代码编辑器', significance: '通用开源编程 Agent' },
  { name: 'Clawdbot', date: '2025', year: 2025, description: '个人 AI 助手', significance: '多渠道消息平台集成' },
];

export const frameworks = [
  { name: 'LangChain/LangGraph', team: 'LangChain AI', feature: 'Agent 编排与图结构' },
  { name: 'AutoGen', team: 'Microsoft', feature: '多 Agent 对话框架' },
  { name: 'CrewAI', team: 'CrewAI Inc.', feature: '多角色 Agent 编排' },
  { name: 'LlamaIndex', team: 'LlamaIndex', feature: 'RAG 与知识检索' },
  { name: 'SuperAGI', team: '开源社区', feature: '独立 Agent 运行平台' },
  { name: 'AgentKit', team: 'AI21 Labs', feature: '结构化 Agent 构建' },
];

export const earlyAgents = [
  { time: '2023.04', project: 'AutoGPT', significance: '首个开源自主 Agent，演示目标分解与自我迭代' },
  { time: '2023.05', project: 'LangChain', significance: '开源框架，统一 LLM 应用开发范式' },
  { time: '2023.07', project: 'AgentGPT', significance: '浏览器端运行，自称目标即可生成任务' },
  { time: '2023.08', project: 'SuperAGI', significance: '开源 Agent 框架，支持多 Agent 管理' },
  { time: '2023.10', project: 'AutoGen', significance: '微软开源，多 Agent 协作框架' },
];

export const computerAgents = [
  { project: 'OpenManus', date: '2024.06', capability: '通用计算机操作' },
  { project: 'WebVoyager', date: '2024', capability: '端到端网页导航' },
  { project: 'OS-World', date: '2024', capability: '跨操作系统操作基准' },
];

export const programmingAgents = [
  { project: 'SWE-Agent', year: '2024', type: 'SE Agent', desc: '开源软件工程 Agent' },
  { project: 'OpenHands', year: '2024', type: 'Developer', desc: 'MIT 许可证 AI 开发者' },
  { project: 'SWE-bench Verified', year: '2024', type: 'Benchmark', desc: '改进版软件工程评测' },
  { project: 'Claude Code', year: '2025', type: 'CLI', desc: 'Anthropic 命令行 Agent' },
  { project: 'OpenCode', year: '2025', type: 'IDE', desc: '微软开源编程 Agent' },
  { project: 'Aider', year: '2023-2025', type: 'Pair', desc: '轻量级结对编程' },
  { project: 'Cursor Agent', year: '2024', type: 'IDE', desc: '商业化 AI IDE' },
];

export const standards = [
  { name: 'MCP', org: 'Anthropic', year: '2024', desc: 'Model Context Protocol - 上下文与工具标准化' },
  { name: 'A2A', org: 'Google', year: '2024', desc: 'Agent-to-Agent - Agent 间通信协议' },
  { name: 'Agent Protocol', org: 'AI Standards', year: '2024', desc: '任务描述与结果返回标准化' },
  { name: 'Skill Schema', org: 'OpenAI', year: '2023', desc: 'GPTs 技能定义格式' },
];

export const benchmarks = [
  { name: 'GAIA', org: 'Meta AI', domain: '通用任务', desc: '通用任务评测' },
  { name: 'AgentBench', org: '清华/CMU', domain: '多环境', desc: '多环境评测（代码、网页、工具）' },
  { name: 'SWE-bench', org: 'OpenAI', domain: '软件工程', desc: 'GitHub Issue 修复' },
  { name: 'SWE-bench Verified', org: 'OpenAI', domain: '软件工程', desc: '改进版（无数据泄露）' },
  { name: 'OS-World', org: '开源社区', domain: '计算机操作', desc: '计算机操作评测基准' },
  { name: 'BIRD', org: '浙大/清华', domain: '数据库操作', desc: '数据库操作评测' },
  { name: 'HumanEval', org: 'OpenAI', domain: '代码生成', desc: '代码生成评测' },
  { name: 'MBPP', org: 'Google', domain: 'Python', desc: 'Python 编程评测' },
];
