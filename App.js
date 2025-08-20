function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "1rem", background: "#282c34", color: "white" }}>
        <h2>Pavani's Portfolio</h2>
      </nav>

      {/* Hero Section */}
      <header style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Hello, I'm Pavani 👋</h1>
        <p>B.Tech ECE | Aspiring Frontend Developer | Python Enthusiast</p>
      </header>

      {/* About Section */}
      <section style={{ padding: "2rem" }}>
        <h2>About Me</h2>
        <p>
          I'm a B.Tech student passionate about frontend development, Python, and
          building real-world projects. Currently seeking opportunities to apply my
          skills in React and web development.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ padding: "2rem", background: "#f5f5f5" }}>
        <h2>Skills</h2>
        <ul>
          <li>React, JavaScript, HTML, CSS</li>
          <li>Python, Flask, SQL</li>
          <li>IoT, Embedded Systems</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section style={{ padding: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            Automated Resume Screening System – <a href="https://github.com/Pavani-80">GitHub</a>
          </li>
          <li>
            Smart Waterflow & Pipeline Detection – <a href="https://github.com/Pavani-80">GitHub</a>
          </li>
          <li>
            REST API with Flask – <a href="https://github.com/Pavani-80">GitHub</a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", background: "#f5f5f5" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:chepallepavani777@gmail.com">chepallepavani777@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/pavani-chepalle-94b1752b9">Pavani Chepalle</a></p>
        <p>GitHub: <a href="https://github.com/Pavani-80">Pavani-80</a></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "1rem", background: "#282c34", color: "white" }}>
        <p>© 2025 Pavani | Built with React</p>
      </footer>
    </div>
  );
}

export default App;

