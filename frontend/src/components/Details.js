import React from 'react';
import { connect } from 'react-redux';
import AirAlert from './AirAlert';
import Lifting from './Lifting';
import CoreAndFlexibility from './CoreAndFlexibility';
import { changeDay, changeWeek } from '../actions';

const Details = ({ weeks, days, week, day, changeWeek, changeDay }) => {

  return (
    <div className="Details">
      <h3>Details</h3>
      <select value={week} lassName="week" onChange={(e)=>changeWeek(e.target.value)}>
        {weeks.map(week => (
          <option key={week.value} value={week.value}>{week.name} ({week.display})</option>
        ))}
      </select>
      <select value={day} className="day" onChange={(e)=>changeDay(e.target.value)}>
        {days.map(day => (
          <option key={day.value} value={day.value}>{day.name}</option>
        ))}
      </select>
      <AirAlert />
      <Lifting />
      <CoreAndFlexibility />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeDay : (val) => dispatch(changeDay(val)),
  changeWeek : (val) => dispatch(changeWeek(val))
})

const mapStateToProps = state => ({
  weeks: state.weeks,
  days: state.days,
  day: state.chosenDay,
  week: state.chosenWeek
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);
