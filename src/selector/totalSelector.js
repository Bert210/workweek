import { createSelector } from 'reselect'

import { dayTotalSelector } from './dayTotalSelector'

import {getMilitaryTimeFromMinutes} from '../TimeUtil'

const dayTimeArray = state => dayTotalSelector(state)

export const dayTotalSelector = createSelector(
    dayTimeArray,
    (dayTimeArray) => {
        console.log(dayTimeArray)
    }
)