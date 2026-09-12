function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">SKILLS & TECHNOLOGIES</p>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>AI / Machine Learning</h3>

            <div className="skill-list">
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
              <span>NLP</span>
              <span>Generative AI</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>

            <div className="skill-list">
              <span>PyTorch</span>
              <span>Scikit-learn</span>
              <span>NumPy</span>
              <span>Pandas</span>
              <span>OpenCV</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Programming</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>C++</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend & Engineering</h3>

            <div className="skill-list">
              <span>FastAPI</span>
              <span>React</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>Alembic</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Workflow</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Linux</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;