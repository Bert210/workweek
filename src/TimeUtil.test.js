import {
  getTimeFromMinutes,
  getMinutesFromTime,
  getMilitaryTimeFromMinutes,
  getTimeDiff
} from './TimeUtil'

const createMinutes = (hour, minute, pm) => {
  if(hour === 12){
    return (pm ? 12*60 : 0) + minute
  }
  return (hour * 60) + minute + (pm ? 12*60 : 0)
}

test('test createMinutes helper function', () => {
  // expect(createMinutes()).toEqual() 
  expect(createMinutes(5,12, true)).toEqual(1032)
  expect(createMinutes(12,30,true)).toEqual(750)
  expect(createMinutes(12,30, false)).toEqual(30)
  expect(createMinutes(12,30, true)).not.toEqual (30)
  
})

test('getTimeFromMinutes am', () => {
  expect(getTimeFromMinutes(createMinutes(12,30,false)))
    .toEqual({hour:12, minute:30, pm: false})

  expect(getTimeFromMinutes(createMinutes(8, 12, false)))
    .toEqual({hour:8, minute:12, pm: false})
})

test('getTimeFromMinutes pm', () => {
  expect(getTimeFromMinutes(createMinutes(12,30,true)))
    .toEqual({hour:12, minute:30, pm: true})
  
  expect(getTimeFromMinutes(createMinutes(5, 12, true)))
    .toEqual({hour:5, minute:12, pm: true})
})

test('getMinutesFromTime am', () => {
  expect(getMinutesFromTime({hour:8, minute: 10, pm: false}))
    .toEqual(490)

  expect(getMinutesFromTime({hour:12, minute:0, pm: false}))
    .toEqual(0)

  expect(getMinutesFromTime({hour:11, minute:45, pm: false}))
    .toEqual(705)
})

test('getMinutesFromTime am', () => {
  expect(getMinutesFromTime({hour:8, minute: 10, pm: true}))
    .toEqual(490+720)

  expect(getMinutesFromTime({hour:11, minute:59, pm: true}))
    .toEqual(1439)

  expect(getMinutesFromTime({hour:11, minute:45, pm: true}))
    .toEqual(705+720)
})

test('getMilitaryTimeFromMinutes am', () => {
  expect(getMilitaryTimeFromMinutes(createMinutes(12, 11, false)))
    .toEqual({hour: 0, minute: 11})

  expect(getMilitaryTimeFromMinutes(createMinutes(8,12,false)))
    .toEqual({hour: 8, minute: 12})  
    
  expect(getMilitaryTimeFromMinutes(createMinutes(11,12,false)))
    .toEqual({hour: 11, minute: 12})

})

test('getMilitaryTimeFromMinutes pm', () => {
  expect(getMilitaryTimeFromMinutes(createMinutes(12, 54, true)))
    .toEqual({hour:12, minute: 54})

  expect(getMilitaryTimeFromMinutes(createMinutes(5, 19, true)))
    .toEqual({hour:17, minute:19})

  expect(getMilitaryTimeFromMinutes(createMinutes(11, 19, true)))
    .toEqual({hour:23, minute:19}) 
})

test('getTimeDiff', () => {

  let time1 = createMinutes(8, 0, false)
  let time2 = createMinutes(12, 30, true)

  expect(getTimeDiff(time1, time2)).toEqual({hour:4, minute:30})

  
  expect(getTimeDiff(time2, time1)).toBeNull()
})