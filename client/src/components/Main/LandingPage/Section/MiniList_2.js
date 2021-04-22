import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsImageFill } from 'react-icons/bs';
import * as S from '../LandingPage.style';
import { Card, Table, CardBody, CardHeader } from 'reactstrap';

const MiniList_2 = () => {
    const { photodata } = useSelector((state) => state.photo);
    const Photodata = photodata.slice(0, 5);
    return (
        <>
            <S.card margintop={'40px'} marginbottom={'20px'}>
            <S.cardheader>
                    <p>
                    <S.photoIcon />
                        최신 포토
                        <span><Link to={'/bestphotolist'}>더보기 +</Link></span>
                    </p>
                    <small>회원분들의 사진 작품들응 감상해보세요!</small>
                </S.cardheader>
                <Table hover>
                    {photodata &&
                        Photodata.map((photo, index) => (
                            <tbody key={index}>
                                <S.tr>
                                    <S.td width={'70%'} color={'black'}>
                                        <Link to={`/photo/${photo._id}`} style={{ color: 'inherit' }} data-testid="photo-detail">
                                            {photo.title} <span>{photo.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        </Link>
                                    </S.td>
                                    <S.td width={'30%'} text={'center'} color={'gray'} data-testid="photo-date">
                                        <small>{photo.date.substring(0, 10)}</small>
                                    </S.td>
                                </S.tr>
                            </tbody>
                        ))}
                </Table>
            </S.card>
        </>
    );
};

export default MiniList_2;
