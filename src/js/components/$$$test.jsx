import React from 'react';

// import Grid  from 'react-bootstrap/lib/Grid';
// import Row   from 'react-bootstrap/lib/Row';
// import Col   from 'react-bootstrap/lib/Col';

import getFileNameFromPath from '../helpers/getFileNameFromPath.js';
import AudioFactory from '../helpers/AudioFactory.js';

export default class $$$test extends React.Component {
    state = {
        audios : [
            '../media/stick.wav',
            '../media/kick.wav',
            '../media/snare.wav',
            '../media/snowboard.mp4',
            '../media/RATM-1.mp3',
            '../media/RATM-2.mp3'
        ]
    };

    audioFactory = new AudioFactory();

    componentDidMount = () => {
        this.audioFactory.loadSoundFiles( this.state.audios );
    };

    render() {
        return (
            <div style={{color: 'red'}}>
                <div> play
                    {
                        this.state.audios.map((el, i) => {
                            return <button key={i}
                                           onClick={this.audioFactory.play.bind( this.audioFactory,
                                                                                 getFileNameFromPath(el),
                                                                                 void 1,
                                                                                 void 1) }>
                                { getFileNameFromPath(el) }
                            </button>;
                        })
                    }
                </div>

                <div> stop
                    {
                        this.state.audios.map((el, i) => {
                            return <button key={i}
                                           onClick={this.audioFactory.stop.bind( this.audioFactory,
                                                                                 getFileNameFromPath(el)) }>
                                { getFileNameFromPath(el) }
                            </button>;
                        })
                    }
                </div>
                <div>
                    <button onClick={this.audioFactory.playAll.bind(this.audioFactory)}>play all</button>
                    <button onClick={this.audioFactory.stopAll.bind(this.audioFactory)}>stop all</button>
                </div>
            </div>
        );
    }

}
