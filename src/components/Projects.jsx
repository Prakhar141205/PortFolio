function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <p className="section-label">
          SELECTED PROJECTS
        </p>

        <div className="projects-list">

          <article className="project-card">
            <div className="project-header">
              <h3>AgriVision AI</h3>
              <span>01</span>
            </div>

            <p>
              An AI-powered crop disease detection system using
              computer vision, Grad-CAM, severity analysis, and
              retrieval-augmented generation.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>PyTorch</span>
              <span>EfficientNet</span>
              <span>FastAPI</span>
              <span>React</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-header">
              <h3>AI Experiment Hub</h3>
              <span>02</span>
            </div>

            <p>
              A platform for managing and running machine learning
              experiments with dataset management, predictions,
              authentication, and a PostgreSQL-backed backend.
            </p>

            <div className="project-tech">
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>Alembic</span>
              <span>React</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-header">
              <h3>Transformer From Scratch</h3>
              <span>03</span>
            </div>

            <p>
              A from-scratch implementation of the Transformer
              architecture covering multi-head attention, positional
              encoding, masking, residual connections, and layer
              normalization.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>PyTorch</span>
              <span>Deep Learning</span>
              <span>NLP</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-header">
              <h3>Rapid Attendance Automation</h3>
              <span>04</span>
            </div>

            <p>
              An automated attendance system combining computer
              vision, face recognition, and speech recognition.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Computer Vision</span>
              <span>Face Recognition</span>
              <span>Speech Recognition</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Projects