import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Col, Row} from 'reactstrap';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPaperPlane, faQuestion, faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

function FileUpload(props) {
    const [Images, setImages] = useState([]);

    const dropHandler = (files) => {
        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data' },
        };
        formData.append('file', files[0]);

        Axios.post('/api/photo/image', formData, config).then((response) => {
            if (response.data.success) {
                console.log(response.data);
                setImages([...Images, response.data.filePath]);
                props.refreshFunction([...Images, response.data.filePath]);
            } else {
                alert('이미지 저장 실패.');
            }
        });
    };

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);
        console.log('currentIndex', currentIndex);

        let newImages = [...Images];
        //splice 메소드의 첫번째 인자는 클릭 이벤트로 선택된 이미지이고
        //두번째 인자는 선택된 이미지를 중심으로 몇개를 지울지 선택하는 것이다.
        newImages.splice(currentIndex, 1);

        setImages(newImages); //삭제 후 새롭게 state 값을 만들어준다.

        props.refreshFunction(newImages);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            style={{
                                width: 300,
                                height: 240,
                                border: '1px solid lightgray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <FontAwesomeIcon icon={faPlus} size="xs" />
                        </div>
                    </section>
                )}
            </Dropzone>
            </Col>
            <Col>
            <div style={{ display: 'flex', width: '350px', height: '240px', overflow: 'scroll' }}>
                {Images.map((image, index) => (
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`${image}`} />
                    </div>
                ))}
            </div>
            </Col>
        </div>
    );
}

export default FileUpload;
