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

const DetailPhotoPage = (props) => {
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
        getPhotoDate(props.match.params.id);
    }, [props.match.params.id]);

    const onDeleteClick = () => {
        dispatch({
            type: PHOTO_DELETE_REQUEST,
            payload: {
                id: props.match.params.id,
                token: localStorage.getItem('token'),
                genres: detailphoto.genres,
            },
        });
    };

    const Body = (
        <>
            <Row>
                <Col md={{ size: 10, offset: 1 }} className="mt-3">
                    <S.col>
                        <Helmet title={`Photo | ${detailphoto.title}`} />
                        <S.topborder md={{ size: 5, offset: 1 }}>
                            <h5>{detailphoto.title}</h5>
                            <Link to={`/photolist_${detailphoto.genres}`}>
                                <S.button color={'#72b29c'}>
                                    <S.listIcon />
                                    목록
                                </S.button>
                            </Link>
                        </S.topborder>
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
                        <S.buttonWarp>
                            {writerId === userId && (
                                <S.button color={'#F05232'} width={'70px'} margin={'0 20px 0 0'} onClick={onDeleteClick}>
                                    삭제
                                </S.button>
                            )}
                            {writerId === userId && (
                                <Link to={'/editphoto/' + detailphoto._id} data-testid="photo-edit">
                                    <S.button color={'#8bc34a'} width={'70px'}>
                                        수정
                                    </S.button>
                                </Link>
                            )}
                        </S.buttonWarp>
                        <S.imaageWrap>
                            <PhotoImage />
                        </S.imaageWrap>
                        <Row>
                            <LikeDislike photo userId={userId} photoId={props.match.params.id} />
                        </Row>
                        <S.infoWrap>
                            <PhotoInfo id={props.match.params.id} />
                        </S.infoWrap>
                    </S.col>
                </Col>
                <LocationDisplay />
            </Row>
        </>
    );

    return <>{isLoading === true ? Loader : Body}</>;
};

export default DetailPhotoPage;
