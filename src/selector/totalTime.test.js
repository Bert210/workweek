import { totalSelector } from './totalTime'

let days = [
    {
      id: 0,
      name: 'Sunday',
      active: false
    },
    {
      id: 1,
      name: 'Monday',
      active: true
    },
    {
      id: 2,
      name: 'Tuesday',
      active: false
    },
    {
      id: 3,
      name: 'Wednesday',
      active: true
    },
    {
      id: 4,
      name: 'Thursday',
      active: false
    },
    {
      id: 5,
      name: 'Friday',
      active: false
    },
    {
      id: 6,
      name: 'Saturday',
      active: false
    }
]

test('one punch card same dayRef ', () => {
    let state = {
        days,
        router: {
            location: {
              pathname: '/day/1',
              search: '',
              hash: '',
              key: 'snvvz3'
            }
        },
        punchCard: [
            {
                id: 0,
                dayRef: 1,
                inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
                outTimeID: 'cjantt2ek0001e4urvga9cvld'
            }
        ],
        times: [
            {
                id: 'cjantt2eg0000e4ur9gzop2p3',
                minutes: 480
            },
            {
                id: 'cjantt2ek0001e4urvga9cvld',
                minutes: 750
            }
        ]
    }
    expect(totalSelector(state)).toEqual([
        {hour: 0, minute: 0},
        {hour: 4, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
    ])
})

test('one punch card with different dayRef', () => {
    let state = {
        days,
        router: {
            location: {
              pathname: '/day/1',
              search: '',
              hash: '',
              key: 'snvvz3'
            }
        },
        punchCard: [
            {
                id: 0,
                dayRef: 0,
                inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
                outTimeID: 'cjantt2ek0001e4urvga9cvld'
            }
        ],
        times: [
            {
                id: 'cjantt2eg0000e4ur9gzop2p3',
                minutes: 480
            },
            {
                id: 'cjantt2ek0001e4urvga9cvld',
                minutes: 750
            }
        ]
    }

    expect(totalSelector(state)).toEqual([
        {hour: 4, minute: 30}, // Sunday
        {hour: 0, minute: 0}, // Monday
        {hour: 0, minute: 0}, // Tuesday
        {hour: 0, minute: 0}, // Wednesday
        {hour: 0, minute: 0}, // Thursday
        {hour: 0, minute: 0}, // Friday
        {hour: 0, minute: 0}, // Saturday
    ])
})

test('two punch cards with same and correct dayRef', () => {
    let state = {
        days,
        router: {
            location: {
              pathname: '/day/1',
              search: '',
              hash: '',
              key: 'snvvz3'
            }
        },
        punchCard: [
            {
                id: 0,
                dayRef: 1,
                inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
                outTimeID: 'cjantt2ek0001e4urvga9cvld'
            },
            {
                id: 1,
                dayRef: 1,
                inTimeID: 'cjantt2ek0002e4ur152x2lj6',
                outTimeID: 'cjantt2el0003e4urybi87wgg'
            }
        ],
        
        times: [
            {
                id: 'cjantt2eg0000e4ur9gzop2p3',
                minutes: 480 // 8:00 AM
            },
            {
                id: 'cjantt2ek0001e4urvga9cvld',
                minutes: 750 // 12:30 PM
            },
            {
                id: 'cjantt2ek0002e4ur152x2lj6',
                minutes: 825 // 1:45 PM
            },
            {
                id: 'cjantt2el0003e4urybi87wgg',
                minutes: 1033 // 5: 13 PM
            }
        ]
    }

    //Think this is right
    // expect(totalSelector(state)).toEqual({hour: 7, minute: 58})
    expect(totalSelector(state)).toEqual([
        {hour: 0, minute: 0}, // Sunday
        {hour: 7, minute: 58}, // Monday
        {hour: 0, minute: 0}, // Tuesday
        {hour: 0, minute: 0}, // Wednesday
        {hour: 0, minute: 0}, // Thursday
        {hour: 0, minute: 0}, // Friday
        {hour: 0, minute: 0}, // Saturday
    ])
})

test('two punch cards with different dayRef', () => {
    let state = {
        days,
        router: {
            location: {
              pathname: '/day/1',
              search: '',
              hash: '',
              key: 'snvvz3'
            }
        },
        punchCard: [
            {
                id: 0,
                dayRef: 0,
                inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
                outTimeID: 'cjantt2ek0001e4urvga9cvld'
            },
            {
                id: 1,
                dayRef: 1,
                inTimeID: 'cjantt2ek0002e4ur152x2lj6',
                outTimeID: 'cjantt2el0003e4urybi87wgg'
            }
        ],
        
        times: [
            {
                id: 'cjantt2eg0000e4ur9gzop2p3',
                minutes: 480 // 8:00 AM
            },
            {
                id: 'cjantt2ek0001e4urvga9cvld',
                minutes: 750 // 12:30 PM
            },
            {
                id: 'cjantt2ek0002e4ur152x2lj6',
                minutes: 825 // 1:45 PM
            },
            {
                id: 'cjantt2el0003e4urybi87wgg',
                minutes: 1033 // 5: 13 PM
            }
        ]
    }

    // expect(totalSelector(state)).toEqual({hour: 3, minute: 28})
    expect(totalSelector(state)).toEqual([
        {hour: 4, minute: 30}, // Sunday
        {hour: 3, minute: 28}, // Monday
        {hour: 0, minute: 0}, // Tuesday
        {hour: 0, minute: 0}, // Wednesday
        {hour: 0, minute: 0}, // Thursday
        {hour: 0, minute: 0}, // Friday
        {hour: 0, minute: 0}, // Saturday
    ])
})

test('three punch cards with different dayRef', () => {
    let state = {
        days,
        router: {
            location: {
              pathname: '/day/1',
              search: '',
              hash: '',
              key: 'snvvz3'
            }
        },
        punchCard: [
            {
                id: 0,
                dayRef: 1,
                inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
                outTimeID: 'cjantt2ek0001e4urvga9cvld'
            },
            {
                id: 1,
                dayRef: 1,
                inTimeID: 'cjantt2ek0002e4ur152x2lj6',
                outTimeID: 'cjantt2el0003e4urybi87wgg'
            },
            {
                id: 2,
                dayRef: 0,
                inTimeID: 'cjantt2el0004e4ur5ykmxz6t',
                outTimeID: 'cjantt2el0005e4uriqewd066'
            }
        ],
        
        times: [
            {
                id: 'cjantt2eg0000e4ur9gzop2p3',
                minutes: 480 // 8:00 AM
            },
            {
                id: 'cjantt2ek0001e4urvga9cvld',
                minutes: 750 // 12:30 PM
            },
            {
                id: 'cjantt2ek0002e4ur152x2lj6',
                minutes: 825 // 1:45 PM
            },
            {
                id: 'cjantt2el0003e4urybi87wgg',
                minutes: 1033 // 5: 13 PM
            },
            {
                id: 'cjantt2el0004e4ur5ykmxz6t',
                minutes: 495 // 8:15 AM
            },
            {
                id: 'cjantt2el0005e4uriqewd066',
                minutes: 823 // 1: 43 PM
            }
        ]
    }

    // expect(totalSelector(state)).toEqual({hour: 7, minute: 58})
    expect(totalSelector(state)).toEqual([
        {hour: 5, minute: 28}, // Sunday
        {hour: 7, minute: 58}, // Monday
        {hour: 0, minute: 0}, // Tuesday
        {hour: 0, minute: 0}, // Wednesday
        {hour: 0, minute: 0}, // Thursday
        {hour: 0, minute: 0}, // Friday
        {hour: 0, minute: 0}, // Saturday
    ])
})