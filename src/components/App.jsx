import React from 'react';
import {Grid}  from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';


import MainControls    from './MainControls.jsx';
import TracksContainer from './TracksContainer.jsx';
import Video           from './Video.jsx';
import Ruler           from './Ruler.jsx';
import MediaBay        from './MediaBay.jsx';


import $$$test         from './$$$test.jsx';

import arrayToDiscreteExtremums from '../../src/js/arrayToDescreteExtremums.js';
import getAudioBufferPeaksAsync from '../../src/js/getAudioBufferPeaksAsync.js';

import './App.scss';


export default class App extends React.Component {
    state = {
        pathToVideo : '../media/snowboard.mp4',
        activeTrackId : 2,
        peaksRaw    : [],                 // raw audio data from video
        peaksOpt    : [],                 // optimized audio data
        kIndex      : null,               // index of audio data optimization
        windowWidth : window.innerWidth,
        windowHeight: window.innerHeight,
        barWidth    : 4,                  // width in px of a single audio bar vizualization
        markerWidth : 2,                  // width in px of a single audio bar vizualization
        trackHeight : 62,
        currentTimeCodePosition : 30,     // percents
        tracks: [
            {
                id               : 0,
                showExtendedOpts : true, // boolean that represents view state of a single track (markers or extendedControls view)
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
        ]
    }

    handleResize = () => {
        const kIndex   = (this.state.peaksRaw.length / (window.innerWidth / (this.state.barWidth + 2))) >> 0; // eslint-disable-line
        const peaksOpt = arrayToDiscreteExtremums(this.state.peaksRaw, kIndex);

        this.setState({
            ...this.state,
            windowWidth : window.innerWidth,
            windowHeight: window.innerHeight,
            peaksOpt,
            kIndex
        });
    }

    componentDidMount() {
        getAudioBufferPeaksAsync(this.state.pathToVideo)
            .then( peaksRaw => {
                const kIndex   = (peaksRaw.length / (window.innerWidth / (this.state.barWidth + 2))) >> 0; // eslint-disable-line
                const peaksOpt = arrayToDiscreteExtremums(peaksRaw, kIndex);

                this.setState({
                    ...this.state,
                    peaksOpt,
                    peaksRaw,
                    kIndex
                });
            });

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <Grid fluid>
                <Row className='no-gutter'>
                    <MainControls />
                </Row>

                <Row className='no-gutter'>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <Video pathToVideo = {this.state.pathToVideo}
                               timecode    = {this.state.currentTimeCodePosition} />
                    </Col>

                    <Col xsHidden sm={6} md={6} lg={6}>
                        <MediaBay/>
                    </Col>
                </Row>

                <Row className='no-gutter'>
                    <Ruler currentTC    = {this.state.currentTimeCodePosition}
                           windowHeight = {this.state.windowHeight} />
                </Row>

                <Row className='no-gutter'>
                    <TracksContainer stateData={this.state}/>
                </Row>

                <Row><$$$test stateData={this.state} /></Row>

            </Grid>
        );
    }
}
