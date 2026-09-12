import { Link, useParams } from "react-router-dom"
import journeyData from "../data/journeyData"
import "./JourneyDay.css"

function JourneyDay() {
  const { day } = useParams()

  const journey = journeyData.find(
    (item) => item.day === Number(day)
  )

  if (!journey) {
    return <h1>Journey day not found.</h1>
  }

  return (
    <main className="journey-day-page">
      <div className="journey-day-container">

        <Link to="/journey" className="journey-back">
          ← Back to Journey
        </Link>

        <header className="journey-day-header">
          <span className="journey-day-label">
            DAY {String(journey.day).padStart(2, "0")}
          </span>

          <p className="journey-day-date">
            {journey.date}
          </p>

          <h1>{journey.title}</h1>
        </header>

        <section>
          <p className="activities-label">
            TODAY'S ACTIVITIES
          </p>

          <div className="journey-day-activities">
            {journey.activities.map((activity, index) => (
              <article
                className="journey-day-activity"
                key={index}
              >
                <span className="day-activity-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="day-activity-content">
                  <span className="day-activity-category">
                    {activity.category}
                  </span>

                  <h2>{activity.title}</h2>

                  <p>{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="journey-day-tags">
          {journey.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

      </div>
    </main>
  )
}

export default JourneyDay