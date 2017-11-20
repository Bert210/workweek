import daysReducer from './days';
import timesReducer from './times';

// Don't combine reducers because we are combining them in store.js

const reducer = {
  days: daysReducer,
  times: timesReducer,
}

export default reducer
