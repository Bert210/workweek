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
                let timeArrayDays = day.map(card => {
                    let inTime = time.find(t => t.id === card.inTimeID)
                    let outTime = time.find(t => t.id === card.outTimeID)
                    
                    console.log(`outTime.minutes - inTime.minutes = ${outTime.minutes - inTime.minutes}`)

                    return outTime.minutes - inTime.minutes
                })

                // console.log("timeArrayDays", timeArrayDays)

                return getMilitaryTimeFromMinutes(timeArrayDays.reduce( (total, curr) => {return total + curr}, 0))

                // return timeArrayDays
            }
        )

        // console.log(minutesByDay)



        return minutesByDay
        
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
