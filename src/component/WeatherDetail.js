import React from 'react'
import './WeatherDetail.css';

const WeatherDetail = ({weather}) => {

  // weather 또는 weather.sys가 없을 때 렌더링 방지
  if (!weather || !weather.sys) {
    return <div>Loading weather details...</div>;
  }
  
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString() //일출 시간
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString() //일몰 시간

  return (
    <div>
        <div className='weatherDetailBox'>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 최저기온 : </div>
                <div className='weatherInfoContent'>{weather?.main.temp_min}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 최고기온 :</div>
                <div className='weatherInfoContent'>{weather?.main.temp_max}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 체감기온 : </div>
                <div className='weatherInfoContent'>{weather?.main.feels_like}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 일출 : </div>
                <div className='weatherInfoContent'>{sunrise}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 일몰 : </div>
                <div className='weatherInfoContent'>{sunset}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 풍향 : </div>
                <div className='weatherInfoContent'>{weather?.wind.deg}</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 풍속 : </div>
                <div className='weatherInfoContent'>{weather?.wind.speed} m/s</div>
            </div>
            <div className='weatherSubDetailBox'>
                <div className='weatherInfoTitle'>⦁ 습도 : </div>
                <div className='weatherInfoContent'>{weather?.main.humidity}%</div>
            </div>       
        </div>
    </div>
  )
}

export default WeatherDetail