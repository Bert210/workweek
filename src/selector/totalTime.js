import { createSelector } from 'reselect'

import {getTimeDiff, getMilitaryTimeFromMinutes} from '../TimeUtil'

const punchCardSelector = state => state.punchCard
const timeSelector = state => state.times
const daySelector = state => state.days

export const totalSelector = createSelector(
    daySelector,
    punchCardSelector,
    timeSelector,
    (days, punchCard, time) => {
        /*
            We want to return an array with all the days totals
            
                
        */

        let punchCardsByDay = days.map(
            (day) => {
                return punchCard.filter( card => card.dayRef === day.id)
            }
        )

        let minutesByDay = punchCardsByDay.map(
            (day) => {
                console.log(day)
                day.reduce( (total, current) => total.minutes + current.minutes, 0)
            }
        )

        console.log(minutesByDay)

        
        // let dayRef = parseInt(router.location.pathname.split('/').slice(-1)[0])

        // let cards = punchCard.filter(card => card.dayRef === dayRef)

        // let totalTimesArray =  punchCard.map( card => {
        //     let inTime = time.find(t => t.id === card.inTimeID)
        //     let outTime = time.find(t => t.id === card.outTimeID)

        //     return outTime.minutes - inTime.minutes
        // })

        // let totalMinutes = totalTimesArray.reduce((total, current) => {
        //     return total + current
        // }, 0)

        // return getMilitaryTimeFromMinutes(totalMinutes)
    }
)
