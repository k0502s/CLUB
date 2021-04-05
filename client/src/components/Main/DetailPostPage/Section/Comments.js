import React, { useState, useRef, useEffect, Fragment } from 'react';
import CommentList from './CommentList';
import { useDispatch } from 'react-redux';
import { COMMENT_UPLOADING_REQUEST } from '../../../../redux/types';
import { Form, FormGroup, Input, Button, Row, Label } from 'reactstrap';

const Comments = ({ id, userName, userId, commentList }) => {
    const dispatch = useDispatch();
    const [CommentValue, setCommentValue] = useState({ contents: '' });
  

    const onSubmit = async (e) => {
        console.log(userName);
        await e.preventDefault();
        const { contents } = CommentValue;
        const token = localStorage.getItem('token');
        const body = {
            contents,
            token,
            id,
            userId,
            userName,
            reply: false,
        };

        console.log(body);
        dispatch({
            type: COMMENT_UPLOADING_REQUEST,
            payload: body,
        });
        resetValue.current.value = '';
        setCommentValue('');
    };

    const resetValue = useRef(null);

    const onChange = (e) => {
        setCommentValue({
            ...CommentValue,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {Array.isArray(commentList)
                ? commentList.map((comments, index) => (
                      <Fragment key={index}>
                          <CommentList comments={comments} commentId={comments._id} id={id} userName={userName} />
                      </Fragment>
                  ))
                : '댓글을 작성하려면 로그인이 필요합니다.'}
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Row className="p-2">
                        <Label className="font-weight-bold m-2">댓글 작성</Label>
                        <Input innerRef={resetValue} type="textarea" name="contents" id="contents" onChange={onChange} placeholder="댓글을 작성해주세요." />
                        <Button color="primary" block className="mt-2 offset-md-10 col-md-2 ">
                            등록
                        </Button>
                    </Row>
                </FormGroup>
            </Form>
        </>
    );
};

export default Comments;
