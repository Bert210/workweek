import {ADD_PUNCHCARD, REMOVE_PUNCHCARD} from '../actions/punchCard'
import {addPunchCard, removePunchCard} from '../actions/punchCard'

import cuid from 'cuid'

import punchCardReducer from './punchCard'

test('punchCard reducer with default value', () => {
    expect(punchCardReducer(undefined, {})).toEqual([])
})

test('add an item to punchCard state', () => {
    let startState = []
    let endState = [{id:0, dayRef:1, inTimeID:'cjamffkbo0000jcur35md27h9', outTimeID:'cjamffkbr0001jcur1ku1t9dd'}]


    let action = addPunchCard(1, 'cjamffkbo0000jcur35md27h9', 'cjamffkbr0001jcur1ku1t9dd')
    expect(punchCardReducer(startState, action)).toEqual(endState)
})

test('remove an item from punchCard state', () => {
    let startState = [
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
            dayRef: 1,
            inTimeID: 'cjantt2el0004e4ur5ykmxz6t',
            outTimeID: 'cjantt2el0005e4uriqewd066'
        }
    ]

    let endState = [
        {
            id: 0,
            dayRef: 1,
            inTimeID: 'cjantt2eg0000e4ur9gzop2p3',
            outTimeID: 'cjantt2ek0001e4urvga9cvld'
        },
        {
            id: 2,
            dayRef: 1,
            inTimeID: 'cjantt2el0004e4ur5ykmxz6t',
            outTimeID: 'cjantt2el0005e4uriqewd066'
        }
    ]

    let removeID = 1

    let action = removePunchCard(removeID)

    expect(punchCardReducer(startState, action)).toEqual(endState)
})