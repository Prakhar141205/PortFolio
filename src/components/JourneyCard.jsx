import { Link } from "react-router-dom"
import "./JourneyCard.css"

function JourneyCard({ journey }) {
  return (
    <Link
        to={`/journey/day/${journey.day}`}
        className="journey-card"
    >
      <div className="journey-card-top">
        <div>
          <span className="journey-day">
            DAY {String(journey.day).padStart(2, "0")}
          </span>

          <p className="journey-date">{journey.date}</p>
        </div>

        <span className="journey-arrow">→</span>
      </div>

      <h2>{journey.title}</h2>

      <div className="journey-card-divider"></div>

      <div className="journey-activity-count">
        <span className="activity-icon">☷</span>

        <span>
          {journey.activities.length} activities
        </span>
      </div>

      <div className="journey-tags">
        {journey.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}

export default JourneyCard