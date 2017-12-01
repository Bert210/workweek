import { totalSelector } from './totalTime'

test('base is working', () => {
    let state = {
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

    expect(totalSelector(state)).toEqual({hour: 4, minute: 30})
})