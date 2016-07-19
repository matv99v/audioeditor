import React from 'react';
import './AddNewTrackBtn.scss';

import {Glyphicon} from 'react-bootstrap/lib';

import { TRACK_HEIGHT } from '../constants.js';



export default class AddNewTrackBtn extends React.Component {

    render() {
        return (
            <div className='AddNewTrackBtn__container' style={{height: TRACK_HEIGHT}}>
                <Glyphicon glyph='plus' className='AddNewTrackBtn__plus'/>
            </div>
        );
    }
}
