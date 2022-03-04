import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response) {
        console.log(response.data);
    }
    
    let apiKey = "63b79185d21891dc86fad86aa0ab0b0b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
   
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="weatherForecast-day">Thu</div>
                <WeatherIcon code="01d" size={36} />
                <div className="weatherForecast-temperatures">
                    <span className="weatherForecast-max">19°</span>
                    <span className="weatherForecast-min">10°</span>
                </div>
            </div>
        </div>
    </div>
    );
}