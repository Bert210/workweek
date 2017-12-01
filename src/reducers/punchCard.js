import {ADD_PUNCHCARD, REMOVE_PUNCHCARD} from '../actions/punchCard'

const initState = []
let id = 0

const punchCardReducer = (state = initState, action) => {
    switch(action.type){
        case(ADD_PUNCHCARD):
            return [
                ...state,
                {
                    id: id++,
                    dayRef: action.dayRef,
                    inTimeID: action.inTimeID,
                    outTimeID: action.outTimeID,
                }
            ]
        case(REMOVE_PUNCHCARD):
            return state.filter(card => card.id !== action.id)
        default:
            return state
    }
}

export default punchCardReducer