import React, {Component} from 'react';
import './weather.css';

class Weather extends Component{
    render(){
        return (
            <div className='weatherWrap'>
                {this.props.city &&
                    <div>
                        <p className='city'>{this.props.city}, {this.props.country}</p>
                        <img src={this.props.icon} alt=""/>
                        <p className='temp'>{this.props.temp}°C</p>
                        <p>Тиск: {this.props.pressure}</p>
                        <p>Опис: {this.props.description}</p>
                        <p>Вологість: {this.props.humidity}</p>
                        <p>Швидкість вітру: {this.props.speed}</p>
                        <p>Напрям у градусах: {this.props.deg}</p>

                    </div>
                }
                <p className='err'>{this.props.error}</p>

            </div>
        )

    }

}

export default Weather;