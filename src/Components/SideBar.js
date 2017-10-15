import React from 'react'

import ListDays from './ListDays'
import TimeTotal from './TimeTotal'

import './SideBar.css'

let days = [
  {
    active: false,
    name: "Sunday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },
  {
    active: false,
    name: "Monday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },
  {
    active: false,
    name: "Tuesday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },{
    active: false,
    name: "Wednesday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },{
    active: false,
    name: "Thursday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },{
    active: false,
    name: "Friday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  },{
    active: false,
    name: "Saturday",
    times: [
      {
        in:
        {
          hour: 8,
          minute: 12
        }
        ,out:
        {
          hour: 12
          ,minute: 39
        }
        ,total:
        {
          hours: 4
          ,minutes: 27
        }
      }
    ]
  }
]

const SideBar = () => {
  let currentIndex = 0
  return (
    <div className="side-bar">
      <ListDays activeIndex={currentIndex} onUpdate={(e) => {console.log("Click")}} days={days}/>
      <TimeTotal />
    </div>
  )
}

export default SideBar