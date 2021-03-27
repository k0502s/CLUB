import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BESTPHOTO_LIST_REQUEST } from '../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';

const BestPhotoList = () => {
    const dispatch = useDispatch();
    const [searchTitle, setSearchTitle] = useState([]);

    ////페이지 번호/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const { bestphotodata, totalPages } = useSelector((state) => state.photo);
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

        return params;
    };

    const retrieveTutorials = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        dispatch({
            type: BESTPHOTO_LIST_REQUEST,
            payload: { params },
        });
    };

    useEffect(retrieveTutorials, [page, pageSize]);

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

    return (
        <Fragment>
            <Helmet title={`인기 갤러리`} />
            <Row md={{ size: 5, offset: 1 }} id="topborder">
                <h5>인기 갤러리</h5>
                <h6>카테고리 장르 갤러리에 등록된 모든 사진 중 조회수가 10 이상인 작품을 전시하는 곳입니다!</h6>
            </Row>

            <Row>
                <Col>
                    <span style={{ fontWeight: 'bold' }}>HOME</span>
                    <FontAwesomeIcon icon={faArrowRight} /> 포토 갤러리 <FontAwesomeIcon icon={faArrowRight} /> <span style={{ fontWeight: 'bolder' }}>베스트 갤러리</span>
                </Col>

                <Col md={{ size: 5, offset: 1 }}>
                    <InputGroup className="mb-3">
                        <Input type="text" className="form-control" placeholder="제목 + 내용" value={searchTitle} onChange={onChangeSearchTitle} />
                        <InputGroupAddon>
                            <Button onClick={retrieveTutorials}>Search</Button>
                        </InputGroupAddon>
                        <Link to="/addphoto">
                            <Button className="ml-3">포토 올리기</Button>
                        </Link>
                    </InputGroup>
                </Col>
            </Row>

            {/* Cards */}
            <Row>
                {bestphotodata &&
                    bestphotodata.map((photo, index) => (
                        <Col md={{ size: 4 }} className="mb-3 mt-3" key={index}>
                            <Link to={`/photo/${photo._id}`}>
                                <Card inverse>
                                    <CardImg width="100%" src={photo.images[0]} alt="Card image cap" id="photoimg" />
                                    <CardImgOverlay>
                                        <CardTitle tag="h5">{photo.title}</CardTitle>
                                        <CardText>{photo.description}</CardText>
                                        <CardText>
                                            {' '}
                                            <FontAwesomeIcon icon={faMouse} />
                                            &nbsp;{photo.views}
                                        </CardText>
                                        <CardText>
                                            <small className="text-muted">{photo.date}</small>
                                        </CardText>
                                    </CardImgOverlay>
                                </Card>
                            </Link>
                        </Col>
                    ))}
            </Row>
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
            <Col md={{ offset: 5 }} xs={{ offset: 4 }}>
                <Pagination className="my-5" color="primary" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
            </Col>
        </Fragment>
    );
};

export default BestPhotoList;
