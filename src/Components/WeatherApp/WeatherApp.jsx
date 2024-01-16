import React, {useState} from 'react'
import './WeatherApp.css'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search_icon from '../Assets/search.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import earth from '../Assets/earth.gif'
import night from '../Assets/night.png'
import scattered from '../Assets/scattered.png'
import broken from '../Assets/broken-cloud.png'
import thunder from '../Assets/thunder.png'


const WeatherApp = () => {

    let api_key = "344e21a1dc56b85da7032bd60362df2b"

    const[icon, setIcon] = useState(cloud);

    const search = async () => {
        const searchInput = document.getElementsByClassName("searchInput");
        if(searchInput[0].value==="")
        {
            return 0
        }
        let api_result_url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput[0].value}&units=Metric&appid=${api_key}`;


        let response = await fetch(api_result_url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind");
        const temperature = document.getElementsByClassName("weather-status");
        const location = document.getElementsByClassName("weather-location");
        // const weatherUpdate = document.getElementsByClassName("weather-update");
        const country = document.getElementsByClassName("country");


        humidity[0].innerHTML = data.main.humidity+ " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + "Km/h"; 
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML =data.name;
        // weatherUpdate[0].innerHTML = data.weather.description;
        country[0].innerHTML=data.sys.country;




        if(data.weather[0].icon==='01d')
        {
            setIcon(clear)
        }
        else if(data.weather[0].icon==='01n'){
            setIcon(night)
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
            setIcon(cloud)
        }
        else if(data.weather[0].icon==='03d')
        {
            setIcon(scattered)
        }
        else if ( data.weather[0].icon==='03n'){
            setIcon(scattered)
        }
        else if ( data.weather[0].icon==='04n' || data.weather[0].icon==='04d'){
            setIcon(broken)
        }
    
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
            setIcon(rain)
        }

        else if(data.weather[0].icon==='010d' || data.weather[0].icon==='010n'){
            setIcon(rain)
        }
        else if(data.weather[0].icon==='011d' || data.weather[0].icon==='011n'){
            setIcon(thunder)
        }
        else if(data.weather[0].icon==='013d' || data.weather[0].icon==='013n'){
            setIcon(snow)
        }
        else{
            setIcon(scattered)
        }

    }

    return(
        <div className='container'>

            <div className="eart-image">
                <img src={earth} alt="earth_gif" srcset="" />
            </div>

            <div className='search-bar'>
                <input type="text" className='searchInput' placeholder='Search Any Location...'/>
                <div className='search-icon' onClick={() => {search()}}>
                    <img src={search_icon} alt=''/>
                </div>
            </div>
            

            <div className="weather-content">

                <div className="weather-image">
                    <img src={icon} alt="" srcset="" className='weather-icon' />
                </div>
                <div className="weather-status">24°C</div>
                <div className="city">
                    <div className="country">NG</div>
                <div className="weather-location">Abuja</div>
                </div>
                {/* <div className="weather-update">cloudy</div> */}
                <div className="wather-info">
                    <div className="data">
                        <img src={humidity} alt="" srcset="" className='icon'/>
                        <div className="data-info">
                            <div className="humidity-percent">59%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>

                    <div className="data">
                        <img src={wind} alt="" srcset="" className='icon'/>
                        <div className="data-info">
                            <div className="wind">14 Km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WeatherApp