import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { Loader } from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { PHOTO_LIST_REQUEST } from '../../../redux/types';
import { BsChevronRight, BsFillEyeFill } from 'react-icons/bs';
import { CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, InputGroupAddon, Input, Label } from 'reactstrap';
import * as S from './PhotoList.style';

const PhotoList_3 = () => {
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

        params.genres = 3;

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
                <Helmet title={`접사 갤러리`} />
                <Col md={{ size: 10, offset: 1 }}>
                    <S.Topborder md={{ size: 5, offset: 1 }}>
                        <h5>접사 갤러리</h5>
                        <h6>접사 사진을 올리는 갤러리입니다!</h6>
                    </S.Topborder>
                    <S.PhotoWrap>
                        <Col>
                            <strong>HOME </strong>
                            <BsChevronRight />
                            포토 갤러리
                            <BsChevronRight /> <strong>접사 갤러리</strong>
                        </Col>

                        <Col md={{ size: 5, offset: 1 }}>
                            <S.PhotoInputGroup>
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
                                    <S.Btn color={'#333'} onClick={retrieve} data-testid="search-btn">
                                        검색
                                    </S.Btn>
                                </InputGroupAddon>
                                <Link to="/addphoto" data-testid="photo-add">
                                    <S.Btn margin={'12px'} color={'#72b29c'}>
                                        포토 올리기
                                    </S.Btn>
                                </Link>
                            </S.PhotoInputGroup>
                        </Col>
                    </S.PhotoWrap>
                    <Row>
                        {photodata &&
                            photodata.map((photo, index) => (
                                <Col md={{ size: 4 }} key={index}>
                                    <Link to={`/photo/${photo._id}`}>
                                        <S.PhotoCard inverse>
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
                                        </S.PhotoCard>
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                    <S.BottomLine></S.BottomLine>
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
                    <Col md={{ offset: 5 }} xs={{ offset: 4 }} className="mt-3 mb-5 pl-2">
                        <Pagination variant="outlined" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
                    </Col>
                </Col>
            </Row>
        </>
    );

    return <>{isLoading === true ? Loader : Body}</>;
};

export default PhotoList_3;
