import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsImageFill } from 'react-icons/bs';
import * as S from '../LandingPage.style';
import { Card, Table, CardBody, CardHeader } from 'reactstrap';

const MiniList = () => {
    const { postdata } = useSelector((state) => state.post);
    const Postdata = postdata.slice(0, 5);
    return (
        <>
            <S.card margintop={'20px'}>
                <CardHeader>
                    <S.helloIcon />
                    가입 인사
                </CardHeader>
                <Table hover>
                    {postdata &&
                        Postdata.map((post, index) => (
                            <tbody key={index}>
                                <tr>
                                    <S.td width={'50%'} color={'black'}>
                                        <Link to={`/post/${post._id}`} style={{ color: 'inherit' }} data-testid="post-detail">
                                            {post.title}{' '}
                                            <span data-testid="post-comments">
                                                [{post.comments.length}]
                                            </span>{' '}
                                            <span>{post.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        </Link>
                                    </S.td>
                                    <S.td width={'50%'} text={'center'} color={'gray'} data-testid="post-date">
                                        <small>{post.date}</small>
                                    </S.td>
                                </tr>
                            </tbody>
                        ))}
                </Table>
            </S.card>
        </>
    );
};

export default MiniList;
