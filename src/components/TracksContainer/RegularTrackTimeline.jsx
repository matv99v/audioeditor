import React from 'react';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';


import './RegularTrackTimeline.scss';

import TrackMarker  from './RegularTrackTimeline/TrackMarker.jsx';
import TrackOptions from './RegularTrackTimeline/TrackOptions.jsx';


export default class RegularTrackTimeline extends React.Component {
    render() {
        return (
            <div className = {this.props.isActive ? 'RegularTrackTimeline__container_activeTrack' : 'RegularTrackTimeline__container'} // eslint-disable-line
                 style     = {{ height: this.props.trackHeight }} >

                {
                    this.props.trackData.markers.map((el, i) => {
                        return (
                            <div className = 'RegularTrackTimeline__innerContainer'
                                 key       = {i}
                                 style     = {{ width: `calc(100% - ${this.props.markerWidth}px)` }} >

                                <TrackMarker position     = {el}
                                             markerHeight = {this.props.trackHeight}
                                             markerWidth  = {this.props.markerWidth}
                                             id           = {this.props.id} />
                            </div>
                        );
                    })
                }

                {
                    this.props.isActive
                        ? <TrackOptions height           = {this.props.trackHeight}
                                        showExtendedOpts = {this.props.showExtendedOpts}
                                        id               = {this.props.id} />
                        : null
                }

            </div>
        );
    }
}
