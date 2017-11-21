import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time.js'

const initState = []

let id = 0 
/*
const updateDayTotal = (day) => {
  return {
    ...day,
    total: {
      hour: (day.outTime.hour - day.inTime.hour),
      minute: (day.outTime.minute - day.inTime.minute)
    }
  }

}

const updateTotals = (state) => {
  return state.map(day => {
    return updateDayTotal(day) 
  }
}
  */

const timeReducer = (state = initState, action) => {
	switch(action.type){
    /* 
    case(UPDATE_TIME):
      return state.map( time => { if (time.id === action.id) {  
      }
        return time 
      })
    */
    case("FILTER_TIME_BY_ID"):
      return state.filter(time => { return time.id === action.id });
    case(ADD_TIME):
      return [
        ...state,
        { 
          id: id++,
          dayRef: action.dayRef,
          inTime: {
            hour: 8,
            minute: 0
          },
          outTime: {
            hour: 12,
            minute: 30
          },
          totalTime: {
            hour: 4,
            minute: 30
          }
        }
      ]
    case(REMOVE_TIME):
      console.log(action.id) 
      return state.filter(time => (time.id !== action.id))
    case(UPDATE_TIME):
      return state.map(time => { 
        if(time.id === action.id){
          return action.time 
        }
        return time
      })
    default:
      return state
  }

}

export default timeReducer
