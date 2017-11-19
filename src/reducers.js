const days = (state = {name:"days", time: 0}, action) => {
	let nextState = {};
	switch(action.type){
		case "ADD_TIME":
			return action.time + 1;
		case "REMOVE_TIME":
			return action.time -1 ;
		default:
			return state;
	}
}

export default days;