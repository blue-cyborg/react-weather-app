import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by {" "}
        <a href="https://fervent-kare-2cbc33.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer">
        Candice Drave
        </a> {" "}and is{" "}
        <a 
        href="https://github.com/blue-cyborg/react-weather-app"
        target="_blank" 
        rel="noopener noreferrer">
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}


