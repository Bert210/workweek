const initState = [
    {
        id: 0,
        dayRef: 1,
        inTimeID: 0,
        outTimeID: 1
    }
]

const punchCardReducer = (state = initState, action) => {
    switch(action.type){
        case("ADD_PUNCHCARD"):
            break;
        default:
            return state
    }
}

export default punchCardReducer