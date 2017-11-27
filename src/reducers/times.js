import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time.js'
import { getMinutesFromTime } from '../TimeUtil';

const initState = [
  {
    id: 0,
    minutes: 8*60 + 12
  },
  {
    id: 1,
    minutes: 12*60 + 30
  }
]

let id = 2

const timeReducer = (state = initState, action) => {
	switch(action.type){
    case(ADD_TIME):
      return [
        ...state,
        { 
          id: id++,
          minutes: 8*60
        }
      ]
    case(REMOVE_TIME):
      return state.filter(time => (time.id !== action.id))
    case(UPDATE_TIME):
      let newTime = getMinutesFromTime(action.time)
      let newState = state.filter(time => (time.id !== action.id))
      return [
        ...newState,
        {
          id: action.id,
          minutes: newTime
        }
      ]
      //  return state.map(time => { 
      //   if(time.id === action.id){
      //     return {
      //       ...time,
      //       minutes: newTime
      //     }
      //   }
      //   return time
      // })
    default:
      return state
  }

}

export default timeReducer
