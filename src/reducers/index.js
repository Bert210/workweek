import daysReducer from './days';
import timesReducer from './times';
import punchCardReducer from './punchCard'

// Don't combine reducers because we are combining them in store.js

const reducer = {
  days: daysReducer,
  times: timesReducer,
  punchCard: punchCardReducer
}

export default reducer
