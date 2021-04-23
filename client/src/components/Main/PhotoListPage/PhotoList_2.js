import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import SideNav from '../../Nav/SideNav';
import { Loader } from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { PHOTO_LIST_REQUEST } from '../../../redux/types';
import * as S from './PhotoList.style';
import { BsChevronRight, BsFillEyeFill } from 'react-icons/bs';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';

const PhotoList_2 = () => {
    const dispatch = useDispatch();
    const [searchTitle, setSearchTitle] = useState([]);

    ////페이지 번호/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const { photodata, totalPages, isLoading } = useSelector((state) => state.photo);
    const pageSizes = [9, 15];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params.title = searchTitle;
        }

        if (page) {
            params.page = page - 1;
        }

        if (pageSize) {
            params.size = pageSize;
        }

        params.genres = 2;

        return params;
    };

    const retrieve = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        dispatch({
            type: PHOTO_LIST_REQUEST,
            payload: { params },
        });
    };

    useEffect(retrieve, [page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const Enter = (e) => {
        if (e.key === 'Enter') {
            retrieve(e);
        }
    };
    const Body = (
        <>
            <Row>
                <Helmet title={`인물 갤러리`} />
                <Col md={{ size: 10, offset: 1 }} className="mt-3">
                    <S.topborder md={{ size: 5, offset: 1 }}>
                        <h5>인물 갤러리</h5>
                        <h6>인물, 모델 사진을 올리는 갤러리입니다!</h6>
                    </S.topborder>
                    <S.warp>
                        <Col>
                            <strong>HOME </strong>
                            <BsChevronRight />
                            포토 갤러리
                            <BsChevronRight /> <strong>인물 갤러리</strong>
                        </Col>

                        <Col md={{ size: 5, offset: 1 }}>
                            <S.inputGroup>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="제목을 입력해주세요..."
                                    value={searchTitle}
                                    onKeyPress={Enter}
                                    onChange={onChangeSearchTitle}
                                    data-testid="input-search"
                                />
                                <InputGroupAddon>
                                    <S.button color={'#333'} onClick={retrieve} data-testid="search-btn">
                                        검색
                                    </S.button>
                                </InputGroupAddon>
                                <Link to="/addphoto" data-testid="photo-add">
                                    <S.button margin={'12px'} color={'#72b29c'}>
                                        포토 올리기
                                    </S.button>
                                </Link>
                            </S.inputGroup>
                        </Col>
                    </S.warp>
                    <Row>
                        {photodata &&
                            photodata.map((photo, index) => (
                                <Col md={{ size: 4 }} key={index}>
                                    <Link to={`/photo/${photo._id}`}>
                                        <S.card inverse>
                                            <CardImg width="100%" src={photo.images[0]} alt="Card image cap" id="photoimg" />
                                            <CardImgOverlay>
                                                <CardTitle tag="h5">{photo.title}</CardTitle>
                                                <CardText>{photo.description}</CardText>
                                                <CardText>
                                                    <BsFillEyeFill />
                                                    &nbsp;{photo.views}
                                                </CardText>
                                                <CardText>
                                                    <small>{photo.date}</small>
                                                </CardText>
                                            </CardImgOverlay>
                                        </S.card>
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                    <S.col></S.col>
                    <Col md={{ offset: 10 }} className="mt-3">
                        <Label>Page</Label>
                        <Input type="select" name="page" onChange={handlePageSizeChange} value={pageSize}>
                            {pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </Input>
                    </Col>
                    <Col md={{ offset: 5 }} xs={{ offset: 4 }} className="mt-3 mb-5">
                        <Pagination variant="outlined" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
                    </Col>
                </Col>
            </Row>
        </>
    );

    return <>{isLoading === true ? Loader : Body}</>;
};

export default PhotoList_2;
