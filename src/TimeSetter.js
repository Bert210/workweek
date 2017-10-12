import React from 'react'


const TimeSetter = ({match}, props) => {
  return (
    <div>
      {console.log(props)}
      <input id="hour" type="number" defaultValue="8" onChange={(e) => props.onUpdate(e)}/>:<input id="minute" type="number" defaultValue="00"/> <input id="pm" type="checkbox" defaultChecked={false}/> PM
    </div>
  );
}

export default TimeSetter