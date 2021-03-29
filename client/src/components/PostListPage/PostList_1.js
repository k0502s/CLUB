import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import SideNav from '../Nav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { POSTS_LIST_REQUEST } from '../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Table } from 'reactstrap';

const PostList_1 = () => {
    const dispatch = useDispatch();
    const [searchTitle, setSearchTitle] = useState([]);

    ////페이지 번호/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const { postdata, totalPages } = useSelector((state) => state.post);
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

        params.category = 1;

        return params;
    };

    const retrieveTutorials = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        dispatch({
            type: POSTS_LIST_REQUEST,
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
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                <SideNav />
            </Col>
            <Helmet title={`가입 인사`} />
            <Col md={7} className="mt-3">
                <Row md={{ size: 5, offset: 1 }} id="topborder">
                    <h5>가입 인사</h5>
                    <h6>새롭게 동호회에 가입하신 신입 화원분들은 여기서 인사해주세요!</h6>
                </Row>

                <Row>
                    <Col>
                        <span style={{ fontWeight: 'bold' }}>HOME</span>
                        <FontAwesomeIcon icon={faArrowRight} /> 커뮤니티 <FontAwesomeIcon icon={faArrowRight} /> <span style={{ fontWeight: 'bolder' }}>가입 인사</span>
                    </Col>

                    <Col md={{ size: 5, offset: 1 }}>
                        <InputGroup className="mb-3">
                            <Input type="text" className="form-control" placeholder="제목 + 내용" value={searchTitle} onChange={onChangeSearchTitle} />
                            <InputGroupAddon>
                                <Button onClick={retrieveTutorials}>Search</Button>
                            </InputGroupAddon>
                            <Link to="/addpost">
                                <Button className="ml-3">글쓰기</Button>
                            </Link>
                        </InputGroup>
                    </Col>
                </Row>

                {/* Cards */}
                <Row>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th style={{ textAlign: 'center' }}>제목</th>
                                <th style={{ textAlign: 'center' }}>글쓴이</th>
                                <th style={{ textAlign: 'center' }}>조회수</th>
                                <th style={{ textAlign: 'center' }}>날짜</th>
                            </tr>
                        </thead>

                        {postdata &&
                            postdata.map((post, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <th scope="row" style={{ width: '10%', fontWeight: 'lighter' }}>
                                            {post.numberId}
                                        </th>

                                        <td style={{ width: '45%', color: 'black', fontWeight: 'bold', fontSize: 'large' }}>
                                            <Link to={`/post/${post._id}`} style={{color:'inherit'}}>{post.title}</Link>
                                        </td>

                                        <td style={{ width: '15%', textAlign: 'center' }}>{post.writerName}</td>
                                        <td style={{ width: '15%', textAlign: 'center' }}>{post.views}</td>
                                        <td style={{ width: '15%', textAlign: 'center' }}>{post.date}</td>
                                    </tr>
                                </tbody>
                            ))}
                    </Table>
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
            </Col>
        </Row>
    );
};

export default PostList_1;
