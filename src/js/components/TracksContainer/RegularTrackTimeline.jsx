import React from 'react';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';


import './RegularTrackTimeline.scss';

import TrackMarker  from './RegularTrackTimeline/TrackMarker.jsx';
import TrackOptions from './RegularTrackTimeline/TrackOptions.jsx';

import {TRACK_HEIGHT, MARKER_WIDTH} from '../../constants.js';



export default class RegularTrackTimeline extends React.Component {
    render() {
        return (
            <div className = {this.props.isActive ? 'RegularTrackTimeline__container_activeTrack' : 'RegularTrackTimeline__container'} // eslint-disable-line
                 style     = {{ height: TRACK_HEIGHT }} >

                {
                    this.props.trackData.markers.map((el, i) => {
                        return (
                            <div className = 'RegularTrackTimeline__innerContainer'
                                 key       = {i}
                                 style     = {{ width: `calc(100% - ${MARKER_WIDTH}px)` }} >

                                <TrackMarker position     = {el}
                                             id           = {this.props.id} />
                            </div>
                        );
                    })
                }

                {
                    this.props.isActive
                        ? <TrackOptions showExtendedOpts = {this.props.showExtendedOpts}
                                        id               = {this.props.id} />
                        : null
                }

            </div>
        );
    }
}
