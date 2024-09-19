import './App.css';
import { useEffect, useState } from 'react';
import Weather from './component/Weather';
import WeatherSelect from './component/WeatherSelect';
import WeatherDetail from './component/WeatherDetail';
import WorldMap from './component/WorldMap';

const API_KEY = 'd7e33768b2951b19a65d2ddd0d939a8b';

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  //const cityList = ['seoul', 'new york', 'beijing', 'tokyo']

  //현재 위치 날씨
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      currentLocationWeather(latitude, longitude)
    });
  }

  //도시별 날씨 정보
  const currentLocationWeather = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
  }

  const getWeatherCity= async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
  }

  useEffect(()=>{
    if(city === ""){
      getCurrentLocation()
    } else {
      getWeatherCity()
    }
  }, [city])

  return (
    <div>
      <div className='container'>
        <div className='weahterInfoContainer'>
          <Weather weather={weather}/>
          <WeatherDetail weather={weather}/>
        </div>
        <WorldMap setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
