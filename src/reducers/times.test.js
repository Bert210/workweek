import timeReducer from './times'

import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time'
import {updateTime, addTime, removeTime} from '../actions/time'

// expect(time(undefined, {})).toEqual({counter:0, items: []});
test('returns correct default state', () => {
  // console.log(timeReducer({type:"BLAH"}))
  expect(timeReducer(undefined, {})).toEqual([])
});
