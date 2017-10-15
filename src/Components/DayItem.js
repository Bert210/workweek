import React from 'react'

const styles = {
  container : {
    backgroundColor: '#EBEBEB'
    ,display: 'flex'
    ,height: 64-8
    ,alignItems: 'center'
    ,borderTop: 'black 1px solid'
    ,borderBottom: 'black 1px solid'
    ,padding: '8px'
  }
  ,containerActive: {
    backgroundColor: '#FFF'
    ,display: 'flex'
    ,height: 64-8
    ,alignItems: 'center'
    ,borderTop: 'black 1px solid'
    ,borderBottom: 'black 1px solid'
    ,padding: '8px'
  }
  ,name : {
    flex: 1
    ,textAlign: 'left'
  }
  ,hours: {
    flex: 1,
    textAlign: 'center',
  }
  ,toggle: {
    flex: 1
    ,textAlign: 'right'
  }
}

const DayItem = ({name, hours, minutes, active, selected}) => (
  <div style={selected ? styles.containerActive : styles.container}>
    <div style={styles.name}>{name}</div>
    <div style={styles.hours}>{hours}h {minutes}m</div>
    <div style={styles.toggle}>[ {active ? "on" : "off"} ]</div>
  </div>
)

export default DayItem