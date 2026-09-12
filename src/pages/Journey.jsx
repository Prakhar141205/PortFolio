import { useState } from "react"
import JourneyCard from "../components/JourneyCard"
import journeyData from "../data/journeyData"
import "./Journey.css"

function Journey() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  // Get all unique topics from journey data
  const filters = [
    "All",
    ...new Set(
      journeyData.flatMap((journey) => journey.tags)
    ),
  ]

  const filteredJourney = journeyData.filter((journey) => {
    const searchText = [
      journey.day,
      journey.date,
      journey.title,
      ...journey.tags,
      ...journey.activities.flatMap((activity) => [
        activity.category,
        activity.title,
        activity.description,
      ]),
    ]
      .join(" ")
      .toLowerCase()

    const matchesSearch = searchText.includes(
      searchTerm.toLowerCase()
    )

    const matchesFilter =
      activeFilter === "All" ||
      journey.tags.includes(activeFilter)

    return matchesSearch && matchesFilter
  })

  return (
    <main className="journey-page">
      <div className="journey-container">

        <div className="journey-header">
          <h1>My Journey</h1>

          <h2>Learning & Building.</h2>

          <p>
            A record of what I learn, build, and work on every day.
          </p>
        </div>

        <div className="journey-search">
          <input
            type="text"
            placeholder="Search your journey..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <div className="journey-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="journey-list">
          {filteredJourney.map((journey) => (
            <JourneyCard
              key={journey.day}
              journey={journey}
            />
          ))}
        </div>

        {filteredJourney.length === 0 && (
          <p className="no-results">
            No journey entries found.
          </p>
        )}

      </div>
    </main>
  )
}

export default Journey