import React from 'react';
import { PATH_TO_VIDEO }  from '../constants.js';
import { setNewTimeCode } from '../actions/curosrActions.js';
import { pressStop }      from '../actions/mainControlsActions.js';
import './Video.scss';


export default class Video extends React.Component {
    animationFrameCallerId = null;

    handleTCchange = () => {
        this.props.dispatch( setNewTimeCode(
            (this.refs.videoElement.currentTime / this.refs.videoElement.duration) * 100
        ) );
        this.animationFrameCallerId = requestAnimationFrame(this.handleTCchange);
    };

    componentWillReceiveProps = (nextProps) => {
        if (!this.props.isPlaying && nextProps.isPlaying) {
            this.refs.videoElement.play();
            this.animationFrameCallerId = requestAnimationFrame(this.handleTCchange);
        } else if (this.props.isPlaying && !nextProps.isPlaying) {
            this.refs.videoElement.pause();
            cancelAnimationFrame(this.animationFrameCallerId);
        } else if (!this.props.isPlaying && !nextProps.isPlaying) {
            const curTime = (nextProps.cursorTC / 100) * nextProps.videoDuration;
            this.refs.videoElement.currentTime = curTime;
        }
    };

    componentDidMount = () => {
        this.refs.videoElement.onended = () => {
            this.props.dispatch( pressStop() );
        };
    };

    render() {
        return (
            <div className='Video__container'>
                <div className='Video__timecode'>
                    {(this.props.cursorTC * this.props.videoDuration / 100).toFixed(2)}
                </div>

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
