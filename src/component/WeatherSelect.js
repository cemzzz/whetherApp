import React from 'react'
import './Weather.css';


const WeatherSelect = ({cityList, setCity}) => {
  return (
    <div>
        <button onClick={() => setCity('')}>현재위치</button>
        {cityList.map((item, index)=>(
            <button key={index} onClick={()=>setCity(item)}>{item}</button>
        ))}
    </div>
  )
}

export default WeatherSelect