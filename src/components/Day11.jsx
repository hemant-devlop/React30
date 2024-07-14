import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Day11 = () => {
    const[weather,setWeather]=useState(null)
    const[error,setError]=useState(null)
    const api_key='f1a1da9d60ab0537aefe5fab67a51c16'
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                const latitude=position.coords.latitude;
                const longitude=position.coords.longitude;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
                .then(res=>setWeather(res.data))
                .catch((err)=>setError('error occur in getting weather')),
                (err)=>{
                    setError("error gettting geolocation")
                }
        })
        }else{
            setError("geolocation is not supported by the browser")
        }
    },[])
console.log(weather)
  return (
    <div>
    {error && <p>{error}</p>}
    {weather?(<div>
        <h3>Weather in {weather.name}</h3>
        <h3>Weather:{weather.weather[0].main}</h3>
        <h3>Temp: {Math.floor(weather.main.temp-273.15)}°C</h3>
        <h3>Humidity: {weather.main.humidity}%</h3>
        <h3>Wind speed:{weather.wind.speed}/h</h3>
    </div>):(
        !error && <p>loading...</p>
    )}
      
    </div>
  )
}

export default Day11
