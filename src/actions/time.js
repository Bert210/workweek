export const UPDATE_TIME = "UPDATE_TIME"
export const ADD_TIME = "ADD_TIME"
export const REMOVE_TIME = "REMOVE_TIME"


export const updateTime = (id, time) => {
  return {type: UPDATE_TIME, id, time}
}

export const addTime = () => {
  return {type: ADD_TIME}
}

export const removeTime = (id) => {
  return {type: REMOVE_TIME, id}
}
