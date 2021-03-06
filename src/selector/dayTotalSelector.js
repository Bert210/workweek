import { createSelector } from 'reselect'

import {getMilitaryTimeFromMinutes} from '../TimeUtil'

const punchCardSelector = state => state.punchCard
const timeSelector = state => state.times
const daySelector = state => state.days

export const dayTotalSelector = createSelector(
    daySelector,
    punchCardSelector,
    timeSelector,
    (days, punchCard, time) => {
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
                    
                    return outTime.minutes - inTime.minutes
                })

                
                // Reduce array and get convert it to total time
                return getMilitaryTimeFromMinutes(timeArrayDays.reduce( (total, curr) => {return total + curr}, 0))
            }
        )


        return minutesByDay
    }
)
