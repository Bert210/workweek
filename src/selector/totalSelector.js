import { createSelector } from 'reselect'

import { dayTotalSelector } from './dayTotalSelector'

// import {getMilitaryTimeFromMinutes} from '../TimeUtil'

const dayTimeArray = state => dayTotalSelector(state)

export const totalSelector = createSelector(
    dayTimeArray,
    (dayTime) => {
        console.log(dayTime);
    }
)