import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './images/camera.png'
import logo2 from './images/camera2.png'

const Header = () => {
    return (
        <div>
            <Row >
                <Col md={{ size: 2, offset: 2 }} sm={{offset: 3}} style={{display: 'flex'}}>
                    <img src={logo} id='page-logo'
                    />
                     <h3 id="page-logo-text">Photo Club</h3>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
