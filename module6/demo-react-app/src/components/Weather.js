import React from 'react'
import FancyBorder from './FancyBorder';

// State can be modified based on user action or network changes
// Every time the state of an object changes, React re-renders the component to the browser
// The state object is initialized in the constructor
// The state object can store multiple properties
// this.setState() is used to change the value of the state object
// setState() function performs a shallow merge between the new and the previous state
// State shouldn’t be modified directly – the setState( ) should be used
// State affects the performance of your app, and therefore it shouldn’t be used unnecessarily

class Weather extends React.Component {

    constructor(props) {

        //both props and state are stored as objects, with individual custom properties for storing different bits of data

        super(props); //props are passed in from parent components up the chain

        //The only place where you can assign this.state is the constructor.
        this.state = { weather: 'sunny', temperature: 27, forecast: 'scattered showers' }; //state 'belongs' to the component itself
        this.weatherOptions = ['sunny', 'windy', 'cloudy', 'snowing', 'hail', 'raining']
        // this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
    }
  
    windBlows = () => {
        //Always use the setState() method to change the state object, 
        //since it will ensure that the component knows it’s been updated and triggers the render() method.        
        this.setState({ weather: 'windy',temperature: this.state.temperature - 5});
        // this.setState({ temperature: this.state.temperature - 5 });

        //this just changes the 'weather' state and leaves the others unchanged

        //how could we make the button also lower the temperature by 5 degrees?

        //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
    }
    
    //add another button and function sunShines() to set the weather bsck to sunny
    sunShines(){
        this.setState({weather:'sunny', temperature: this.state.temperature + 5})
    }

    //add another button and function changeWeather() to toggle the weather between windy and sunny
    changeWeather(){
        let oldweatherIndex = this.weatherOptions.indexOf(this.state.weather)
        let newweatherIndex = oldweatherIndex === (this.weatherOptions.length - 1) ? 0 : oldweatherIndex + 1;
        let newWeather = this.weatherOptions[newweatherIndex];

        // let newWeather = this.state.weather === 'sunny' ? 'windy' : 'sunny'
        this.setState({weather: newWeather});
    }

    //how could we switch between multiple possible weather states? 

    render() {
        return (
            <FancyBorder  color="blue" Weather componentBox >
                <div>Weather Today: {this.state.weather}. Temp is {this.state.temperature}&deg;C</div>
                <div>Weather Tomorrow: {this.state.forecast}</div>
                {/* <Forecast weather={this.state.forecast} /> */}

                {/* what happens if the onclick isn't wrapped in an arrow function? */}
                <button onClick={this.windBlows}>Stay Home</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
                <button onClick={() => this.sunShines()}>Beach Day</button>
                <button onClick={() => this.changeWeather()}>Change Weather</button>
            </FancyBorder>

        )
    }
}

export default Weather;

//now create hooks based functional component equivalent