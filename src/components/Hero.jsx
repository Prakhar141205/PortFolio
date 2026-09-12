// import { FaArrowRight } from "react-icons/fa"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <p className="hero-label">
          AI/ML Engineer in progress
        </p>

        <h1>
          Building
          <br />
          Learning
          <br />
          Becoming
        </h1>

        <p className="hero-description">
          I'm Prakhar Sharma, a Computer Science student exploring
          AI/ML through projects, research, open source, and continuous
          learning.
        </p>

        <div className="hero-actions">

          <a href="#projects" className="primary-button">
            View my work
          </a>

          <a href="#journey" className="secondary-button">
            Explore my Journey
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero