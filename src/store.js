import {createStore, combineReducers, applyMiddleware} from 'redux'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

export const storeCreator = (initState = {}, history) => {
  
	const reducer = combineReducers({...rootReducer, router:routerReducer})


	const middleware = routerMiddleware(history)

	return createStore(
		reducer, initState, applyMiddleware(middleware)
	)
}
