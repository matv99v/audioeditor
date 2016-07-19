import React from 'react';
import './Video.scss';

import { PATH_TO_VIDEO } from '../constants.js';


export default class Video extends React.Component {

    render() {
        return (
            <div className='Video__container'>
                <div className='Video__timecode'>{this.props.timecode}%</div>

                <video width='100%' height='auto' loop className='Video__videoElement'>
                    <source src={PATH_TO_VIDEO} type='video/mp4'/>
                </video>
            </div>
        );
    }
}
