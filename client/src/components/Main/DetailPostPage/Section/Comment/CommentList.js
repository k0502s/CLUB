import React, { useState, useRef } from 'react';
import { Button, Input, Row, Col, Form } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Comment.style';
import { COMMENT_DELETE_REQUEST, COMMENT_EDIT_UPLOADING_REQUEST, COMMENT_LOADING_REQUEST, COMMENT_UPLOADING_REQUEST } from '../../../../../redux/types';

const CommentList = ({ id, comments, commentId, userName }) => {
    const dispatch = useDispatch();
    const [OpenEdit, setOpenEdit] = useState(false);
    const [CommentValue, setCommentValue] = useState({ contents: '' });
    const { userId } = useSelector((state) => state.auth);

    const onClickOpenEdit = () => {
        setOpenEdit(!OpenEdit);
    };

    const onChange = (e) => {
        setCommentValue({
            ...CommentValue,
            [e.target.name]: e.target.value,
        });
    };

    const onClickDelete = () => {
        const body = {
            commentId,
            postId: id,
            userId,
        };
        if (window.confirm('해당 댓글을 정말 삭제 하시겠습니까?')) {
        dispatch({
            type: COMMENT_DELETE_REQUEST,
            payload: body,
        });
        dispatch({
            type: COMMENT_LOADING_REQUEST,
            payload: id,
        });
    } else {
        alert('삭제 취소')
    }
    };

    const onSubmitEdit = (e) => {
        e.preventDefault();
        const { contents } = CommentValue;
        const body = {
            contents,
            commentId,
        };
        dispatch({
            type: COMMENT_EDIT_UPLOADING_REQUEST,
            payload: body,
        });
        dispatch({
            type: COMMENT_LOADING_REQUEST,
            payload: id,
        });
        resetValue.current.value = '';
        setCommentValue('');
        setOpenEdit(false);
    };

    const resetValue = useRef(null);

    return (
        <>
            <S.ListCommentWrap justify={'space-between'}>
                <div data-testid="comment-name">
                    {comments.writerName ? comments.writerName : comments.writer}
                </div>
                <div>
                    <span data-testid="comment-date_1">
                        {comments.date.split(' ')[0]}
                    </span>
                    <span data-testid="comment-date_2">
                        {' '}
                        {comments.date.split(' ')[1]}
                    </span>
                    <Col>
                        {userId === comments.writer && (
                            <span onClick={onClickOpenEdit} data-testid="comment-edit-btn">
                                수정{' | '}
                            </span>
                        )}

                        {userId === comments.writer && (
                            <span onClick={onClickDelete} data-testid="comment-delete-btn">
                                삭제
                            </span>
                        )}
                    </Col>
                </div>
            </S.ListCommentWrap>
            <S.CommentcontentWrap>
                <div data-testid="comment-content">{comments.contents}</div>
            </S.CommentcontentWrap>
            {OpenEdit && (
                <S.EditForm onSubmit={onSubmitEdit}>
                    <Input
                        innerRef={resetValue}
                        type="textarea"
                        onChange={onChange}
                        name="contents"
                        defaultValue={comments.contents}
                        data-testid="edit-comment"
                    />
                    <br />
                    <S.CommentBtn width={'100px'} color={'#54C5A0'} className="col-md-2 " data-testid="edit-comment-submit">
                        수정하기
                    </S.CommentBtn>
                </S.EditForm>
            )}
            <hr />
        </>
    );
};

export default CommentList;
