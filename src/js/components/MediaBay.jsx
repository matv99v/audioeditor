import React from 'react';
import {Checkbox, Button, Grid, Row, Col} from 'react-bootstrap/lib';
import {BAR_WIDTH, TRACK_HEIGHT}          from '../constants.js';
import SvgWaveForm       from './sharedComponents/SvgWaveForm.jsx';
import SearchField       from './MediaBay/SearchField.jsx';
import SearchResultTable from './MediaBay/SearchResultTable.jsx';
import './MediaBay.scss';


export default class MediaBay extends React.Component {
    shouldComponentUpdate = nextProps => {
        return !nextProps.isPlaying;
    };

    render() {
        return (
            <div className='MediaBay__container'>
                <Grid fluid>

                    <Row className='no-gutter'>
                        <SearchField />

                    </Row>

                    <Row className='no-gutter'>
                        <SearchResultTable
                            handleDragAudioFile     = {this.props.handleDragAudioFile}
                            audioFiles              = {this.props.audioFiles} />
                    </Row>

                    <Row className='no-gutter'>
                        <Col smHidden>
                            <SvgWaveForm barWidth    = {BAR_WIDTH}
                                         trackHeight = {TRACK_HEIGHT}
                                         peaksRaw    = {this.props.peaksRaw} />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}
