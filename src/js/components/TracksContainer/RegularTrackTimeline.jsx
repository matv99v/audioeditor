import React from 'react';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';


import './RegularTrackTimeline.scss';

import TrackMarker  from './RegularTrackTimeline/TrackMarker.jsx';
import TrackOptions from './RegularTrackTimeline/TrackOptions.jsx';

import {TRACK_HEIGHT, MARKER_WIDTH} from '../../constants.js';
import { selectNewActiveTrack } from '../../actions/tracksActions.js';



export default class RegularTrackTimeline extends React.Component {
    handleSelectActiveTrack = (e) => {
        e.stopPropagation();
        this.props.dispatch( selectNewActiveTrack(this.props.trackData.id) );
    };

    render() {
        return (
            <div className = {this.props.trackData.isActive ? 'RegularTrackTimeline__container_active' : 'RegularTrackTimeline__container_inactive'} // eslint-disable-line
                 onClick   = {this.handleSelectActiveTrack}
                 style     = {{ height: TRACK_HEIGHT }} >

                 <div className = 'RegularTrackTimeline__innerContainer'
                      style     = {{ width: `calc(100% - ${MARKER_WIDTH}px)` }} >
                    {
                        this.props.trackData.markers.map((el, i) => {
                            return (
                                    <TrackMarker position = {el}
                                                 key      = {i}
                                                 id       = {this.props.trackData.id} />
                            );
                        })
                    }
                </div>

                {
                    this.props.trackData.isActive
                        ? <TrackOptions showExtendedOpts = {this.props.trackData.showExtendedOpts}
                                        dispatch         = {this.props.dispatch}
                                        trackData        = {this.props.trackData}
                                        cursorTC         = {this.props.cursorTC}
                                        id               = {this.props.trackData.id} />
                        : null
                }

            </div>
        );
    }
}
