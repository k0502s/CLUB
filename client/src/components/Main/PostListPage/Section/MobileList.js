import React from 'react';
import * as S from '../PostList.style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsImageFill } from 'react-icons/bs';
import { Row, Col, Table } from 'reactstrap';

const MobileList = () => {
    const { postdata } = useSelector((state) => state.post);

    return (
        <>
            <Table hover>
                <S.thead>
                    <tr>
                        <S.th>번호</S.th>
                        <S.th align={'center'}>목록</S.th>
                    </tr>
                </S.thead>
                {postdata &&
                    postdata.map((post, index) => (
                        <tbody key={index}>
                            <tr>
                                <S.th scope="row" width={'5%'} weight={'lighter'} data-testid="post-number">
                                    {post.numberId}
                                </S.th>

                                <S.td width={'35%'} color={'black'} weight={'bold'} size={'large'}>
                                    <Link to={`/post/${post._id}`} style={{ color: 'inherit' }} data-testid="post-detail">
                                        {post.title}{' '}
                                        <span style={{ fontWeight: 'lighter' }} data-testid="post-comments">
                                            [{post.comments.length}]
                                        </span>{' '}
                                        <span>{post.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        <S.listwrap>
                                            <div>
                                                <span>Date</span> {post.date.substring(0, 10)} | <span>By</span> {post.writerName}
                                            </div>
                                            <div>
                                                <span>views</span> {post.views}
                                            </div>
                                        </S.listwrap>
                                    </Link>
                                </S.td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
        </>
    );
};

export default MobileList;
