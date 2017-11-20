export const UPDATE_TIME = "UPDATE_TIME"
export const ADD_TIME = "ADD_TIME"
export const REMOVE_TIME = "REMOVE_TIME"

export const updateTime = (id) => {
  return {type: UPDATE_TIME, id}
}

export const addTime = (dayRef) => {
  return {type: ADD_TIME, dayRef}
}

export const removeTime = (id) => {
  return {type: REMOVE_TIME, id}
}
