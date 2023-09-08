import React from "react";
import "./WeatherInfo.css"
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div> 
      <h1 className="ms-3 mt-3 mb-0">{props.data.city}</h1>
      <ul className="mt-1 time-date-conditions">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.conditions}</li>
      </ul>
      <div className="row mx-1">
        <div className="col-6 clearfix current-weather">
          <img
            src={props.data.icon}
            alt={props.data.conditions}
            className="float-start current-temp-icon"
          />
          <WeatherTemperature fahrenheit ={props.data.temperature} />
         
        </div>
        <div className="col-6 current-info">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°F</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
