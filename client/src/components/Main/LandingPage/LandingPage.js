import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SideNav from '../../Nav/SideNav';
import PhotoImage from './Section/PhotoImage';
import { GrowingSpinner } from '../../Loader/Loader';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faMouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BESTPHOTO_IMAGES_REQUEST } from '../../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, CardHeader, CardFooter } from 'reactstrap';

const LandingPage = () => {
    const { isLoading } = useSelector((state) => state.photo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: BESTPHOTO_IMAGES_REQUEST,
        });
    }, [dispatch]);
    const body = (
        <>
            {/* <Col style={{ textAlign: 'center', fontSize: '30px' }}>인기 갤러리</Col> */}
            <Col>
            <Card style={{ borderRadius: '20px', marginBottom: '20px'}}>
                <CardHeader>
                  동호회 인기 갤러리 작품
                </CardHeader>
               <PhotoImage />
               <CardFooter style={{ textAlign: 'center', color: 'gray'}}>동호회 회원분들이 직접 찍은 사진 작품들입니다!</CardFooter>
                </Card>
            </Col>
        </>
    );
    return (
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                <SideNav />
            </Col>
            <Helmet title={`HOME`} />
            <Col md={7} className="mt-4">
                {isLoading === true ? GrowingSpinner : body}
            </Col>
        </Row>
    );
};

export default LandingPage;
