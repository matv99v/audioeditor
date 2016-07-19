import React from 'react';
import './TrackMarker.scss';

import getColorById from '../../../helpers/getColorById.js';

import {TRACK_HEIGHT, MARKER_WIDTH} from '../../../constants.js';


export default class TrackMarker extends React.Component {
    render() {
        return (
            <div className='TrackMarker__container'
                 style={{
                     left            : this.props.position + '%',
                     height          : TRACK_HEIGHT,
                     border          : 0,
                     borderLeftWidth : MARKER_WIDTH,
                     borderStyle     : 'solid',
                     borderColor     : getColorById(this.props.id)
                 }}>
            </div>
        );
    }
}
