import React, {useState, useEffect} from 'react'
import "./WeatherApp.css"
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"
import { document } from 'postcss'
import axios from 'axios'
import { getWeatherData } from '../getWeatherData'



export default function WeatherApp() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data)
    }catch (error){
      console.log(error.message)
    }
  }
  



  useEffect(() => {
    getData();
  }, []);

  // const search = async () => {
  //   const element = document.getElementsByClassId("cityInput")
  //   if(element[0].value===""){
  //     return 0;
  //   }
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

  //   let response = await fetch(url);
  //   let data = await response.json();


  //   const humidity = document.getElementsByClassName("humidity-percent");
  //   const wind = document. getElementsByClassName("wind-rate");
  //   const temperature = document.getElementsByClassName("weather-temp");
  //   const location = document.getElementsByClassName("weather-location");

  //   humidity[0].innerHTML = data.main.humidity;
  //   wind[0].innerHTML = data.wind.speed;
  //   temperature[0].innerHTML = data.main.temp;
  //   location[0].innerHTML = data.name;

  //   console.log("search", search)

  // }

    
  return (
    <div className="container w-[600px] h-[830px] m-[auto] mt-[75px] rounded-[12px]">
      <div className="top-bar flex justify-center pt-16 gap-4">
        <input 
        type="text" 
        className="cityInput flex w-[362px] h-20 rounded-[40px] ps-10 text-[#626262]" 
        placeholder="Search"
        onChange={(e) => setCity(e.target.value)}
        />
        <div 
        className="search-icon flex justify-center items-center w-20 h-20 rounded-[40px]" 
        onClick={() => getData()}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      {weatherdata !== null ? (
        <div>
        <div className="weather-image flex justify-center mt-12">
          <img className="w-[200px] h-[200px]" src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon" />
        </div>
        <div className="weather-temp flex justify-center text-6xl text-[white]">{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</div>
        <div className="weather-location flex justify-center text-[white] text-6xl">{weatherdata.name}</div>
        <div className="data-container mt-12 text-[white] flex justify-center">
          <div className="element m-[auto] flex gap-3 place-items-start">
            <img src={humidity_icon} alt="" className="icon mt-3" />
            <div className="data text-4xl">
              <div className="humidity-percent">{weatherdata.main.humidity + ` %`}</div>
              <div className="text text-xl">Humidity</div>
            </div>
          </div>
          <div className="element m-[auto] flex items-start gap-3">
            <img src={wind_icon} alt="" className="icon mt-3" />
            <div className="data text-4xl">
              <div className="wind-rate">{weatherdata.wind.speed + `  mp/h`}</div>
              <div className="text text-xl">Wind Speed</div>
            </div>
          </div>

      </div>
      </div>
      ) : null}

      


    </div>
  )
}

