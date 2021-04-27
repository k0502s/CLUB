import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Input, Label, Card, CardTitle, CardText, Col, CardHeader, CardBody } from 'reactstrap';
import FileUpload from '../../../utils/Fileupload/Fileupload';
import { useDispatch, useSelector } from 'react-redux';
import { PHOTO_EDIT_LOADING_REQUEST, PHOTO_EDIT_UPLOADING_REQUEST } from '../../../redux/types';
import * as S from './EditPhotoPage.style';

const Genres = [
    { key: 1, value: '풍경' },
    { key: 2, value: '인물' },
    { key: 3, value: '접사' },
    { key: 4, value: '습작' },
];

const AddPhotoPage = (props) => {
    const [Images, setImages] = useState([]);
    const [form, setValues] = useState({
        title: '',
        description: '',
        genres: '',
    });
    const dispatch = useDispatch();

    const { detailphoto, detailimages } = useSelector((state) => state.photo);

    const getPhotoDate = (id) => {
        dispatch({
            type: PHOTO_EDIT_LOADING_REQUEST,
            payload: id,
        });
    };

    useEffect(() => {
        getPhotoDate(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        setValues({
            title: detailphoto.title,
            description: detailphoto.description,
            genres: detailphoto.genres,
        });
        setImages([...detailimages]);
    }, [detailphoto.title, detailphoto.description, detailphoto.genres, detailphoto.images]);

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
            id: props.match.params.id,
            title: title,
            description: description,
            images: Images,
            genres: genres,
        };
        dispatch({
            type: PHOTO_EDIT_UPLOADING_REQUEST,
            payload: body,
        });
    };

    const removefile = () => {
        setImages([]);
    };

    return (
        <Col md={{ size: 6, offset: 3 }}>
            <Helmet title={`포토 수정`} />
            <S.EditCard>
                <CardHeader>
                    <strong>포토 수정하기</strong>
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
                    <S.ProfileWarp md={{ offset: 4 }}>
                        {Images.map((image, index) => (
                            <img key={index} src={`${image}`} data-testid="edit-image" />
                        ))}
                    </S.ProfileWarp>
                    <Form onSubmit={submitHandler} name="myform">
                        <Label>제목</Label>
                        <Input onChange={onChange} defaultValue={detailphoto.title} name="title" data-testid="edit-title" />
                        <br />
                        <Label>설명</Label>
                        <Input onChange={onChange} type="textarea" defaultValue={detailphoto.description} name="description" data-testid="edit-description" />
                        <br />
                        <Label>장르</Label>
                        <Input onChange={onChange} defaultValue={detailphoto.genres} name="genres" type="select">
                            <option value="">장르를 선택해주세요</option>
                            {Genres.map((item) => (
                                <option key={item.key} value={item.key} data-testid="select-option">
                                    {item.value}
                                </option>
                            ))}
                        </Input>
                        <S.BtnWrap>
                            <S.Btn color={'#54C5A0'} margin={'30px 0 0 0'} width={'100px'} onClick={submitHandler} data-testid="edit-submit">
                                확인
                            </S.Btn>
                        </S.BtnWrap>
                    </Form>
                </CardBody>
            </S.EditCard>
        </Col>
    );
};

export default AddPhotoPage;
