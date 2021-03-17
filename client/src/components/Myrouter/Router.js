import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppNavbar from '../Nav/AppNavbar';
import SideNav from '../Nav/SideNav';
import Profile from '../Profile/Profile';
import LandingPage from '../LandingPage/LandingPage';
import { ProfileProtectedRoute } from '../../productedRoute/ProtectedRoute';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

const MyRouter = () => {
    return (
        <Fragment>
            <Header />
            <AppNavbar />
            <Row>
                <Col md={{ size: 3, offset: 1 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                    <SideNav />
                </Col>
                <Col mb={7} className='mt-3'>
                    <Container id="main-body">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <ProfileProtectedRoute exact path="/user/:userName/profile" component={Profile} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Container>
                </Col>
            </Row>
            <Footer />
        </Fragment>
    );
};

export default MyRouter;
