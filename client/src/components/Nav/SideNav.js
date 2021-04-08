import React from 'react';
import Login from '../Authentication/Login';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

const SideNav = () => {
    return (
        <Card id="sidenav" className="mt-3">
            <CardBody>
                <Login />
            </CardBody>
            <CardFooter style={{ color: 'gray', textAlign: 'center' }}>즐겁게 사진을 찍고 싶은분은 누구든지 환영입니다!</CardFooter>
        </Card>
    );
};

export default SideNav;
