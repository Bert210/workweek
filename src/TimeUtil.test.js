import {
  getTimeFromMinutes,
  getMinutesFromTime,
  getMilitaryTimeFromMinutes,
  getTimeDiff
} from './TimeUtil'

const createMinutes = (hour, minute, pm) => {
  return (hour * 60) + minute + (pm ? 12*60 : 0)
}

test('test createMinutes helper function', () => {
  expect(createMinutes(12,30,true)).toEqual(1470)
})

// test('getTimeFromMinutes', () => {

//   let out = getTimeFromMinutes()
// })