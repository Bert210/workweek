import {ADD_PUNCHCARD, REMOVE_PUNCHCARD} from '../actions/punchCard'

const initState = [
    {
        id: 0,
        dayRef: 1,
        inTimeID: 0,
        outTimeID: 1
    }
]

let id = 1

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
            break;
        default:
            return state
    }
}

export default punchCardReducer