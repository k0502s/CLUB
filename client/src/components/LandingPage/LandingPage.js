import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'reactstrap';
import SideNav from '../Nav/SideNav';

const LandingPage = () => {
    return (
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                    <SideNav />
                </Col>
            <Helmet title={`HOME`} />
            <Col md={7} className="mt-3">홈</Col>
        </Row>
    );
};

export default LandingPage;
