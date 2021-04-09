import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Form, Input, Label, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import FileUpload from '../../../utils/Fileupload';
import { useDispatch, useSelector } from 'react-redux';
import { PHOTO_UPLOADING_REQUEST } from '../../../redux/types';

const Genres = [
    { key: 1, value: '풍경' },
    { key: 2, value: '인물' },
    { key: 3, value: '접사' },
    { key: 4, value: '습작' },
];

const AddPhotoPage = (props) => {
    const [form, setValues] = useState({
        title: '',
        description: '',
        genres: '',
    });
    const [Images, setImages] = useState([]);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const updateImages = (newImages) => {
        setImages([...Images, newImages]);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const titleinput = document.myform.title.value;
        const descriptioninput = document.myform.description.value;
        const genresinput = document.myform.genres.value;

        if (titleinput === '') {
            return alert('제목 정보를 입력해야 합니다.');
        }
        if (descriptioninput === '') {
            return alert('설명 정보를 입력해야 합니다.');
        }
        if (genresinput === '') {
            return alert('장르 정보를 입력해야 합니다.');
        }
        if (Images.length === 0) {
            return alert('사진을 입력해야 합니다.');
        }

        const { title, description, genres } = form;

        const body = {
            writer: user._id,
            title: title,
            description: description,
            images: Images,
            genres: genres,
        };
        dispatch({
            type: PHOTO_UPLOADING_REQUEST,
            payload: body,
        });
    };

    const removefile = () => {
        setImages([]);
    };

    return (
        <Col md={{ size: 6, offset: 3 }} className="mt-4">
            <Helmet title={'포토 추가'} />
            <Card style={{ borderRadius: '25px', marginBottom: '20px' }}>
                <CardHeader>
                    <strong>포토 추가하기</strong>
                </CardHeader>
                <Card body>
                    <CardTitle tag="h5">※ 이미지 파일 업로드 참고 사항</CardTitle>
                    <CardText>1. 이미지 파일 사이즈는 100 * 1024 * 1024의 제한을 두고 있습니다.</CardText>
                    <CardText>2. 추가로 한 장 이상의 이미지 파일을 업로드 할 수 있습니다.</CardText>
                    <CardText>
                        <FileUpload refreshFunction={updateImages} removefile={removefile} />
                    </CardText>
                </Card>
                <CardBody>
                    <Col md={{ offset: 4 }} style={{ display: 'flex', width: '350px', height: '240px', overflow: 'scroll' }}>
                        {Images.map((image, index) => (
                            <img key={index} style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`${image}`} />
                        ))}
                    </Col>
                    <Form onSubmit={submitHandler} name="myform">
                        <Label for="title">제목</Label>
                        <Input type="text" name="title" onChange={onChange} value={form.title} data-testid='add-title'/>
                        <br />
                        <Label for="content">설명</Label>
                        <Input type="textarea" name="description" onChange={onChange} value={form.description} data-testid='add-description'/>
                        <br />
                        <Label for="genres">장르</Label>
                        <Input type="select" name="genres" onChange={onChange} value={form.genre}>
                            <option value="">장르를 선택해주세요</option>
                            {Genres.map((item) => (
                                <option key={item.key} value={item.key} data-testid="select-option">
                                    {item.value}
                                </option>
                            ))}
                        </Input>
                        <Button className="col-md-2 offset-md-10 mt-5" onClick={submitHandler} data-testid='add-submit'>
                            확인
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
};

export default AddPhotoPage;
