import React from 'react';
import Login from '../auth/Login'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col, Row} from 'reactstrap';

const SideNav = () => {
    return (
        <div>
        <Row>
            <Col className='mt-3'>
             <Card>
                <CardBody>
                    <Login />
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            </Col>
         </Row>
         </div>
    );
};

export default SideNav;
