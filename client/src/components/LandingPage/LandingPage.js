import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SideNav from '../Nav/SideNav';
import PhotoImage from './Section/PhotoImage'
import { GrowingSpinner } from '../spinner/Spinner'
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BESTPHOTO_IMAGES_REQUEST } from '../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';

const LandingPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: BESTPHOTO_IMAGES_REQUEST,
        });
    }, [dispatch]);


    return (
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                    <SideNav />
                </Col>
            <Helmet title={`HOME`} />
            <Col md={7} className="mt-4">
            <PhotoImage />
            {/* {loading === true ? GrowingSpinner : <div>홈</div>} */}
            </Col>
        </Row>
    );
};

export default LandingPage;
