import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time.js'
import { getMinutesFromTime } from '../TimeUtil';

const initState = [
  {
    id: 0,
    dayRef: 1,
    inTime: {
      minute: 13 * 60 + 33,
    },
    outTime: {
      minute: 17 * 60 + 12
    },
    totalTime: {
      minute: 3 * 60 + 49
    }
  }
]

let id = 0 

const timeReducer = (state = initState, action) => {
	switch(action.type){
    case(ADD_TIME):
      return [
        ...state,
        { 
          id: id++,
          dayRef: action.dayRef,
          inTime: {
            minute: 8 * 60
          },
          outTime: {
            minute: 12 * 60 + 30
          },
          totalTime: {
            minute: 4 * 60 + 30
          }
        }
      ]
    case(REMOVE_TIME):
      console.log(action.id) 
      return state.filter(time => (time.id !== action.id))
    case(UPDATE_TIME):
      let newTime = getMinutesFromTime(action.time)
      console.log
      return state.map(time => { 
        if(time.id === action.id){
          return {
            ...time,
            ...newTime
          }
        }
        return time
      })
    default:
      return state
  }

}

export default timeReducer
