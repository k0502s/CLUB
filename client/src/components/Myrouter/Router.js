import React, { Fragment } from 'react';
import SideNav from '../Nav/SideNav';
import Profile from '../Profile/Profile';
import Chat from '../Chat/Chat';
import ChatButton from '../Chat/Section/ChatButton';
import LandingPage from '../LandingPage/LandingPage';
import EditSuccess from '../Profile/Section/EditSuccess';
import AddPhotoPage from '../AddPhotoPage/AddPhotoPage';
import PhotoList from '../PhotoList/PhotoList';
import BestPhotoList from '../PhotoList/BestPhotoList';
import { ProfileProtectedRoute } from '../../productedRoute/ProtectedRoute';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

const MyRouter = () => {
    return (
        <Fragment>
            <Row>
                <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                    <SideNav />
                </Col>
                <Col md={7} className="mt-3">
                    <Container id="main-body">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/addphoto" component={AddPhotoPage} />
                            <Route exact path="/photolist" component={PhotoList} />
                            <Route exact path="/bestphotolist" component={BestPhotoList} />
                            <Route exact path="/chat" component={Chat} />
                            <Route exact path="/editsuccess" component={EditSuccess} />
                            <ProfileProtectedRoute exact path="/user/:userName/profile" component={Profile} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Container>
                </Col>
            </Row>
            <ChatButton />
        </Fragment>
    );
};

export default MyRouter;
