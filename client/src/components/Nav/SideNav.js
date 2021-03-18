import React from 'react';
import Login from '../auth/Login'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col, Row} from 'reactstrap';

const SideNav = () => {
    return (
        <div>
        <Row>
            <Col className='mt-3'>
             <Card body outline color="success">
                <CardBody>
                    <Login />
                </CardBody>
                <CardFooter style={{color:'gray'}}>즐겁게 사진을 찍고 싶은분은 누군든 환영입니다!</CardFooter>
            </Card>
            </Col>
         </Row>
         </div>
    );
};

export default SideNav;
