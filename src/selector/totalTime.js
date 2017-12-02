import { createSelector } from 'reselect'

import {getTimeDiff, getMilitaryTimeFromMinutes} from '../TimeUtil'

const punchCardSelector = state => state.punchCard
const timeSelector = state => state.times
const routerSelector = state => state.router
export const totalSelector = createSelector(
    routerSelector,
    punchCardSelector,
    timeSelector,
    (router, punchCard, time, dayID) => {
        let dayRef = parseInt(router.location.pathname.split('/').slice(-1)[0])

        let cards = punchCard.filter(card => card.dayRef === dayRef)
        console.log(cards)
        let totalTimesArray = cards.map( card => {
            let inTime = time.find(t => t.id === card.inTimeID)
            let outTime = time.find(t => t.id === card.outTimeID)

            console.log(`${outTime.minutes} - ${inTime.minutes} = ${outTime.minutes - inTime.minutes}`)
            return outTime.minutes - inTime.minutes
        })




        console.log(totalTimesArray)

        let totalMinutes = totalTimesArray.reduce((total, current) => {
            return total + current
        })

        console.log(totalMinutes)

        return getMilitaryTimeFromMinutes(totalMinutes)
    }
)
