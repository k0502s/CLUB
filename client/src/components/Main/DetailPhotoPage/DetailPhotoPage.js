import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PhotoInfo from './Section/PhotoInfo';
import PhotoImage from './Section/PhotoImage';
import LikeDislike from './Section/LikeDislike';
import { Loader } from '../../Loader/Loader';
import LocationDisplay from '../../../utils/LocationDisplay';
import { Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PHOTO_DELETE_REQUEST, PHOTO_DERAIL_REQUEST } from '../../../redux/types';
import { BsPen, BsFillEyeFill, BsPersonFill } from 'react-icons/bs';
import * as S from './DetailPhotoPage.style';

const DetailPhotoPage = ({ match }) => {
    const dispatch = useDispatch();
    const { detailphoto, writerId, writerName, isLoading } = useSelector((state) => state.photo);
    const { userId } = useSelector((state) => state.auth);

    const getPhotoDate = (id) => {
        dispatch({
            type: PHOTO_DERAIL_REQUEST,
            payload: id,
        });
    };

    useEffect(() => {
        getPhotoDate(match.params.id);
    }, [match.params.id]);

    const onDeleteClick = () => {
        dispatch({
            type: PHOTO_DELETE_REQUEST,
            payload: {
                id: match.params.id,
                token: localStorage.getItem('token'),
                genres: detailphoto.genres,
            },
        });
    };

    const Body = (
        <>
            <Row>
                <Col md={{ size: 10, offset: 1 }}>
                    <S.DetailWrap>
                        <Helmet title={`Photo | ${detailphoto.title}`} />
                        <S.Topborder md={{ size: 5, offset: 1 }}>
                            <h5>{detailphoto.title}</h5>
                            <Link to={`/photolist_${detailphoto.genres}`}>
                                <S.Btn color={'#72b29c'}>
                                    <S.ListIcon />
                                    목록
                                </S.Btn>
                            </Link>
                        </S.Topborder>
                        <Row>
                            <Col>
                                <BsPersonFill />
                                &nbsp;
                                <span>{writerName}</span>
                                &nbsp;&nbsp;&nbsp;
                                <BsPen />
                                &nbsp;
                                <span data-testid="span-date">{detailphoto.date}</span>
                                &nbsp;&nbsp;&nbsp;
                                <BsFillEyeFill />
                                &nbsp;
                                <span data-testid="span-views">{detailphoto.views}</span>
                            </Col>
                        </Row>
                        <S.BtnWrap>
                            {writerId === userId && (
                                <S.Btn color={'#F05232'} width={'70px'} margin={'0 20px 0 0'} onClick={onDeleteClick}>
                                    삭제
                                </S.Btn>
                            )}
                            {writerId === userId && (
                                <Link to={'/editphoto/' + detailphoto._id} data-testid="photo-edit">
                                    <S.Btn color={'#8bc34a'} width={'70px'}>
                                        수정
                                    </S.Btn>
                                </Link>
                            )}
                        </S.BtnWrap>
                        <S.ImageWrap>
                            <PhotoImage />
                        </S.ImageWrap>
                        <Row>
                            <LikeDislike photo userId={userId} photoId={match.params.id} />
                        </Row>
                        <S.InfoWrap>
                            <PhotoInfo id={match.params.id} />
                        </S.InfoWrap>
                    </S.DetailWrap>
                </Col>
                <LocationDisplay />
            </Row>
        </>
    );

    return <>{isLoading === true ? Loader : Body}</>;
};

export default DetailPhotoPage;
