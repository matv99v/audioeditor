import React  from 'react';
import {Grid} from 'react-bootstrap/lib';
import {Row}  from 'react-bootstrap/lib';
import {Col}  from 'react-bootstrap/lib';


import MainControls    from './MainControls.jsx';
import TracksContainer from './TracksContainer.jsx';
import Video           from './Video.jsx';
import Ruler           from './Ruler.jsx';
import MediaBay        from './MediaBay.jsx';
import AddNewTrackBtn     from './AddNewTrackBtn.jsx';

// import $$$test         from './$$$test.jsx';

import getAudioBufferPeaksAsync from '../helpers/getAudioBufferPeaksAsync.js';
import './App.scss';


export default class App extends React.Component {
    state = {
        pathToVideo : '../media/snowboard.mp4',
        activeTrackId : 0,
        peaksRaw    : [],                 // raw audio data from video
        barWidth    : 4,                  // width in px of a single audio bar vizualization
        markerWidth : 2,                  // width in px of a single audio bar vizualization
        trackHeight : 61,
        currentTimeCodePosition : 30,     // percents
        tracks: [
            {
                id               : 0,
                showExtendedOpts : false, // boolean that represents view state of a single track (markers or extendedControls view)
                markers          : [0, 75, 85], // timecode markers in percents
                mute             : false,
                solo             : false,
                volume           : 0,
                sfxPack          : null // pack of sounds to play
            },
            {
                id               : 1,
                showExtendedOpts : false,
                markers          : [33, 55, 80, 100],
                mute             : false,
                solo             : false,
                volume           : 0,
                sfxPack          : null
            },
            {
                id               : 2,
                showExtendedOpts : false,
                markers          : [10, 20, 30, 75],
                mute             : false,
                solo             : false,
                volume           : 0,
                sfxPack          : null
            },
            {
                id               : 3,
                showExtendedOpts : false,
                markers          : [0, 1, 2, 3, 4],
                mute             : false,
                solo             : false,
                volume           : 0,
                sfxPack          : null
            },
            {
                id               : 4,
                showExtendedOpts : false,
                markers          : [98, 99, 100],
                mute             : false,
                solo             : false,
                volume           : 0,
                sfxPack          : null
            }
        ],
        audioFiles: [
            {
                id: 0,
                name: 'steps',
                duration: 7,
                rating: 5
            },
            {
                id: 1,
                name: 'screams',
                duration: 3,
                rating: 3
            },
            {
                id: 2,
                name: 'falls',
                duration: 4,
                rating: 1
            },
            {
                id: 3,
                name: 'heels',
                duration: 6,
                rating: 4
            },
            {
                id: 4,
                name: 'shoots',
                duration: 2,
                rating: 2
            }
            // {
            //     id: 6,
            //     name: 'robots',
            //     duration: 1,
            //     rating: 3
            // },
            // {
            //     id: 7,
            //     name: 'wheels',
            //     duration: 6,
            //     rating: 4
            // },
            // {
            //     id: 8,
            //     name: 'squeezes',
            //     duration: 4,
            //     rating: 5
            // }
        ]
    }

    componentDidMount() {
        getAudioBufferPeaksAsync(this.state.pathToVideo)
            .then( peaksRaw => {
                this.setState({ ...this.state, peaksRaw });
            });
    }

    render() {
        return (
            <Grid fluid>
                <Row className='no-gutter'>
                    <MainControls />
                </Row>

                <Row className='no-gutter' >
                    <Col xs={12} sm={6} md={6} lg={6} >
                        <Video pathToVideo = {this.state.pathToVideo}
                               timecode    = {this.state.currentTimeCodePosition} />
                    </Col>

                    <Col xsHidden sm={6} md={6} lg={6}>
                        <MediaBay stateData={this.state} />
                    </Col>
                </Row>

                <Row className='no-gutter' >
                    <Ruler currentTC    = {this.state.currentTimeCodePosition} />
                </Row>

                <Row className='no-gutter' >
                    <TracksContainer stateData={this.state} />
                </Row>

                <Row className='no-gutter' >
                    <AddNewTrackBtn height={this.state.trackHeight}/>
                </Row>

                {/*<Row><$$$test stateData={this.state} /></Row>*/}

            </Grid>
        );
    }
}
