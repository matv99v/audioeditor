import React from 'react';
import './MediaBay.scss';

import {Checkbox}    from 'react-bootstrap/lib';
import {Button}      from 'react-bootstrap/lib';
import {Grid}        from 'react-bootstrap/lib';
import {Row}         from 'react-bootstrap/lib';
import {Col}         from 'react-bootstrap/lib';

import SvgWaveForm from './sharedComponents/SvgWaveForm.jsx';
import SearchField from './MediaBay/SearchField.jsx';
import SearchResultTable from './MediaBay/SearchResultTable.jsx';

import {BAR_WIDTH, TRACK_HEIGHT} from '../constants.js';

export default class MediaBay extends React.Component {

    render() {
        return (
            <div className='MediaBay__container'>
                <Grid fluid>

                    <Row className='no-gutter'>
                        <SearchField />
                    </Row>

                    <Row className='no-gutter'>
                        <SearchResultTable audioFiles={this.props.audioFiles}/>
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
