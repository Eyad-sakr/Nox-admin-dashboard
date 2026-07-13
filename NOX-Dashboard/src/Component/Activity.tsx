import activitiesData from "../data/Dashboard"

function ActivityFeed() {
  return (
    <div className="activity-feed">
        <div className="activity-Heading">
            <h1>Activity</h1>
            <h4>Latest events</h4>
        </div>
      {activitiesData.map((activity) => (
        <div key={activity.id} className={`activity-item activity-${activity.type}`}>
          <span className="dot"></span>
          <div className="content">
            <h4>{activity.title}</h4>
            <p>{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed