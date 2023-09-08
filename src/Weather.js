import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature:response.data.temperature.current,
      coordinates: response.data.coordinates,
      humidity: response.data.temperature.humidity,
      conditions: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      icon:response.data.condition.icon_url,
    });
  }
  function search(){
    const apiKey = "23f35a041todc2b80f91930b959fa171";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleCity(event) {
  setCity(event.target.value);
}
if (weatherData.ready) {
  return (
    <div className="Weather WeatherInfo">
      <form onSubmit={handleSubmit}>
        <div className="row m-2">
          <div className="col-9 ">
            <input
              type="search"
              placeholder="Enter city..."
              autoFocus="on"
              className="form-control"
              onChange={handleCity}
            />
          </div>
          <div className="col-3 ">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
     
    </div>
  );
} else {
  search();
  return "Loading...";
}
}


