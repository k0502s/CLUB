import React from 'react';
import { Table, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

const PhotoInfo = (props) => {
    const { detailphoto, writerName } = useSelector((state) => state.photo);

    return (
        <Col>
            <Row>
                <Table dark>
                    <thead>
                        <tr>
                            <th>작가명</th>
                            <th>작품명</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{writerName}</td>
                            <td>{detailphoto.title}</td>
                            <td>{detailphoto.views}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Table dark>
                    <thead>
                        <tr>
                            <th>작품 설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{detailphoto.description}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Col>
    );
};

export default PhotoInfo;
