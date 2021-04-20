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
            <S.card margintop={'20px'} marginbottom={'20px'}>
                <CardHeader>
                    <S.photoIcon />
                    최신 포토
                </CardHeader>
                <Table hover>
                    {photodata &&
                        Photodata.map((photo, index) => (
                            <tbody key={index}>
                                <tr>
                                    <S.td width={'50%'} color={'black'}>
                                        <Link to={`/photo/${photo._id}`} style={{ color: 'inherit' }} data-testid="photo-detail">
                                            {photo.title} <span>{photo.fileUrl != '' ? <BsImageFill /> : ''}</span>
                                        </Link>
                                    </S.td>
                                    <S.td width={'50%'} text={'center'} color={'gray'} data-testid="photo-date">
                                        <small>{photo.date}</small>
                                    </S.td>
                                </tr>
                            </tbody>
                        ))}
                </Table>
            </S.card>
        </>
    );
};

export default MiniList_2;