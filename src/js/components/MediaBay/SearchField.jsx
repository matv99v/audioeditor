import React from 'react';
import './SearchField.scss';
import { FormGroup, Form, FormControl, Col } from 'react-bootstrap/lib';

export default class SearchField extends React.Component {
    render() {
        return (
            <div className='SearchField__container'>
                <Form horizontal>
                    <FormGroup bsSize="small" controlId="searchAudioField">
                        <Col sm={12}>
                            <FormControl type="text" placeholder="Seach audio" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
