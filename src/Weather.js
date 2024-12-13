import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description:response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function search() {
  const apiKey = "63b79185d21891dc86fad86aa0ab0b0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  
  function currentLocation(position) {
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=63b79185d21891dc86fad86aa0ab0b0b&units=metric`;
    axios.get(locationApiUrl).then(handleResponse);
  }

  function displayCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
  
  if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-8">
                        <input type="search" 
                        placeholder="Enter a city..." 
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-2">
                        <input type="submit" value="🔍" className="btn btn-primary w-100" />
                    </div>
                    <div className="col-2">
                      <button
                    type="current-location"
                    className="btn btn-warning w-100"
                    onClick={displayCurrentLocation}
                    > 📍
                    </button>  
                    </div>
                  </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
  );
} else {
  search();
  return "Loading..."
}
}