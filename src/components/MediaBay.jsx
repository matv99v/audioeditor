import React from 'react';
import './MediaBay.scss';

import {Table}    from 'react-bootstrap/lib';
import {Glyphicon} from 'react-bootstrap/lib';
import {Form} from 'react-bootstrap/lib';
import {FormGroup} from 'react-bootstrap/lib';
import {Col} from 'react-bootstrap/lib';
import {FormControl} from 'react-bootstrap/lib';
import {Checkbox} from 'react-bootstrap/lib';
import {Button} from 'react-bootstrap/lib';



export default class MediaBay extends React.Component {

    // create separate components
    render() {
        return (
            <div className='MediaBay__container'>


                <Form horizontal>
                    <FormGroup bsSize="small" controlId="searchAudioField">
                        <Col sm={12}>
                            <FormControl type="text" placeholder="Seach audio" />
                        </Col>
                    </FormGroup>
                </Form>




                <Table striped bordered condensed >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Rating</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>Steps</td>
                            <td>0:20</td>
                            <td>
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Screams</td>
                            <td>0:03</td>
                            <td>
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Falls</td>
                            <td>0:04</td>
                            <td>
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Heels</td>
                            <td>0:08</td>
                            <td>
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                                <Glyphicon glyph='star' />
                            </td>
                        </tr>

                    </tbody>
                </Table>





            </div>
        );
    }
}
