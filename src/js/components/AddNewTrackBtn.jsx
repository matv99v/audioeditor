import React from 'react';
import './AddNewTrackBtn.scss';
import { Glyphicon } from 'react-bootstrap/lib';
import { TRACK_HEIGHT } from '../constants.js';
import { addNewTrack } from '../actions/tracksActions.js';


export default class AddNewTrackBtn extends React.Component {
    handleButtonClick = () => {
        this.props.dispatch(addNewTrack());
    };

    shouldComponentUpdate = () => {
        return false;
    };

    render() {
        return (
            <div className = 'AddNewTrackBtn__container'
                 style     = {{height: TRACK_HEIGHT}}
                 onClick   = {this.handleButtonClick}>

                <Glyphicon glyph='plus' className='AddNewTrackBtn__plus'/>
            </div>
        );
    }
}
