export const ADD_PUNCHCARD = "ADD_PUNCHCARD"
export const REMOVE_PUNCHCARD = "REMOVE_PUNCHCARD"
export const LINK_TIME_TO_PUNCHCARD = "LINK_TIME_TO_PUNCHCARD"

export const addPunchCard = (dayRef) => {
  return {type: ADD_PUNCHCARD, dayRef}
}

export const removePunchCard = (id) => {
  return {type: REMOVE_PUNCHCARD, id}
}

export const linkTimeToPunchCard = (punchCardID, timeType) => {
  return {type:LINK_TIME_TO_PUNCHCARD, punchCardID, timeType}
}