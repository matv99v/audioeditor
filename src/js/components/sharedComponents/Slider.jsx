import React from 'react';
import { changeVolume } from '../../actions/tracksActions.js';
import './Slider.scss';


export default class Slider extends React.Component {
    state = { sliderValue: null };

    handleSliderChange = (e) => {
        e.stopPropagation();
        this.setState({sliderValue: e.target.value});
        this.props.dispatch( changeVolume(this.props.id, e.target.value) );
    };

    componentDidMount = () => {
        this.setState({ sliderValue: this.props.volume });
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
