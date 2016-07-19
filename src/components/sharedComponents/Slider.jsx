import React from 'react';

import './Slider.scss';


export default class Slider extends React.Component {
    state = { sliderValue: this.props.value || 50 };

    handleSliderChange = (e) => {
        this.setState({sliderValue: e.target.value});
    };

    render() {
        return (

            <div className='Slider__container'>
                <div className = 'Slider__view'
                     style     = {{width: this.state.sliderValue + '%'}}
                >
                </div>
                <div className = 'Slider__volumeAmount' >
                    {this.state.sliderValue}
                </div>

                <input className = 'Slider__generic'
                       type      = 'range'
                       onChange  = {this.handleSliderChange}
                />
            </div>

        );
    }
}
