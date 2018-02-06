import React from 'react';
import { connect } from 'react-redux';

const AirAlert = ({ weeks, day, week, days }) => {
  let x = weeks.filter(w=> w.week === week)
  console.log(x);
  let workWeek = x[0]

  return (
    <div className="AirAlert">
      { workWeek.days && workWeek.days.includes(day)?
        <span>
          <h3>Air Alert</h3>
          <table>
            <tr>
              <th>Workout</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
            {workWeek.exercises.map(exer => {
              if (exer.days.includes(0)){
                return (
                  <tr key={exer.name}>
                    <td>{exer.name}</td>
                    <td>{exer.sets}</td>
                    <td>{exer.reps}</td>
                  </tr>
                )
              } else if (exer.days.includes(day)){
                return (
                  <tr key={exer.name}>
                    <td>{exer.name}</td>
                    <td>{exer.sets}</td>
                    <td>{exer.reps}</td>
                  </tr>
                )
              }
            })}
          </table>
        </span> : null
      }
    </div>
  )
}

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  weeks : Object.values(state.airAlert),
  week : state.chosenWeek,
  day : state.chosenDay,
  days : state.days
})

export default connect(mapStateToProps, mapDispatchToProps)(AirAlert);
