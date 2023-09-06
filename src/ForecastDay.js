import React from "react";

export default function ForecastDay (props){
  let date = new Date(props.data.time * 1000);
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  function monthDay() {
    let month = date.getMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${month}/${day}`;
  }
  return (
    <div className="ForecastDay">
      <div className="day">{day()}</div>
      <div className="forecast-date">{monthDay()}</div>
      <div>
        <img
        src={props.data.condition.icon_url}
alt= {props.data.condition.description}
/>
        </div>
        <div>
          <span className="forecast-temp-max">{maxTemperature()}</span>
        <span className="forecast-temp-min">{minTemperature()}</span>
        </div>
    </div>
  );
}