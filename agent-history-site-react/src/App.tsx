import { agents, frameworks, standards, benchmarks } from './data/agents'

function App() {
  return (
    <div className="app">
      {/* Terminal Header */}
      <header className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <span className="terminal-title">agent-history-site-react — 2022-2025</span>
        <span className="prompt">user@localhost:~$</span>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <pre>
{`    ____                      _            __  ___      __    _      __
   / __ \\____  ___  ____     (_)__  _____/  |/  /____ / /   (_)____/ /_
  / /_/ / __ \\/ _ \\/ __ \\   / / _ \\/ ___/ /|_/ // __ \\  / |/|/ __/ __/
 / _, _/ /_/ /  __/ / / /  / /  __(__  ) /  / / /_/ / /|  |/ /_/ /_
/_/ |_|\____/\\___/_/ /_/  /_/\\___/____/_/|_|/\\____/_/ |_|_|\\__/\\__/`}
          </pre>
          <h1 className="hero-title">$ ./ai-agents-history.sh --timeline=2022-2025</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            &gt; 探索 AI Agent 技术从框架到自主智能的演进之路
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">18+</div>
              <div className="stat-label">Milestone Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">Years (2022-2025)</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">6</div>
              <div className="stat-label">Key Frameworks</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4</div>
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
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">grep -n "milestone" timeline.json | head -20</span>
          </div>
          
          <div className="timeline">
            {/* Group by year */}
            {[2022, 2023, 2024, 2025].map(year => {
              const yearAgents = agents.filter(a => a.year === year)
              if (yearAgents.length === 0) return null
              
              return (
                <div key={year}>
                  <h3 style={{ 
                    color: 'var(--text-dim)', 
                    fontSize: '0.85rem', 
                    margin: '1.5rem 0 1rem 0',
                    paddingLeft: '1rem'
                  }}>
                    === {year} ===
                  </h3>
                  {yearAgents.map((agent, idx) => (
                    <div key={agent.name} className="timeline-item fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="timeline-date">{agent.date}</div>
                      <div className="timeline-content">
                        <div className="timeline-name">{agent.name}</div>
                        <div className="timeline-desc">{agent.description}</div>
                        <div className="timeline-significance">→ {agent.significance}</div>
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
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">ls -la frameworks/ | grep -E "^d"</span>
          </div>
          
          <div className="grid-3">
            {frameworks.map(fw => (
              <div key={fw.name} className="card fade-in">
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
            <h2 className="section-title">[TABLE] Early Open Source Agents (2023)</h2>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">cat early-agents.csv</span>
          </div>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Project</th>
                  <th>Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2023.04</td><td>AutoGPT</td><td>首个开源自主 Agent，演示目标分解与自我迭代</td></tr>
                <tr><td>2023.05</td><td>LangChain</td><td>开源框架，统一 LLM 应用开发范式</td></tr>
                <tr><td>2023.07</td><td>AgentGPT</td><td>浏览器端运行，自称目标即可生成任务</td></tr>
                <tr><td>2023.08</td><td>SuperAGI</td><td>开源 Agent 框架，支持多 Agent 管理</td></tr>
                <tr><td>2023.10</td><td>AutoGen</td><td>微软开源，多 Agent 协作框架</td></tr>
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
            <h2 className="section-title">[GRID] Programming Agents (2024-2025)</h2>
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">find . -name "*agent*" -type f | grep -E "(SWE|Code|Hands)"</span>
          </div>
          
          <div className="grid-4">
            {[
              { name: 'SWE-Agent', date: '2024', desc: '开源软件工程 Agent' },
              { name: 'OpenHands', date: '2024', desc: 'MIT 许可证 AI 开发者' },
              { name: 'Claude Code', date: '2025', desc: 'Anthropic CLI Agent' },
              { name: 'OpenCode', date: '2025', desc: '微软开源编程 Agent' },
              { name: 'Aider', date: '2023', desc: '轻量级结对编程' },
              { name: 'Cursor Agent', date: '2024', desc: '商业化 AI IDE' },
            ].map(agent => (
              <div key={agent.name} className="card fade-in">
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
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">cat protocols.json</span>
          </div>
          
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Protocol</th>
                  <th>Organization</th>
                  <th>Year</th>
                  <th>Purpose</th>
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
          </div>
          
          <div className="command-bar">
            <span className="prompt">$</span>
            <span className="command">python evaluate.py --benchmarks=all</span>
          </div>
          
          <div className="grid-2">
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>Benchmark</th><th>Organization</th><th>Domain</th></tr>
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
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>Benchmark</th><th>Organization</th><th>Domain</th></tr>
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
        <pre style={{ marginBottom: '1rem' }}>
{`    _    ___  __    _   _ ____   ___  ____  
   | |  / _ \\|  |  | | | |  _ \\ / _ \\|  _ \\ 
   | |_| |_| | |_| | |_| | | | | |_| | | | |
   |_| |_||_| |_| |_| |_| |_| |_| |_| |_|`}
        </pre>
        <p>AI Agents 正在重新定义人机协作的边界</p>
        <p style={{ marginTop: '0.5rem' }}>
          <span style={{ color: 'var(--text-primary)' }}>$</span> echo "Built with React + Terminal Style"
        </p>
      </footer>
    </div>
  )
}

export default App
