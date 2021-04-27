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
                <S.Thead>
                    <tr>
                        <S.Th>번호</S.Th>
                        <S.Th align={'center'}>목록</S.Th>
                    </tr>
                </S.Thead>
                {postdata &&
                    postdata.map((post, index) => (
                        <tbody key={index}>
                            <tr>
                                <S.Th scope="row" width={'5%'} weight={'lighter'} data-testid="post-number">
                                    {post.numberId}
                                </S.Th>

                                <S.Td width={'35%'} color={'black'} weight={'bold'} size={'large'}>
                                    <Link to={`/post/${post._id}`} style={{ color: 'inherit' }} data-testid="post-detail">
                                        {post.title}{' '}
                                        <span style={{ fontWeight: 'lighter' }} data-testid="post-comments">
                                            [{post.comments.length}]
                                        </span>{' '}
                                        <span>{post.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        <S.ListWrap>
                                            <div>
                                                <span>Date</span> {post.date.substring(0, 10)} | <span>By</span> {post.writerName}
                                            </div>
                                            <div>
                                                <span>views</span> {post.views}
                                            </div>
                                        </S.ListWrap>
                                    </Link>
                                </S.Td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
        </>
    );
};

export default MobileList;
