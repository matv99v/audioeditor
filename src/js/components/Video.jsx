import React from 'react';
import './Video.scss';

import { PATH_TO_VIDEO } from '../constants.js';

import { setNewTimeCode } from '../actions/curosrActions.js';



export default class Video extends React.Component {
    animationFrameCallerId = null;

    handleTCchange = () => {
        this.props.dispatch( setNewTimeCode(
            (this.refs.videoElement.currentTime / this.refs.videoElement.duration) * 100
        ) );
        this.animationFrameCallerId = requestAnimationFrame(this.handleTCchange);
    };

    componentWillReceiveProps = (nextProps) => {
        // console.log(this.props.isPlaying, nextProps.isPlaying);
        if (!this.props.isPlaying && nextProps.isPlaying) { // false true
            // console.log('playing');
            this.refs.videoElement.play();
            this.animationFrameCallerId = requestAnimationFrame(this.handleTCchange);
        } else if (this.props.isPlaying && !nextProps.isPlaying) { // true false
            // console.log('stopping');
            this.refs.videoElement.pause();
            cancelAnimationFrame(this.animationFrameCallerId);
        } else if (!this.props.isPlaying && !nextProps.isPlaying) { // false false
            // console.log('set TC');
            const curTime = (nextProps.cursorTC / 100) * this.refs.videoElement.duration;
            this.refs.videoElement.currentTime = curTime;
        }
    };

    render() {
        return (
            <div className='Video__container'>
                <div className='Video__timecode'>{(+this.props.cursorTC).toFixed(1)}</div>

                <video width     = '100%'
                       height    = 'auto'
                       muted
                       className = 'Video__videoElement'
                       ref       = 'videoElement' >
                    <source src={PATH_TO_VIDEO}
                            type='video/mp4'/>
                </video>
            </div>
        );
    }
}
