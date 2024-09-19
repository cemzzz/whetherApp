import './App.css';
import { useEffect } from 'react';
import WorldMap from './component/WorldMap';
import Weather from './component/Weather';


function App() {
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      currentLocationWeather(latitude, longitude)
    });
  }

  const currentLocationWeather = async (latitude, longitude) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d7e33768b2951b19a65d2ddd0d939a8b`
    let response = await fetch(url)
    let data = await response.json();
    console.log("데이터 확인", data)
  }

  useEffect(()=>{
    getCurrentLocation()
  }, [])

  return (
    <div>
      <Weather />
    </div>
  );
}

export default App;
