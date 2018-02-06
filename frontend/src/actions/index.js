export const CHANGE_DAY = "CHANGE_DAY"
export const CHANGE_WEEK = "CHANGE_WEEK"

export const changeDay = (new_day) => {
  return {
    type : CHANGE_DAY,
    new_day : new_day
  }
}

export const changeWeek = (new_week) => {
  return {
    type : CHANGE_WEEK,
    new_week : new_week
  }
}
