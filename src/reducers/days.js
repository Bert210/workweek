const initState = [
	{id: 0, name:"Sunday", active: false},
	{id: 1, name:"Monday", active: true},
	{id: 2, name:"Tuesday", active: false},
	{id: 3, name:"Wednesday", active: true},
	{id: 4, name:"Thursday", active: false},
	{id: 5, name:"Friday", active: false},
	{id: 6, name:"Saturday", active: false},
]

const daysReducer = (state = initState, action) => {
	switch(action.type){
		case ("TOGGLE_ACTIVE"):
			return state.map(day => {
					if(day.id === action.id){
						day.active = !day.active
						return day
					}
					return day
				})
		default:
			return state
	}
}

export default daysReducer
