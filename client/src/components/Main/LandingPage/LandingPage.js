import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SideNav from '../../Nav/SideNav';
import PhotoImage from './Section/PhotoImage';
import { Loader } from '../../Loader/Loader';
import MiniList1 from './Section/MiniList_1';
import MiniList2 from './Section/MiniList_2';
import Map from './Section/map/Map';
import { useSelector, useDispatch } from 'react-redux';
import { BESTPHOTO_IMAGES_REQUEST, POSTS_LIST_REQUEST, PHOTO_LIST_REQUEST, USER_LOADING_REQUEST } from '../../../redux/types';
import { Row } from 'reactstrap';
import * as S from './LandingPage.style';
import LocationDisplay from '../../../utils/LocationDisplay';

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
        dispatch({
            type: USER_LOADING_REQUEST,
            payload: localStorage.getItem('token'),
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
            <Row>
                <S.HomeWrap md={{ size: 3, offset: 1 }}>
                    <SideNav />
                    <S.HomeWrap display={'none'} Mdisplay={'block'} Mmargintop={'-10px'}>
                        <PhotoImage />
                    </S.HomeWrap>
                    <S.HomeWrap margintop={'40px'}>
                        <MiniList1 />
                    </S.HomeWrap>
                    <S.HomeWrap margintop={'40px'}>
                        <MiniList2 />
                    </S.HomeWrap>
                </S.HomeWrap>
                <S.HomeWrap md={7} margintop={'20px'}>
                    <S.HomeWrap marginbottom={'20px'} Mdisplay={'none'}>
                        <S.HomeCard>
                            <S.HomeCardheader>
                                <S.TrophyIcon />
                                동호회 인기 갤러리 작품
                                <small>조회수가 높은 작품들을 기준으로 선정하고 있습니다!</small>
                            </S.HomeCardheader>
                            <S.HomeCardbody>
                                <PhotoImage />
                            </S.HomeCardbody>
                            <S.HomeCardfooter>동호회 회원분들이 직접 찍은 사진 작품들입니다. 더 감상을 원하시면 사진을 클릭하세요! </S.HomeCardfooter>
                        </S.HomeCard>
                    </S.HomeWrap>
                    <S.HomeWrap marginbottom={'60px'} Mmarginbottom={'60px'} Mmargintop={'20px'}>
                        <S.HomeCard>
                            <S.HomeCardheader>
                                <S.MapIcon />
                                다음 모임 장소
                                <small>다음 모임을 가질 장소를 지도로 알려드립니다!</small>
                            </S.HomeCardheader>
                            <Map />
                        </S.HomeCard>
                    </S.HomeWrap>
                </S.HomeWrap>
            </Row>
        </>
    );
    const sideBody = <></>;
    return (
        <>
            <Helmet title={`사진 동호회`} />
            {isLoading === true ? Loader : body}
            <LocationDisplay />
        </>
    );
};

export default LandingPage;
