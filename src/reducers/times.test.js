import timeReducer from './times'

import {UPDATE_TIME, ADD_TIME, REMOVE_TIME} from '../actions/time'
import {updateTime, addTime, removeTime} from '../actions/time'

import cuid from 'cuid'

// expect(time(undefined, {})).toEqual({counter:0, items: []});
test('returns correct default state', () => {
  // console.log(timeReducer({type:"BLAH"}))
  expect(timeReducer(undefined, {})).toEqual([])
});

test('adds a time to the state', () => {
  let timeID = cuid()

  let out = [{id: timeID, minutes:480}]

  let action = addTime(timeID)
  expect(timeReducer(undefined, action)).toEqual(out)
});

test('adds a time to an already populated state', () => {
  let timeID = cuid()

  let out = [{id:0, minutes:720}, {id: timeID, minutes:480}]

  let action = addTime(timeID)
  expect(timeReducer([{id:0, minutes:720}], action)).toEqual(out)
});

test('removes a time to an already populated state', () => {
  let timeID1 = 'cjamffkbo0000jcur35md27h9';
  let timeID2 = 'cjamffkbr0001jcur1ku1t9dd';
  let timeID3 = 'cjamffkbs0002jcurbybd0dnf';

  let timeIDToRemove = timeID1;

  let inState = [
    {id: timeID1, minutes:720},
    {id: timeID2, minutes:360},
    {id: timeID3, minutes:480}
  ]

  let outState = [
    {id: timeID2, minutes:360},
    {id: timeID3, minutes:480}
  ]

  let action = removeTime(timeIDToRemove)
  expect(timeReducer(inState, action)).toEqual(outState)
});

test('update a time', () =>{
  let timeID1 = 'cjamffkbo0000jcur35md27h9';
  let timeID2 = 'cjamffkbr0001jcur1ku1t9dd';
  let timeID3 = 'cjamffkbs0002jcurbybd0dnf';

  let timeIDToUpdate = timeID2;

  let inState = [
    {id: timeID1, minutes:720},
    {id: timeID2, minutes:360},
    {id: timeID3, minutes:480}
  ]

  let outState = [
    {id: timeID1, minutes:720},
    {id: timeID2, minutes:(11*60 + 45)},
    {id: timeID3, minutes:480}
  ]

  let action = updateTime(timeIDToUpdate, {hour:11, minute:45, pm: false})
  expect(timeReducer(inState, action)).toEqual(outState)
})

