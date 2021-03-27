import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppNavbar from '../Nav/AppNavbar';
import SideNav from '../Nav/SideNav';
import Profile from '../Profile/Profile';
import Chat from '../Chat/Chat';
import ChatButton from '../Chat/Section/ChatButton';
import LandingPage from '../LandingPage/LandingPage';
import EditSuccess from '../Profile/Section/EditSuccess';
import AddPhotoPage from '../AddPhotoPage/AddPhotoPage';
import AddPostPage from '../AddPostPage/AddPostPage';
import PhotoList_1 from '../PhotoListPage/PhotoList_1';
import PhotoList_2 from '../PhotoListPage/PhotoList_2';
import PhotoList_3 from '../PhotoListPage/PhotoList_3';
import PhotoList_4 from '../PhotoListPage/PhotoList_4';
import BestPhotoList from '../PhotoListPage/BestPhotoList';
import PostList_1 from '../PostListPage/PostList_1';
import PostList_2 from '../PostListPage/PostList_2';
import DetailPhotoPage from '../DetailPhotoPage/DetailPage';
import DetailPostPage from '../DetailPostPage/DetailPostPage';
import EditPhotoPage from '../EditPhotoPage/EditPhotoPage';
import EditPostPage from '../EditPostPage/EditPostPage';
import { ProfileProtectedRoute } from '../../productedRoute/ProtectedRoute';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

const MyRouter = () => {
    return (
        <Fragment>
            <Header />
            <AppNavbar />
                    <div id="main-body">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/addphoto" component={AddPhotoPage} />
                            <Route exact path="/addpost" component={AddPostPage} />
                            <Route exact path="/editphoto/:id" component={EditPhotoPage} />
                            <Route exact path="/editpost/:id" component={EditPostPage} />
                            <Route exact path="/photolist_1" component={PhotoList_1} />
                            <Route exact path="/photolist_2" component={PhotoList_2} />
                            <Route exact path="/photolist_3" component={PhotoList_3} />
                            <Route exact path="/photolist_4" component={PhotoList_4} />
                            <Route exact path="/bestphotolist" component={BestPhotoList} />
                            <Route exact path="/postlist_1" component={PostList_1} />
                            <Route exact path="/postlist_2" component={PostList_2} />
                            <Route exact path="/photo/:id" component={DetailPhotoPage} />
                            <Route exact path="/post/:id" component={DetailPostPage} />
                            <Route exact path="/chat" component={Chat} />
                            <Route exact path="/editsuccess" component={EditSuccess} />
                            <ProfileProtectedRoute exact path="/user/:userName/profile" component={Profile} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
            <ChatButton />
            <Footer />
        </Fragment>
    );
};

export default MyRouter;
