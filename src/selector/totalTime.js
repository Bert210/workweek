import { createSelector } from 'reselect'

import {getTimeDiff} from '../TimeUtil'

const punchCardSelector = state => state.punchCard
const timeSelector = state => state.times

export const totalSelector = createSelector(
    punchCardSelector,
    timeSelector,
    (punchCard, time, dayID) => {

        let cards = punchCard.filter(card => card.id === dayID)

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
