import axios from 'axios';
import React, { useState } from 'react';
import './styles/Day25.css';
const Day25 = () => {
    //api key and base url
    const api = {
        key: "f1a1da9d60ab0537aefe5fab67a51c16",
        base: "https://api.openweathermap.org/data/2.5/",
    }
    //states for input box and api data
    const [searchText, setSearchText] = useState('')
    const [weather, setWeather] = useState({})
    
    //handle input func
    const handleInput = (e) => {
        setSearchText(e.target.value)

    }

    //trigger api call
    const search = (e) => {
        if (e.key === "Enter") {
            axios.get(`${api.base}weather?q=${searchText || 'delhi'}&units=matric&appid=${api.key}`)
                .then(res => {
                    setWeather(res.data);
                    setSearchText('');
                })
                .catch(error =>{
                    alert("Location not found");
                    setSearchText('');
                    
                })

        }

    }
    //full date func
    const weatherDate = (d) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let day = days[d.getDay()]
        let date = d.getDate();
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day},${date} ${month} ${year}`

    }
    return (
        <div className='weather-app'>
            <div className="weather-search-box">
                <input type="text" placeholder='search...' value={searchText} className='weather-input' onChange={handleInput} onKeyDown={search} />
            </div>
            {weather.sys != undefined ? <>
                <div>
                    <h2 className='weather-name'>{weather.name},{weather.sys.country}</h2>
                    <h4 className='weather-date'>{weatherDate(new Date())}</h4>
                </div>
                <div>
                    <div className='weather-temp'>{Math.round(weather.main.temp - 273.15)}°c</div>
                    <p className='weather-temp-type'>{weather.weather[0].main}</p>
                </div></> : ''}
        </div>
    )
}

export default Day25;