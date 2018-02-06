// import { combineReducers } from 'redux';
import { CHANGE_DAY, CHANGE_WEEK } from '../actions';
import { air_alert } from './air_alert.js'
import { lifting } from './lifting.js'
import { core, flexibility } from './coreAndFlexibility.js';
const initialState = {
	weeks: [
		{name: "Week 1", display: "2/4 - 2/10", value: 1},
		{name: "Week 2", display: "2/11 - 2/17", value: 2},
		{name: "Week 3", display: "2/18 - 2/24", value: 3},
		{name: "Week 4", display: "2/25 - 3/3", value: 4},
		{name: "Week 5", display: "3/4 - 3/10", value: 5},
		{name: "Week 6", display: "3/11 - 3/17", value: 6},
		{name: "Week 7", display: "3/18 - 3/24", value: 7},
		{name: "Week 8", display: "3/25 - 3/31", value: 8},
		{name: "Week 9", display: "4/1 - 4/7", value: 9},
		{name: "Week 10", display: "4/8 - 4/14", value: 10},
		{name: "Week 11", display: "4/15 - 4/21", value: 11},
		{name: "Week 12", display: "4/22 - 4/28", value: 12},
		{name: "Week 13", display: "4/29 - 5/5", value: 13},
		{name: "Week 14", display: "5/6 - 5/12", value: 14},
		{name: "Week 15", display: "5/13 - 5/19", value: 15}
	],
	days: [
		{name: "Monday", value: 1},
		{name: "Tuesday", value: 2},
		{name: "Wednesday", value: 3},
		{name: "Thursday", value: 4},
		{name: "Friday", value: 5},
		{name: "Saturday", value: 6},
		{name: "Sunday", value: 7}
	],
	airAlert: air_alert,
	lifting : lifting,
	core : core,
	flexibility: flexibility,
	chosenWeek : 1,
	chosenDay: 1,
}

function rootReducer (state = initialState, action) {
	switch(action.type){
		case CHANGE_DAY :
			return {
				...state,
				chosenDay : parseInt(action.new_day, 10)
			}
		case CHANGE_WEEK :
			return {
				...state,
				chosenWeek : parseInt(action.new_week, 10)
			}
		default :
			return state
	}
	return state;
}

export default rootReducer;
