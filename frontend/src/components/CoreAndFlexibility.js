import React from 'react';
import { connect } from 'react-redux';

const CoreAndFlexibility = ({ core, flexibility, day }) => {

  return (
    <div className="CoreAndFlexibility">
      {core.days.includes(day)?
        <span className="core">
          <h3>Core</h3>
          <table className="coreTable">
            <tr>
              <th>Workout</th>
              <th>Reps</th>
              <th>Notes</th>
            </tr>
            {core.exercises.map(exer => (
                <tr key={exer.name}>
                  <td>{exer.name}</td>
                  <td>{exer.reps}</td>
                  <td>{exer.notes}</td>
                </tr>
            ))}
          </table>
        </span> : null
      }

      {flexibility.days.includes(day)?
        <span className="flexibility">
          <h3>Flexibility</h3>
          <table>
            <tr>
              <th>Workout</th>
              <th>Sets</th>
              <th>Duration</th>
            </tr>
            {flexibility.stretches.map(exer => (
                <tr key={exer.name}>
                  <td>{exer.name}</td>
                  <td>{exer.sets}</td>
                  <td>{exer.duration} {exer.durationUnit}</td>
                </tr>
            ))}
          </table>
        </span> : null
      }

    </div>
  )
}

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  core : state.core,
  flexibility : state.flexibility,
  day : state.chosenDay
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreAndFlexibility);
