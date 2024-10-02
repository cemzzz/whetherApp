import './App.css';
import { useEffect, useState } from 'react';
import Weather from './component/Weather';
import WeatherSelect from './component/WeatherSelect';
import WeatherDetail from './component/WeatherDetail';
import WorldMap from './component/WorldMap';
import ClipLoader from "react-spinners/ClipLoader";


const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const cityList = ['seoul', 'new york', 'beijing', 'tokyo']
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null) // 오류 상태

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
    setLoading(true)
    setError(null) // 오류 초기화
    
    try{
      let response = await fetch(url)
      if (!response.ok) {
        throw new Error('날씨 정보를 불러오는 중 문제가 발생했습니다.');
      }
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false)
    }
  }

  const getWeatherCity= async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    setLoading(true)
    setError(null) // 오류 초기화

    try{
      let response = await fetch(url)
      if (!response.ok) {
        throw new Error('해당 도시의 날씨 정보를 불러오는 중 문제가 발생했습니다.');
      }
      let data = await response.json();
      setWeather(data);
    } catch(error){
      setError(error.message);
    } finally {
      setLoading(false)
    }
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
      {loading 
        ? <div className='container'> 
            <ClipLoader color = "#414156" loading={loading} size={150}/>
          </div>
        : <div className='container'>
            {error && <div className="error">{error}</div>}  {/* 오류 메시지 표시 */}      
            <div className='weahterInfoContainer'>
              <Weather weather={weather}/>
              <WeatherDetail weather={weather}/>
            </div>
            <WeatherSelect setCity={setCity} cityList={cityList}/>
            <WorldMap setCity={setCity} />
          </div>
      } 
    </div>
  );
}

export default App;
