import React from 'react';
import './Ruler.scss';

import Col   from 'react-bootstrap/lib/Col';
import Row   from 'react-bootstrap/lib/Row';
import Grid   from 'react-bootstrap/lib/Grid';



export default class Ruler extends React.Component {

    render() {
        return (
            <Grid fluid>
                <Row className='no-gutter'>

                    <Col xsHidden sm={3} md={3} lg={3}>
                        <div className='Ruler__statusContainer'>app status...</div>
                    </Col>

                    <Col xs={12}  sm={9} md={9} lg={9} className='Ruler__container'>

                        <span className = 'Ruler__pointer'
                              style     = {{left: this.props.currentTC + '%'}} >
                            <span className = 'Ruler__line'
                                  style     = {{height: window.innerHeight * 2}} >
                            </span>
                        </span>

                        {
                            [...Array(20)].map((el, i, array) => {
                                const step        = 100 / array.length;
                                const curPosition = step * i;
                                const label       = i % 4 === 0 ? curPosition : null;
                                const height      = i % 4 === 0 ? '100%' : '50%';
                                return <div className = 'Ruler__timeStamps'
                                            key={i}
                                            style = {{
                                                left: `${curPosition}%`,
                                                height
                                            }} >
                                            {label}
                                        </div>;
                            })
                        }
                    </Col>
                </Row>
            </Grid>

        );
    }
}
