import React from 'react';
import './Video.scss';

import { PATH_TO_VIDEO } from '../constants.js';

import { setNewTimeCode } from '../actions/curosrActions.js';



export default class Video extends React.Component {
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.isPlaying) this.refs.videoElement.play();
        else this.refs.videoElement.pause();
    };

    curTime = 0;

    componentDidUpdate = () => {
        // console.log(this.props.cursorTC);
        this.curTime = (this.props.cursorTC / 100) * this.refs.videoElement.duration;
        this.refs.videoElement.currentTime = this.curTime;
        this.refs.videoElement.ontimeupdate = () => {
            this.props.dispatch( setNewTimeCode(
                (this.refs.videoElement.currentTime / this.refs.videoElement.duration) * 100 )
            );
            // console.log(this.refs.videoElement.currentTime);
        };
    };

    render() {

        return (
            <div className='Video__container'>
                <div className='Video__timecode'>{this.curTime.toFixed(2)}</div>

                <video width='100%' height='auto' className='Video__videoElement' ref='videoElement' >
                    <source src={PATH_TO_VIDEO} type='video/mp4'/>
                </video>
            </div>
        );
    }
}
