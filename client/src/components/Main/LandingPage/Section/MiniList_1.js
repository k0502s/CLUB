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
            <S.card margintop={'30px'}>
                <S.cardheader>
                    <p>
                        <S.helloIcon />
                        가입 인사
                        <span>
                            <Link to={'/postlist_1'}>더보기 +</Link>
                        </span>
                    </p>
                    <small>새로 오신 분들 인사해주세요!</small>
                </S.cardheader>
                <Table hover>
                    {postdata &&
                        Postdata.map((post, index) => (
                            <tbody key={index}>
                                <S.tr>
                                    <S.td width={'5%'}>●</S.td>
                                    <S.td width={'70%'} color={'black'}>
                                        <Link to={`/post/${post._id}`} style={{ color: 'inherit' }} data-testid="post-detail">
                                            {post.title} <span data-testid="post-comments">[{post.comments.length}]</span> <span>{post.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        </Link>
                                    </S.td>
                                    <S.td width={'30%'} text={'center'} color={'gray'} data-testid="post-date">
                                        <small>{post.date.substring(0, 10)}</small>
                                    </S.td>
                                </S.tr>
                            </tbody>
                        ))}
                </Table>
            </S.card>
        </>
    );
};

export default MiniList;
