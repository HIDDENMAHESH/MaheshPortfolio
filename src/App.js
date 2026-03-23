import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mahesh's Portfolio</h1>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Mahesh, a frontend developer.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 — description</li>
          <li>Project 2 — description</li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>React, JavaScript, HTML, CSS</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: mahesh@example.com</p>
      </section>
    </div>
  );
}

export default App;
