import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import * as S from '../DetailPhotoPage.style';

const PhotoInfo = () => {
    const { detailphoto, writerName } = useSelector((state) => state.photo);

    return (
        <Col>
            <Row>
                <S.table>
                    <thead>
                        <tr>
                            <th>작품 제목</th>
                            <th>작품 설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-testid="info-title">{detailphoto.title}</td>
                            <td data-testid="info-description">{detailphoto.description}</td>
                        </tr>
                    </tbody>
                </S.table>
            </Row>
            <Row>
                <S.table>
                    <thead>
                        <tr>
                            <th>사진가</th>
                            <th>카메라</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-testid="info-name">{writerName}</td>
                            <td data-testid="info-camera">{detailphoto.camera}</td>
                            <td data-testid="info-views">{detailphoto.views}</td>
                        </tr>
                    </tbody>
                </S.table>
            </Row>
        </Col>
    );
};

export default PhotoInfo;
