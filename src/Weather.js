import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <h1>New York</h1>
            <ul>
                <li>Friday 5:00 PM</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
                    5°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: 71%</li>
                        <li>Wind: 8 km/h</li>
                    </ul>
                </div>
                </div>
            </div>
        );
}
