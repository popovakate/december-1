import React from "react";
import FormattedDate from "./formattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.weatherData.iconUrl}
              alt={props.weatherData.description}
              className="float-left"
            />

            <span className="temperature">
              {Math.round(props.weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Wind: {props.weatherData.wind} kmh</li>
            <li>Humidity: {props.weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
