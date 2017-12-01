export const ADD_PUNCHCARD = "ADD_PUNCHCARD"
export const REMOVE_PUNCHCARD = "REMOVE_PUNCHCARD"

export const addPunchCard = (dayRef, inTimeID, outTimeID) => {
  return {type: ADD_PUNCHCARD, dayRef, inTimeID, outTimeID}
}

export const removePunchCard = (id) => {
  return {type: REMOVE_PUNCHCARD, id}
}