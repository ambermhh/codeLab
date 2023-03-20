import React from "react";

function HookWeather(){
    
    const [weather, setWeather] = React.useState('sunny');
    const [temperature, setTemperature] = React.useState(27);
    const [forecast, setForecast] = React.useState('scattered showers')

    const weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'hail', 'raining']


    const sunShines = () => {
        setWeather('sunny')
        setTemperature(temperature + 5)
        setTemperature(oldTemperature => oldTemperature + 5)
    }

    const windBlows = () => {
        setWeather('windy')
        setTemperature(temperature - 5)
    }

    const changeWeather = () => {
        let oldweatherIndex = weatherOptions.indexOf(weather)
        let newweatherIndex = oldweatherIndex === (weatherOptions.length - 1) ? 0 : oldweatherIndex + 1;
        let newWeather = weatherOptions[newweatherIndex];
        setWeather(newWeather)
    }
    
    return (
        <div className="Weather componentBox">
            <div>Hook Weather Today: {weather}. Temp is {temperature}&deg;C</div>
            <div>Weather Tomorrow: {forecast}</div>
            {/* <Forecast weather={this.state.forecast} /> */}

            {/* what happens if the onclick isn't wrapped in an arrow function? */}
            <button onClick={windBlows}>Stay Home</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
            <button onClick={() => sunShines()}>Beach Day</button>
            <button onClick={() => changeWeather()}>Change Weather</button>
        </div>

    )}
export default HookWeather;