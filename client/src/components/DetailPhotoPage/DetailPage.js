import React, { useEffect, useState } from 'react';
import PhotoInfo from './Section/PhotoInfo';
import PhotoImage from './Section/PhotoImage';
import { Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PHOTO_DELETE_REQUEST, PHOTO_DERAIL_REQUEST } from '../../redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCommentDots, faMouse } from '@fortawesome/free-solid-svg-icons';

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
            },
        });
    };

    return (
        <Col className="mt-3">
            <Row md={{ size: 5, offset: 1 }} id="topborder">
                <h5>포토 상세 보기</h5>
                {writerId === userId && (
                    <Button className="btn-danger" onClick={onDeleteClick}>
                        삭제
                    </Button>
                )}
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

            <Row className="mt-3">
                <PhotoImage />
            </Row>

            <Row className="mt-5 mb-5">
                <PhotoInfo id={props.match.params.id} />
            </Row>
        </Col>
    );
};

export default DetailPhotoPage;
