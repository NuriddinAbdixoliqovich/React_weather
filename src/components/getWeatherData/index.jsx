import React from 'react'
import axios from 'axios'

const apiKey = "ee83ce8aa3f55a4ed1223deb1cc70a98";
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

export const getWeatherData = async (cityname) => {
  try{
    const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  }catch (error) {
    throw error;
  }
}
