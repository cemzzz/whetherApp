import React from 'react'
import './Weather.css';

const Weather = ({weather}) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`

  console.log(weather)

  return (
    <div className='weatherBox'>
        <div>{weather?.name}, {weather?.sys?.country}</div>
        <div>
            <img src={weatherIcon} />
        </div>
        <div>{weather?.main.temp}°C</div>
    </div>
  )
}

export default Weather