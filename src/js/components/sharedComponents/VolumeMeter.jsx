import React from 'react';
import './VolumeMeter.scss';

import {TRACK_HEIGHT} from '../../constants.js';


export default class VolumeMeter extends React.Component {
    render() {
        return (
                <div className = 'volumeMeter'
                     style     = {{height: TRACK_HEIGHT}}>
                </div>
        );
    }
}
