import { agents, frameworks, earlyAgents, computerAgents, programmingAgents, standards, benchmarks } from './data/agents'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-title">AI_AGENTS_HISTORY.md</div>
        <div className="header-content">
          <pre className="ascii-art">
{`    ____                      _            __  ___      __    _      __
   / __ \\____  ___  ____     (_)__  _____/  |/  /____ / /   (_)____/ /_
  / /_/ / __ \\/ _ \\/ __ \\   / / _ \\/ ___/ /|_/ // __ \\  / |/|/ __/ __/
 / _, _/ /_/ /  __/ / / /  / /  __(__  ) /  / / /_/ / /|  |/ /_/ /_
/_/ |_|\\____/\\___/_/ /_/  /_/\\___/____/_/|_|/\\____/_/ |_|_|\\__/\\__/`}
          </pre>
          <div className="cmd-line">
            <span className="prompt">$</span>
            <span className="cmd">cat README.md | head -20</span>
          </div>
          
          {/* Stats Table */}
          <table className="stats-table">
            <tbody>
              <tr>
                <td>PROJECTS</td>
                <td><span className="stat-value">{agents.length}</span> <span className="stat-label">total</span></td>
                <td>YEARS</td>
                <td><span className="stat-value">2022-2025</span> <span className="stat-label">span</span></td>
                <td>STANDARDS</td>
                <td><span className="stat-value">{standards.length}</span> <span className="stat-label">protocols</span></td>
                <td>BENCHMARKS</td>
                <td><span className="stat-value">{benchmarks.length}</span> <span className="stat-label">metrics</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>

      {/* Timeline Table */}
      <section className="section">
        <div className="section-header">[01] TIMELINE - AI Agents Evolution (2022-2025)</div>
        <div className="section-cmd">$ grep -n "timeline" timeline.csv | sort -k1,2</div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>YEAR</th>
              <th>DATE</th>
              <th>PROJECT</th>
              <th>DESCRIPTION</th>
              <th>SIGNIFICANCE</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(agent => (
              <tr key={agent.name}>
                <td>{agent.year}</td>
                <td>{agent.date}</td>
                <td><strong>{agent.name}</strong></td>
                <td>{agent.description}</td>
                <td>{agent.significance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Two Column Tables */}
      <div className="table-row">
        {/* Early Agents */}
        <div className="table-col">
          <section className="section">
            <div className="section-header">[02] EARLY OPEN SOURCE AGENTS (2023)</div>
            <div className="section-cmd">$ ls -la 2023/*agent*</div>
            
            <table className="data-table compact-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PROJECT</th>
                  <th>SIGNIFICANCE</th>
                </tr>
              </thead>
              <tbody>
                {earlyAgents.map(item => (
                  <tr key={item.project}>
                    <td>{item.time}</td>
                    <td><strong>{item.project}</strong></td>
                    <td>{item.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Frameworks */}
        <div className="table-col">
          <section className="section">
            <div className="section-header">[03] AGENT FRAMEWORKS</div>
            <div className="section-cmd">$ ls frameworks/</div>
            
            <table className="data-table compact-table">
              <thead>
                <tr>
                  <th>FRAMEWORK</th>
                  <th>TEAM</th>
                  <th>FEATURES</th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map(fw => (
                  <tr key={fw.name}>
                    <td><strong>{fw.name}</strong></td>
                    <td>{fw.team}</td>
                    <td>{fw.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>

      {/* Computer Operation Agents */}
      <section className="section">
        <div className="section-header">[04] COMPUTER OPERATION AGENTS (2024)</div>
        <div className="section-cmd">$ find . -name "*computer*" -o -name "*browser*"</div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>DATE</th>
              <th>CAPABILITIES</th>
            </tr>
          </thead>
          <tbody>
            {computerAgents.map(item => (
              <tr key={item.project}>
                <td><strong>{item.project}</strong></td>
                <td>{item.date}</td>
                <td>{item.capability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Programming Agents */}
      <section className="section">
        <div className="section-header">[05] PROGRAMMING AGENTS (2024-2025)</div>
        <div className="section-cmd">$ grep -r "def.*code\|def.*program" *.py | head -20</div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>YEAR</th>
              <th>TYPE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {programmingAgents.map(item => (
              <tr key={item.project}>
                <td><strong>{item.project}</strong></td>
                <td>{item.year}</td>
                <td>{item.type}</td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Standards and Benchmarks */}
      <div className="table-row">
        {/* Standards */}
        <div className="table-col">
          <section className="section">
            <div className="section-header">[06] PROTOCOL STANDARDS</div>
            <div className="section-cmd">$ cat protocols.json | jq '.[]'</div>
            
            <table className="data-table compact-table">
              <thead>
                <tr>
                  <th>PROTOCOL</th>
                  <th>ORG</th>
                  <th>YEAR</th>
                  <th>PURPOSE</th>
                </tr>
              </thead>
              <tbody>
                {standards.map(item => (
                  <tr key={item.name}>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.org}</td>
                    <td>{item.year}</td>
                    <td>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Benchmarks */}
        <div className="table-col">
          <section className="section">
            <div className="section-header">[07] EVALUATION BENCHMARKS</div>
            <div className="section-cmd">$ python evaluate.py --list</div>
            
            <table className="data-table compact-table">
              <thead>
                <tr>
                  <th>BENCHMARK</th>
                  <th>ORG</th>
                  <th>DOMAIN</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(item => (
                  <tr key={item.name}>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.org}</td>
                    <td>{item.domain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="cmd-line">
          <span className="prompt">$</span>
          <span className="cmd">echo "AI Agents 正在重新定义人机协作的边界"</span>
        </div>
        <div style={{ marginTop: '4px' }}>
          Last updated: 2025-02-04 | Built with React + Terminal Style
        </div>
      </footer>
    </div>
  )
}

export default App
