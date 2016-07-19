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



export default class MediaBay extends React.Component {

    render() {
        const data = this.props.stateData;

        return (
            <div className='MediaBay__container'>
                <Grid fluid>

                    <Row className='no-gutter'>
                        <SearchField />
                    </Row>

                    <Row className='no-gutter'>
                        <SearchResultTable audioFiles={data.audioFiles}/>
                    </Row>

                    <Row className='no-gutter'>
                        <Col smHidden>
                            <SvgWaveForm barWidth    = {data.barWidth}
                                         trackHeight = {data.trackHeight}
                                         peaksRaw    = {data.peaksRaw} />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}
