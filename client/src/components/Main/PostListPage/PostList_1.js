import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import SideNav from '../../Nav/SideNav';
import MobileList from './Section/MobileList';
import { Loader } from '../../Loader/Loader';
import photographerImg from '../../../assets/img/사진작가1.png';
import LocationDisplay from '../../../utils/LocationDisplay';
import { BsChevronRight, BsImageFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { POSTS_LIST_REQUEST } from '../../../redux/types';
import { Row, Col, InputGroupAddon, Input, Label, Table } from 'reactstrap';
import * as S from './PostList.style';

const PostList_1 = () => {
    const dispatch = useDispatch();
    const [searchTitle, setSearchTitle] = useState([]);

    ////페이지 번호/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const { postdata, totalPages, isLoading } = useSelector((state) => state.post);
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

    const retrieve = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        dispatch({
            type: POSTS_LIST_REQUEST,
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
                <Col md={{ size: 3, offset: 1 }}>
                    <SideNav />
                    <S.Img src={photographerImg} />
                </Col>
                <Helmet title={`가입 인사`} />
                <Col md={{ size: 7 }}>
                    <S.Topborder md={{ size: 5, offset: 1 }}>
                        <h5>가입 인사</h5>
                        <h6>새롭게 동호회에 가입하신 신입 화원분들은 여기서 인사해주세요!</h6>
                    </S.Topborder>

                    <S.PostWrap>
                        <Col>
                            <strong>HOME </strong>
                            <BsChevronRight />
                            커뮤니티
                            <BsChevronRight />
                            <strong>가입 인사</strong>
                        </Col>

                        <Col md={{ size: 5, offset: 1 }}>
                            <S.PostInputGroup>
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
                                <S.Btn margin={'12px'} color={'#72b29c'}>
                                    <Link to="/addpost" data-testid="post-add">
                                        글쓰기
                                    </Link>
                                </S.Btn>
                            </S.PostInputGroup>
                        </Col>
                    </S.PostWrap>
                    <Col>
                        <S.Ddevice>
                            <Table hover>
                                <S.Thead>
                                    <tr>
                                        <S.Th>번호</S.Th>
                                        <S.Th align={'center'}>제목</S.Th>
                                        <S.Th align={'center'}>글쓴이</S.Th>
                                        <S.Th align={'center'}>조회수</S.Th>
                                        <S.Th align={'center'}>날짜</S.Th>
                                    </tr>
                                </S.Thead>
                                {postdata &&
                                    postdata.map((post, index) => (
                                        <tbody key={index}>
                                            <tr>
                                                <S.Th scope="row" width={'7%'} weight={'lighter'} data-testid="post-number">
                                                    {post.numberId}
                                                </S.Th>

                                                <S.Td width={'33%'} color={'black'} weight={'bold'} size={'large'}>
                                                    <Link to={`/post/${post._id}`} style={{ color: 'black' }} data-testid="post-detail">
                                                        {post.title}{' '}
                                                        <span weight={'lighter'} data-testid="post-comments">
                                                            [{post.comments.length}]
                                                        </span>{' '}
                                                        <span>{post.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                                    </Link>
                                                </S.Td>

                                                <S.Td width={'20%'} align={'center'} data-testid="post-name">
                                                    {post.writerName}
                                                </S.Td>
                                                <S.Td width={'15%'} align={'center'} data-testid="post-views">
                                                    {post.views}
                                                </S.Td>
                                                <S.Td width={'25%'} align={'center'} data-testid="post-date">
                                                    {post.date}
                                                </S.Td>
                                            </tr>
                                        </tbody>
                                    ))}
                            </Table>
                        </S.Ddevice>
                        <S.Mdevice>
                            <MobileList />
                        </S.Mdevice>
                    </Col>
                    <S.BottomLine></S.BottomLine>
                    <Col md={{ offset: 10 }} className="mt-3">
                        <Label className="p-2">Page</Label>
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
                <LocationDisplay />
            </Row>
        </>
    );

    return <>{isLoading === true ? Loader : Body}</>;
};

export default PostList_1;
