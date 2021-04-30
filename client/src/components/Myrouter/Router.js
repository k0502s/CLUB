import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppNavbar from '../Nav/AppNavbar';
import ProfileEdit from '../Profile/Section/ProfileEdit';
import Profile from '../Profile/Profile';
import ChatButton from '../Chat/Section/ChatButton';
import LandingPage from '../Main/LandingPage/LandingPage';
import EditSuccess from '../Profile/Section/EditSuccess';
import AddPhotoPage from '../Main/AddPhotoPage/AddPhotoPage';
import AddPostPage from '../Main/AddPostPage/AddPostPage';
import PhotoList_1 from '../Main/PhotoListPage/PhotoList_1';
import PhotoList_2 from '../Main/PhotoListPage/PhotoList_2';
import PhotoList_3 from '../Main/PhotoListPage/PhotoList_3';
import PhotoList_4 from '../Main/PhotoListPage/PhotoList_4';
import BestPhotoList from '../Main/PhotoListPage/BestPhotoList';
import PostList_1 from '../Main/PostListPage/PostList_1';
import PostList_2 from '../Main/PostListPage/PostList_2';
import DetailPhotoPage from '../Main/DetailPhotoPage/DetailPhotoPage';
import DetailPostPage from '../Main/DetailPostPage/DetailPostPage';
import EditPhotoPage from '../Main/EditPhotoPage/EditPhotoPage';
import EditPostPage from '../Main/EditPostPage/EditPostPage';
import AboutPage from '../Main/AboutPage/AboutPage'
import Auth from './ProtectRouter/ProtectRouter';
import { Switch, Route, Redirect } from 'react-router-dom';

const MyRouter = () => {
    return (
        <Fragment>
            <Header />
            <AppNavbar />
            <div id="main-body">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/addphoto" component={Auth(AddPhotoPage, true)} />
                    <Route exact path="/addpost" component={Auth(AddPostPage, true)} />
                    <Route exact path="/editphoto/:id" component={Auth(EditPhotoPage, true)} />
                    <Route exact path="/editpost/:id" component={Auth(EditPostPage, true)} />
                    <Route exact path="/photolist_1" component={PhotoList_1} />
                    <Route exact path="/photolist_2" component={PhotoList_2} />
                    <Route exact path="/photolist_3" component={PhotoList_3} />
                    <Route exact path="/photolist_4" component={PhotoList_4} />
                    <Route exact path="/bestphotolist" component={BestPhotoList} />
                    <Route exact path="/postlist_1" component={PostList_1} />
                    <Route exact path="/postlist_2" component={PostList_2} />
                    <Route exact path="/photo/:id" component={Auth(DetailPhotoPage, true)} />
                    <Route exact path="/post/:id" component={Auth(DetailPostPage, true)} />
                    <Route exact path="/editsuccess" component={EditSuccess} />
                    <Route exact path="/profile" component={Auth(Profile, true)} />
                    <Route exact path="/user/:userName/profile" component={Auth(ProfileEdit, true)} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
            <ChatButton />
            <Footer />
        </Fragment>
    );
};

export default MyRouter;
