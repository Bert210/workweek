import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time.js'


const initState = []

const timeReducer = (state = initState, action) => {
	switch(action.type){
    case(ADD_TIME):
      return [
        ...state,
        { 
          id: action.id,
          minutes: 8*60
        }
      ]
    case(REMOVE_TIME):
      return state.filter(time => (time.id !== action.id))
    case(UPDATE_TIME):
    let index = state.findIndex(time => (time.id === action.id))
      return [
        ...state.slice(0, index)
        .concat({
          id: action.id,
          minutes: action.timeInMinutes
        })
        .concat(...state.slice(index+1))
      ]
    default:
      return state
  }

}

export default timeReducer
