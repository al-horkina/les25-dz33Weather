import React, {Component} from 'react';
import './form.css';

class Form extends Component{
    render(){
        return (
            <form onSubmit={this.props.weatherMethod} className='myForm'>
                <input type="text" name="city" placeholder="Місто"/>
                <button>Отримати погоду</button>
            </form>
        )

    }

}

export default Form;