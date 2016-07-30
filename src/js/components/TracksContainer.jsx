import React from 'react';

// import RegularTrackControls from './TracksContainer/RegularTrackControls.jsx';
// import RegularTrackTimeline from './TracksContainer/RegularTrackTimeline.jsx';

import SingleRegularTrack from './TracksContainer/SingleRegularTrack.jsx';
import SingleOriginalTrack from './TracksContainer/SingleOriginalTrack.jsx';


import {Grid}  from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';

import {TRACK_HEIGHT, BAR_WIDTH, MARKER_WIDTH} from '../constants.js';
import './TracksContainer.scss';



export default class TracksContainer extends React.Component {
    render() {
        return (
            <Grid fluid className='TracksContainer'>

                <SingleOriginalTrack className='TracksContainer__singleTrackCont'
                    trackData = {this.props.tracks[0]}
                    peaksRaw  = {this.props.peaksRaw}
                    dispatch  = {this.props.dispatch} />

                {
                    this.props.tracks.map( (el, i) => {
                        let audioFileData = this.props.mediaBay.find(audioFile => audioFile.path === el.audioUrl);
                        audioFileData = audioFileData ? audioFileData.name : null;
                        return (
                            <SingleRegularTrack className='TracksContainer__singleTrackCont'
                                key           = {i}
                                trackData     = {el}
                                audioFileName = {audioFileData}
                                cursorTC      = {this.props.cursorTC}
                                isDragging    = {this.props.isDragging}
                                dispatch      = {this.props.dispatch} />
                        );
                    }).slice(1)
                }

            </Grid>
        );
    }

}
