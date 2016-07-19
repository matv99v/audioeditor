import React from 'react';
import './TrackNumber.scss';

import getColorById from '../../helpers/getColorById.js';
import {TRACK_HEIGHT} from '../../constants.js';


export default class TrackNumber extends React.Component {
    render() {
        return (
                <div className = 'TrackNumber'
                     style     = {{
                         height         : TRACK_HEIGHT,
                         backgroundColor: getColorById(this.props.id)
                     }}>
                     {this.props.id}
                </div>
        );
    }
}
