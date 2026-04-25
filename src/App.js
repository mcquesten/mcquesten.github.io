import './App.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="profile">
          <img
            src="/profile.jpg"
            alt="Richard McQuesten"
            className="profile-img"
          />

          <div>
            <p className="eyebrow">ASU Computer Science · Cybersecurity</p>
            <h1>Richard McQuesten</h1>
          </div>
        </div>

        <p className="intro">
          I’m a senior at Arizona State University studying computer science
          with a concentration in cybersecurity. My main interests are reverse
          engineering, digital forensics, and understanding how systems behave
          beneath the surface.
        </p>

        <div className="links">
          <a href="https://github.com/mcquesten" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mcquesten" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:rmcquest@asu.edu">Email</a>
        </div>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I’m interested in low-level security work, binary analysis, malware
          analysis concepts, and forensic investigation. I enjoy breaking down
          complex technical problems to understand what happened, how it
          happened, and why.
        </p>
      </section>

      <section className="section">
        <h2>Relevant Coursework</h2>
        <p>
          Introduction to Cybersecurity · Computer Systems Security · Computer
          & Network Forensics · Computer Network Security · Computer Networks ·
          Distributed Software Development
        </p>
      </section>

      <section className="section">
        <h2>Projects & Technical Work</h2>

        <div className="project">
          <h3>Socket Programming Project</h3>
          <p>
            Built a networked application using sockets to better understand
            client-server communication, peer interaction, protocol design, and
            distributed system behavior.
          </p>
        </div>

        <div className="project">
          <h3>Binary Analysis Coursework</h3>
          <p>
            Used IDA and Ghidra to analyze compiled binaries, reconstruct
            control flow, identify functions, and understand low-level program
            behavior through static analysis.
          </p>
        </div>

        <div className="project">
          <h3>Security & Forensics Coursework</h3>
          <p>
            Studied system security, network security, and computer forensics
            with a focus on vulnerabilities, network evidence, digital
            artifacts, and investigation workflows.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <p>
          Python · C/C++ · Linux · Git · Networking · Socket Programming · IDA ·
          Ghidra · Wireshark · Digital Forensics · Reverse Engineering ·
          Cybersecurity Fundamentals
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          I’m currently looking for opportunities related to cybersecurity,
          reverse engineering, digital forensics, and security analysis.
        </p>
      </section>
    </main>
  );
}

export default App;