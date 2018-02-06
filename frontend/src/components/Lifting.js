import React from 'react';
import { connect } from 'react-redux';

const Lifting = ({ workouts, days, week, day, weight}) => {

  return (
    <div className="Lifting">
      <h3>Lifting</h3>
      <table>
        <tr>
          <th>Workout</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Weight</th>
        </tr>
        {workouts.map(workout => {
          if (workout.id === day){
            console.log(workout.exercises);
            return workout.exercises.map(exer => (
              <tr key={exer.name}>
                <td>{exer.name}</td>
                <td>{exer.sets}</td>
                <td>{exer.reps}</td>
                <td>{getWeight(weight, exer.id, week)} {weight[exer.id].unit}</td>
              </tr>
            ))
          }
        })}
      </table>
    </div>
  )
}

const getWeight = (weight, id, week) => {
  let output = weight[id].starting
  if (weight[id].weeklyIncrement.operation === "add" && week != 1){
    for (let i = 1; i < week; i++){
      output += weight[id].weeklyIncrement.value
    }
    return output;
  }
  if (weight[id].weeklyIncrement.operation === "multiply" && week != 1){
    for (let i = 1; i < week; i++){
      output = output*weight[id].weeklyIncrement.value
    }
    return output;
  }
  return output;
}

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  workouts : Object.values(state.lifting.days),
  weight : state.lifting.weight,
  week : state.chosenWeek,
  day : state.chosenDay,
  days : state.days
})

export default connect(mapStateToProps, mapDispatchToProps)(Lifting);
