import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SideNav from '../../Nav/SideNav';
import PhotoImage from './Section/PhotoImage';
import { GrowingSpinner } from '../../Loader/Loader';
import MiniList1 from './Section/MiniList_1';
import MiniList2 from './Section/MiniList_2';
import * as S from './LandingPage.style';
import { useSelector, useDispatch } from 'react-redux';
import { BESTPHOTO_IMAGES_REQUEST, POSTS_LIST_REQUEST, PHOTO_LIST_REQUEST } from '../../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, CardHeader, CardFooter } from 'reactstrap';

const LandingPage = () => {
    const { isLoading } = useSelector((state) => state.photo);
    const dispatch = useDispatch();
    const getRequestParams = (cty) => {
        let params = {};

        params.page = 0;

        params.size = 9;

        params.category = cty;

        return params;
    };
    useEffect(() => {
        const params = getRequestParams(1);
        dispatch({
            type: BESTPHOTO_IMAGES_REQUEST,
        });
        dispatch({
            type: POSTS_LIST_REQUEST,
            payload: { params },
        });
    }, []);
    useEffect(() => {
        const params = getRequestParams();
        dispatch({
            type: PHOTO_LIST_REQUEST,
            payload: { params },
        });
    }, []);

    const body = (
        <>
            <Col>
                <S.card marginbottom={'20px'}>
                    <CardHeader>
                        <S.trophyIcon />
                        동호회 인기 갤러리 작품
                    </CardHeader>
                    <PhotoImage />
                    <S.cardfooter>동호회 회원분들이 직접 찍은 사진 작품들입니다!</S.cardfooter>
                </S.card>
            </Col>
            <Row>
                <Col>
                    <MiniList1 />
                </Col>
            </Row>
        </>
    );
    const sideBody = (
        <>
            <Col>
                <MiniList1 />
            </Col>
            <Col>
                <MiniList2 />
            </Col>
        </>
    );
    return (
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                <SideNav />
                {isLoading === true ? '' : sideBody}
            </Col>
            <Helmet title={`HOME`} />
            <Col md={7} className="mt-4">
                {isLoading === true ? GrowingSpinner : body}
            </Col>
        </Row>
    );
};

export default LandingPage;
