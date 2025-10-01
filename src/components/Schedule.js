import React from "react";
import "../App.css";

function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <h2>Class Schedule</h2>
      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
              <th>Teacher</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>7:00 AM</td>
              <td>Hatha Yoga</td>
              <td>Arjun Sharma</td>
              <td>60 min</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:00 PM</td>
              <td>Ashtanga Yoga</td>
              <td>Ananya Patel</td>
              <td>75 min</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:00 PM</td>
              <td>Ashtanga Yoga</td>
              <td>Ananya Patel</td>
              <td>75 min</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:00 PM</td>
              <td>Ashtanga Yoga</td>
              <td>Ananya Patel</td>
              <td>75 min</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:00 PM</td>
              <td>Ashtanga Yoga</td>
              <td>Ananya Patel</td>
              <td>75 min</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:00 PM</td>
              <td>Ashtanga Yoga</td>
              <td>Ananya Patel</td>
              <td>75 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Schedule;
