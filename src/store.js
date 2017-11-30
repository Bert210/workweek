import {createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

export const storeCreator = (initState = {}, history) => {
  
	const reducer = combineReducers({...rootReducer, router:routerReducer})


	const middleware = routerMiddleware(history)

	
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		reducer, initState, composeEnhancers(applyMiddleware(middleware))
	)
}
