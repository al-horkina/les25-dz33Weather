import React, {Component} from 'react';
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = '5c1ae3ebb3ec18b51d3b1728fb1b7ec1';

class App extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        description: undefined,
        humidity: undefined,
        speed: undefined,
        deg: undefined,
        icon: undefined,
        error: undefined,
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);
            const icon_url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: icon_url,
                speed: data.wind.speed,
                deg: data.wind.deg,
                error: undefined
            })
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                humidity: undefined,
                description: undefined,
                speed: undefined,
                deg: undefined,
                icon: undefined,
                error: "Введіть назву міста"
            })
        }
    };

    render() {
        return (
            <div>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    speed={this.state.speed}
                    deg={this.state.deg}
                    icon={this.state.icon}
                    error={this.state.error}

                />
            </div>
        )

    }

}

export default App;
