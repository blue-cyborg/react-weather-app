import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    return (
    <div>
        <div className="weatherForecast-day">{props.data.dt}</div>
                    <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
                    <div className="weatherForecast-temperatures">
                        <span className="weatherForecast-max">{props.data[0].temp.max}°</span>
                        <span className="weatherForecast-min">{props.data[0].temp.min}°</span>
                    </div>
    </div>
    );
}