import React, { useState, useRef, Fragment } from 'react';
import CommentList from './CommentList';
import { useDispatch } from 'react-redux';
import * as S from './Comment.style';
import { COMMENT_UPLOADING_REQUEST } from '../../../../../redux/types';
import { Form, FormGroup, Input } from 'reactstrap';

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
                    <S.CommentWrap>
                        <S.CommentLabel>댓글 작성</S.CommentLabel>
                        <Input
                            innerRef={resetValue}
                            type="textarea"
                            name="contents"
                            id="contents"
                            value={CommentValue.contents}
                            onChange={onChange}
                            placeholder="댓글을 작성해주세요..."
                            data-testid="add-comment"
                        />
                    </S.CommentWrap>
                    <S.BtnWrap>
                        <S.CommentBtn width={'100px'} color={'#54C5A0'} data-testid="comment-submit">
                            확 인
                        </S.CommentBtn>
                    </S.BtnWrap>
                </FormGroup>
            </Form>
        </>
    );
};

export default Comments;
