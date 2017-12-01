import { createSelector } from 'reselect'

import {getTimeDiff} from '../TimeUtil'

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
            let inTime = time.find(card.inTimeID)
            let outTime = time.find(card.outTimeID)
            
            return outTime - inTime
        })



        console.log(totalTimesArray)

        return totalTimesArray.reduce((total, current) => {
            return {hour: total.hour + current.hour, minute: total.minute + current.mintue} 
        }, 0)
    }
)
