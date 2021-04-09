import React, { useState, useRef } from 'react';
import { Button, Input, Row, Col, Form } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { COMMENT_DELETE_REQUEST, COMMENT_EDIT_UPLOADING_REQUEST, COMMENT_LOADING_REQUEST, COMMENT_UPLOADING_REQUEST } from '../../../../redux/types';

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
        dispatch({
            type: COMMENT_DELETE_REQUEST,
            payload: body,
        });
        dispatch({
            type: COMMENT_LOADING_REQUEST,
            payload: id,
        });
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
        <div>
            <div>
                <Row className="justify-content-between p-2">
                    <div className="font-weight-bold" data-testid='comment-name'>{comments.writerName ? comments.writerName : comments.writer}</div>
                    <div className="text-small">
                        <span className="font-weight-bold" data-testid='comment-date_1'>
                            {comments.date.split(' ')[0]}
                        </span>
                        <span className="font-weight-light" data-testid='comment-date_2'>
                            {' '}
                            {/* split으로 쪼개고 난 두 번째 이기에 [1]이다 */}
                            {comments.date.split(' ')[1]}
                        </span>
                        <Col>
                            {userId === comments.writer && <span onClick={onClickOpenEdit} data-testid='comment-edit-btn'>수정{' | '}</span>}

                            {userId === comments.writer && <span onClick={onClickDelete} data-testid='comment-delete-btn'>삭제</span>}
                        </Col>
                    </div>
                </Row>
                <Row className="p-2">
                    <div data-testid='comment-content'>{comments.contents}</div>
                </Row>
                {OpenEdit && (
                    <Form style={{ display: 'flex' }} onSubmit={onSubmitEdit}>
                        <Input innerRef={resetValue} type="textarea" style={{ width: '100%', borderRadius: '5px' }} onChange={onChange} name="contents" defaultValue={comments.contents} data-testid='edit-comment'/>
                        <br />
                        <Button color="primary" className="col-md-2 " data-testid='edit-comment-submit'>
                            수정하기
                        </Button>
                    </Form>
                )}
                <hr />
            </div>
        </div>
    );
};

export default CommentList;
