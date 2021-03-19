import React from 'react';
import { Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Row >
                <Col md={{ offset: 5 }} sm={12} style={{display: 'flex'}}>
                    <img id='page-logo' src='https://img.lovepik.com/element/45000/4518.png_860.png'
                    />
                     <h3 id="page-logo-text">사진 동호회</h3>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
