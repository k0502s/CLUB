import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Label, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import FileUpload from '../utils/Fileupload';
import { useDispatch, useSelector } from 'react-redux';
import { PHOTO_UPLOADING_REQUEST } from '../../redux/types';

const Continents = [
    { key: 1, value: '풍경' },
    { key: 2, value: '인물' },
    { key: 3, value: '접사' },
    { key: 4, value: '습작' },
];

const AddPhotoPage = (props) => {
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Continent, setContinent] = useState(0);
    const [Images, setImages] = useState([]);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const titleChangeHandler = (e) => {
        setTitle(e.currentTarget.value);
    };

    const descriptionChangeHandler = (e) => {
        setDescription(e.currentTarget.value);
    };

    const continentChangeHandler = (e) => {
        setContinent(e.currentTarget.value);
    };

    const updateImages = (newImages) => {
        setImages(newImages);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const title = document.myform.title.value;
        const description = document.myform.description.value;
        const continent = document.myform.continent.value;
        // if(name==="" || camera==="" || age==="" || sex===""){
        //     return alert("빈 칸에 정보를 입력해야 합니다.")
        // }
        if (title === '') {
            return alert('제목 정보를 입력해야 합니다.');
        }
        if (description === '') {
            return alert('설명 정보를 입력해야 합니다.');
        }
        if (continent === '') {
            return alert('장르 정보를 입력해야 합니다.');
        }
        if (Images === []) {
            return alert('사진을 입력해야 합니다.');
        }

        //서버에 채운 값들을 request을 보낸다.
        const body = {
            writer: user._id, //로그인된 사람의 ID
            title: Title,
            description: Description,
            images: Images,
            continents: Continent,
        };
        dispatch({
            type: PHOTO_UPLOADING_REQUEST,
            payload: body,
        });
    };

    return (
        <Card body style={{height:'700px', borderRadius:'50px'}}>
                <CardTitle tag="h3">
                    포토 추가하기
                </CardTitle>
                <Form onSubmit={submitHandler} name="myform">
                    {/* DropZone   */}
                    <FileUpload refreshFunction={updateImages} />
                    <Label>제목</Label>
                    <Input onChange={titleChangeHandler} value={Title} name="title" />
                    <br />
                    <Label>설명</Label>
                    <Input onChange={descriptionChangeHandler} value={Description} name="description" />
                    <br />
                    <Label>장르</Label>
                    <Input onChange={continentChangeHandler} value={Continent} name="continent" type="select">
                        <option value="">장르를 선택해주세요</option>
                        {Continents.map((item) => (
                            <option key={item.key} value={item.key}>
                                {item.value}
                            </option>
                        ))}
                    </Input>
                    <Button className="col-md-2 offset-md-10 mt-5" onClick={submitHandler}>
                        확인
                    </Button>
                </Form>
            </Card>
    );
};

export default AddPhotoPage;
