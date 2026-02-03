import { agents, frameworks, standards, benchmarks } from './data/agents'

function App() {
  const currentDate = new Date().toISOString().split('T')[0]
  const lastUpdated = '2025-02-04'
  
  return (
    <div className="app flicker">
      {/* Terminal Header */}
      <header className="terminal-header">
        {/* Window Controls */}
        <div className="terminal-controls">
          <div className="terminal-dots">
            <span className="terminal-dot dot-red" title="Close"></span>
            <span className="terminal-dot dot-yellow" title="Minimize"></span>
            <span className="terminal-dot dot-green" title="Maximize"></span>
          </div>
          <span className="terminal-title">Terminal — bash — 120×40</span>
        </div>
        
        {/* Tab Bar */}
        <div className="terminal-tabs">
          <div className="terminal-tab active">
            <span className="terminal-tab-icon">📄</span>
            AI_AGENTS_HISTORY.md
            <span className="terminal-tab-close">×</span>
          </div>
          <div className="terminal-tab">
            <span className="terminal-tab-icon">📁</span>
            timeline/
          </div>
          <div className="terminal-tab">
            <span className="terminal-tab-icon">⚙️</span>
            config
          </div>
        </div>
        
        {/* Breadcrumb */}
        <div className="terminal-breadcrumb">
          <span className="breadcrumb-user">user</span>
          <span className="breadcrumb-at">@</span>
          <span className="breadcrumb-host">localhost</span>
          <span className="breadcrumb-at">:</span>
          <span className="breadcrumb-path">~/agent-history-site-react</span>
          <span className="breadcrumb-prompt">$</span>
          <span className="cursor-line"></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="ascii-art-container">
            <pre className="ascii-art">
{`
    █████╗  ██████╗ ███████╗███╗   ██╗████████╗███████╗
   ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██╔════╝
   ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ███████╗
   ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
   ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ███████║
   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
   
   ██╗  ██╗██╗███████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
   ██║  ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
   ███████║██║███████╗   ██║   ██║   ██║██████╔╝ ╚████╔╝ 
   ██╔══██║██║╚════██║   ██║   ██║   ██║██╔══██╗  ╚██╔╝  
   ██║  ██║██║███████║   ██║   ╚██████╔╝██║  ██║   ██║   
   ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
`}
            </pre>
          </div>
          
          <div className="hero-command">
            <span className="prompt-symbol">$</span>
            <span className="command-text">./ai-agents-history.sh</span>
            <span className="command-args">--timeline=2022-2025</span>
            <span className="cursor"></span>
          </div>
          
          <p className="hero-desc typing-text">
            探索 AI Agent 技术从框架到自主智能的演进之路
          </p>
          
          <div className="hero-output">
            [INFO] Loading timeline data... Done.
          </div>
          <div className="hero-output">
            [INFO] Parsing {agents.length} agent milestones... Done.
          </div>
          
          <div className="hero-stats">
            <div className="stat-item fade-in stagger-1">
              <div className="stat-value">18+</div>
              <div className="stat-label">Milestone Projects</div>
            </div>
            <div className="stat-item fade-in stagger-2">
              <div className="stat-value">4</div>
              <div className="stat-label">Years (2022-2025)</div>
            </div>
            <div className="stat-item fade-in stagger-3">
              <div className="stat-value">{frameworks.length}</div>
              <div className="stat-label">Key Frameworks</div>
            </div>
            <div className="stat-item fade-in stagger-4">
              <div className="stat-value">{standards.length}</div>
              <div className="stat-label">Industry Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">[TIMELINE] AI Agent Evolution</h2>
            <span className="section-marker">// chronological view</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">grep -n "milestone" timeline.json</span>
            <span className="pipe">|</span>
            <span className="command">head -20</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="timeline">
            {[2022, 2023, 2024, 2025].map(year => {
              const yearAgents = agents.filter(a => a.year === year)
              if (yearAgents.length === 0) return null
              
              return (
                <div key={year}>
                  <h3 className="timeline-year">{year}</h3>
                  {yearAgents.map((agent, idx) => (
                    <div 
                      key={agent.name} 
                      className="timeline-item" 
                      style={{ animationDelay: `${idx * 0.15}s` }}
                    >
                      <div className="timeline-date">{agent.date}</div>
                      <div className="timeline-content">
                        <div className="timeline-name">{agent.name}</div>
                        <div className="timeline-desc">{agent.description}</div>
                        <div className="timeline-significance">{agent.significance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">[GRID] Agent Frameworks</h2>
            <span className="section-marker">// development tools</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">ls -la frameworks/</span>
            <span className="pipe">|</span>
            <span className="command">grep -E "^d"</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="grid-3">
            {frameworks.map((fw, idx) => (
              <div key={fw.name} className={`card fade-in stagger-${(idx % 6) + 1}`}>
                <div className="card-header">
                  <span className="card-name">{fw.name}</span>
                  <span className="card-badge">{fw.team}</span>
                </div>
                <div className="card-desc">{fw.feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Agents Table */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">[TABLE] Early Open Source Agents</h2>
            <span className="section-marker">// 2023 pioneers</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">cat early-agents.csv</span>
            <span className="pipe">|</span>
            <span className="command">column -t -s ','</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="table-container fade-in">
            <table>
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PROJECT</th>
                  <th>SIGNIFICANCE</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2023.04</td><td><strong>AutoGPT</strong></td><td>首个开源自主 Agent，演示目标分解与自我迭代</td></tr>
                <tr><td>2023.05</td><td><strong>LangChain</strong></td><td>开源框架，统一 LLM 应用开发范式</td></tr>
                <tr><td>2023.07</td><td><strong>AgentGPT</strong></td><td>浏览器端运行，自称目标即可生成任务</td></tr>
                <tr><td>2023.08</td><td><strong>SuperAGI</strong></td><td>开源 Agent 框架，支持多 Agent 管理</td></tr>
                <tr><td>2023.10</td><td><strong>AutoGen</strong></td><td>微软开源，多 Agent 协作框架</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programming Agents */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">[GRID] Programming Agents</h2>
            <span className="section-marker">// 2024-2025</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">find . -name "*agent*" -type f</span>
            <span className="pipe">|</span>
            <span className="command">grep -E "(SWE|Code|Hands)"</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="grid-4">
            {[
              { name: 'SWE-Agent', date: '2024', desc: '开源软件工程 Agent' },
              { name: 'OpenHands', date: '2024', desc: 'MIT 许可证 AI 开发者' },
              { name: 'Claude Code', date: '2025', desc: 'Anthropic CLI Agent' },
              { name: 'OpenCode', date: '2025', desc: '微软开源编程 Agent' },
              { name: 'Aider', date: '2023', desc: '轻量级结对编程' },
              { name: 'Cursor Agent', date: '2024', desc: '商业化 AI IDE' },
            ].map((agent, idx) => (
              <div key={agent.name} className={`card fade-in stagger-${(idx % 6) + 1}`}>
                <div className="card-header">
                  <span className="card-name">{agent.name}</span>
                  <span className="card-badge">{agent.date}</span>
                </div>
                <div className="card-desc">{agent.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">[TABLE] Protocol Standards</h2>
            <span className="section-marker">// interoperability</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">jq '.protocols[]' standards.json</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="table-container fade-in">
            <table>
              <thead>
                <tr>
                  <th>PROTOCOL</th>
                  <th>ORGANIZATION</th>
                  <th>YEAR</th>
                  <th>PURPOSE</th>
                </tr>
              </thead>
              <tbody>
                {standards.map(std => (
                  <tr key={std.name}>
                    <td><strong>{std.name}</strong></td>
                    <td>{std.org}</td>
                    <td>{std.year}</td>
                    <td>{std.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benchmarks Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2 className="section-title">[TABLE] Evaluation Benchmarks</h2>
            <span className="section-marker">// metrics & testing</span>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">python evaluate.py --benchmarks=all --format=table</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="grid-2">
            <div className="table-container fade-in stagger-1">
              <table>
                <thead>
                  <tr><th>BENCHMARK</th><th>ORG</th><th>DOMAIN</th></tr>
                </thead>
                <tbody>
                  {benchmarks.slice(0, 4).map(b => (
                    <tr key={b.name}>
                      <td><strong>{b.name}</strong></td>
                      <td>{b.org}</td>
                      <td>{b.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-container fade-in stagger-2">
              <table>
                <thead>
                  <tr><th>BENCHMARK</th><th>ORG</th><th>DOMAIN</th></tr>
                </thead>
                <tbody>
                  {benchmarks.slice(4).map(b => (
                    <tr key={b.name}>
                      <td><strong>{b.name}</strong></td>
                      <td>{b.org}</td>
                      <td>{b.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <pre className="footer-ascii">
{`╔════════════════════════════════════════════════════════════════╗
║  █████╗ ██╗    █████╗  ██████╗ ███████╗███╗   ██╗████████╗███████╗  ║
║ ██╔══██╗██║   ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██╔════╝  ║
║ ███████║██║   ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ███████╗  ║
║ ██╔══██║██║   ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║  ║
║ ██║  ██║██║   ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ███████║  ║
║ ╚═╝  ╚═╝╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝  ║
╚════════════════════════════════════════════════════════════════╝`}
        </pre>
        
        <div className="footer-content">
          <p className="footer-tagline">
            AI Agents 正在重新定义人机协作的边界
          </p>
          
          <div className="footer-command">
            <span className="prompt">$</span>
            <span className="cmd">echo</span>
            <span className="string">"Built with React + Terminal Style"</span>
            <span className="cursor-line"></span>
          </div>
          
          <div className="footer-status">
            <div className="footer-status-item">
              <span className="status-indicator"></span>
              <span>System Online</span>
            </div>
            <div className="footer-status-item">
              <span>PID: 42069</span>
            </div>
            <div className="footer-status-item">
              <span>TTY: pts/0</span>
            </div>
          </div>
          
          <div className="footer-timestamp">
            Last Updated: {lastUpdated} | Session: {currentDate}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
