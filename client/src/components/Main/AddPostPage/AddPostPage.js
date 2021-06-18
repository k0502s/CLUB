import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Col, Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { editorConfiguration } from '../../editor/EditorConfig';
import Myinit from '../../editor/UploadAdapter';
import { POST_UPLOADING_REQUEST } from '../../../redux/types';
import dotenv from 'dotenv';
import * as S from './AddPostPage.style';
dotenv.config();

const Category = [
    { key: 1, value: '가입 인사' },
    { key: 2, value: '모임 후기' },
];

const AddPostPage = () => {
    const { isAuthenticated, userName } = useSelector((state) => state.auth);
    const [form, setValues] = useState({
        title: '',
        contents: '',
        fileurl: '',
        category: '',
    });
    const dispatch = useDispatch();

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const getDataFromCKEditor = (event, editor) => {
        const data = editor.getData(); //CKEditor에서 제공하는 데이터 뽑기 메소드 getData()
        console.log(data);
        if (data && data.match('<img src=')) {
            const whereImg_start = data.indexOf('<img src='); //<img sec=가 들어가 있는 index  값 추출
            //예: <img src="https://jinseokproject1.s3.ap-northeast-2.amazonaws.com/upload/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C1614655588791.png">
            console.log(whereImg_start);
            let whereImg_end = '';
            let ext_name_find = '';
            let result_Img_Url = '';
            const ext_name = ['jpeg', 'png', 'jpg', 'gif']; //확장자 종류를 담은 배열

            for (let i = 0; i < ext_name.length; i++) {
                if (data.match(ext_name[i])) {
                    //확장자 찾기 위해 배열 안에서 돈다.
                    console.log(data.indexOf(`${ext_name[i]}`));
                    ext_name_find = ext_name[i]; //찾은 확장자 ext_name_find 변수에 일일이 선언
                    whereImg_end = data.indexOf(`${ext_name[i]}`); //찾은 확장자 명의 위치 index값을 whereImg_end에 일일이 변수화
                }
            }
            console.log(ext_name_find);
            console.log(whereImg_end);

            //끝부분 확장자만 잘라 Url 만들기
            if (ext_name_find === 'jpeg') {
                //확장자가 jpeg라 하면 substring 메소드를 이용하여 jpeg 확장자를 잘라준다.
                result_Img_Url = data.substring(whereImg_start + 10, whereImg_end + 4);
            } else {
                //나머지 확장자는 3글자 이므로 아래의 코드로 처리해서 똑같이 확장자 잘라준다.
                result_Img_Url = data.substring(whereImg_start + 10, whereImg_end + 3);
            }

            console.log(result_Img_Url, 'result_Img_Url');
            setValues({
                ...form,
                fileUrl: result_Img_Url,
                contents: data,
            });
        } else {
            setValues({
                ...form,
                fileUrl: process.env.REACT_APP_BASIC_IMAGE_URL,
                contents: data,
            });
        }
    };

    const onSubmit = async (e) => {
        await e.preventDefault();
        const titleinput = document.myform.title.value;
        const categoryinput = document.myform.category.value;
        if (titleinput === '') {
            return alert('제목 정보를 입력해야 합니다.');
        }
        if (categoryinput === '') {
            return alert('카테고리 정보를 입력해야 합니다.');
        }
        const { title, contents, fileUrl, category } = form;
        const token = localStorage.getItem('token');
        const body = { title, contents, fileUrl, category, token, userName };
        dispatch({
            type: POST_UPLOADING_REQUEST,
            payload: body,
        });
    };

    return (
        <Col md={{ size: 6, offset: 3 }}>
            <Helmet title={'글쓰기'} />
            <S.AddCard>
                <CardHeader>
                    <strong>글쓰기</strong>
                </CardHeader>
                <Card body>
                    <CardTitle tag="h5">※ 이미지 파일 업로드 참고 사항</CardTitle>
                    <CardText>1. 이미지 파일 사이즈는 100 * 1024 * 1024의 제한을 두고 있습니다.</CardText>
                </Card>
                <CardBody>
                    <Form onSubmit={onSubmit} name="myform">
                        <FormGroup className="mb-3">
                            <Label for="title">제목</Label>
                            <Input type="text" name="title" id="title" className="form-control" onChange={onChange} data-testid="add-title" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label for="category">카테고리</Label>
                            <Input type="select" name="category" onChange={onChange} value={form.category}>
                                <option value="">카테고리를 선택해주세요</option>
                                {Category.map((item) => (
                                    <option key={item.key} value={item.key} data-testid="select-option">
                                        {item.value}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <Label for="content">내용</Label>
                            <CKEditor editor={ClassicEditor} config={editorConfiguration} onInit={Myinit} onBlur={getDataFromCKEditor} />
                            <S.BtnWrap>
                                <S.AddBtn color={'#54C5A0'} margin={'30px 0 0 0'} width={'100px'} data-testid="add-submit">
                                    확인
                                </S.AddBtn>
                            </S.BtnWrap>
                        </FormGroup>
                    </Form>
                </CardBody>
            </S.AddCard>
        </Col>
    );
};

export default AddPostPage;
