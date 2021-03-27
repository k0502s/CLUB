import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PhotoInfo from './Section/PhotoInfo';
import PhotoImage from './Section/PhotoImage';
import LikeDislike from './Section/LikeDislike';
import { Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PHOTO_DELETE_REQUEST, PHOTO_DERAIL_REQUEST } from '../../redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCommentDots, faMouse } from '@fortawesome/free-solid-svg-icons';
import * as S from './DetailPhotoPage';

const DetailPhotoPage = (props) => {
    const dispatch = useDispatch();
    const { detailphoto, writerId } = useSelector((state) => state.photo);
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

    return (
        <S.Grid>
            <Helmet title={`Photo | ${detailphoto.title}`} />
            <Row md={{ size: 5, offset: 1 }} id="topborder">
                <h5>포토 상세 보기</h5>
            </Row>

            <Row>
                <Col>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    &nbsp;
                    <span>{detailphoto.date}</span>
                    &nbsp;&nbsp;
                    {/* <FontAwesomeIcon icon={faCommentDots}/>
                  &nbsp;
                  <span>{detailphoto.comments.length}</span> */}
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faMouse} />
                    &nbsp;
                    <span>{detailphoto.views}</span>
                </Col>
            </Row>
            <Row>
                <Col md={{ offset: 10 }}>
                    {writerId === userId && (
                        <Button className="btn-danger" onClick={onDeleteClick}>
                            삭제
                        </Button>
                    )}
                </Col>
                <Col>
                    {writerId === userId && (
                        <Link to={'/editphoto/' + detailphoto._id}>
                            <Button className="btn-danger">편집</Button>
                        </Link>
                    )}
                </Col>
            </Row>

            <Row className="mt-3">
                <PhotoImage />
            </Row>
            <Row>
            <LikeDislike photo userId={userId} photoId={props.match.params.id}/>
            </Row>

            <Row className="mt-5 mb-5">
                <PhotoInfo id={props.match.params.id} />
            </Row>
        </S.Grid>
    );
};

export default DetailPhotoPage;
