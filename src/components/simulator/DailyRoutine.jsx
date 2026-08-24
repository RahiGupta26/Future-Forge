import '../../styles/DailyRoutine.css'

function DailyRoutine({ routine }) {
  return (
    <div className="daily-routine">
      <h2 className="daily-routine-title">
        🕐 A Day in the Life
      </h2>

      <div className="routine-timeline">
        {routine.map((item, index) => (
          <div key={index} className="routine-item">
            <div className="routine-dot">{item.icon}</div>
            <div className="routine-content">
              <div className="routine-time">{item.time}</div>
              <div className="routine-activity">{item.activity}</div>
              <div className="routine-duration">{item.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyRoutine
