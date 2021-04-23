import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { Row, Col } from 'reactstrap';
import * as S from '../DetailPhotoPage.style';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { DISLIKE_UN_REQUEST, DISLIKE_UP_REQUEST, LIKE_UN_REQUEST, LIKE_UP_REQUEST } from '../../../../redux/types';

function LikeDislikes({ photoId, userId }) {
    const dispatch = useDispatch();
    const [Likes, setLikes] = useState(0);
    const [Dislikes, setDislikes] = useState(0);
    const [LikeAction, setLikeAction] = useState(null);
    const [DislikeAction, setDislikeAction] = useState(null);
    let variable = {};
    variable = { photoId, userId };

    useEffect(() => {
        Axios.post('/api/like/getLikes', variable).then((response) => {
            console.log('getLikes', response.data);

            if (response.data.success) {
                setLikes(response.data.likes.length);

                response.data.likes.map((like) => {
                    if (like.userId === userId) {
                        setLikeAction('liked');
                    }
                });
            } else {
                alert('좋아요 가져오기 실패');
            }
        });

        Axios.post('/api/like/getDislikes', variable).then((response) => {
            console.log('getDislike', response.data);
            if (response.data.success) {
                setDislikes(response.data.dislikes.length);

                response.data.dislikes.map((dislike) => {
                    if (dislike.userId === userId) {
                        setDislikeAction('disliked');
                    }
                });
            } else {
                alert('싫어요 가져오기 실패');
            }
        });
    }, []);

    const onLike = () => {
        if (LikeAction === null) {
            dispatch({
                type: LIKE_UP_REQUEST,
                payload: variable,
            });

            setLikes(Likes + 1);
            setLikeAction('liked');

            if (DislikeAction !== null) {
                setDislikeAction(null);
                setDislikes(Dislikes - 1);
            }
        } else {
            dispatch({
                type: LIKE_UN_REQUEST,
                payload: variable,
            });

            setLikes(Likes - 1);
            setLikeAction(null);
        }
    };

    const onDisLike = () => {
        if (DislikeAction !== null) {
            dispatch({
                type: DISLIKE_UP_REQUEST,
                payload: variable,
            });
            setDislikes(Dislikes - 1);
            setDislikeAction(null);
        } else {
            dispatch({
                type: DISLIKE_UN_REQUEST,
                payload: variable,
            });
            setDislikes(Dislikes + 1);
            setDislikeAction('disliked');

            if (LikeAction !== null) {
                setLikeAction(null);
                setLikes(Likes - 1);
            }
        }
    };

    return (
        <Col>
            <S.likebox>
                <p>
                    {LikeAction === 'liked' ? <AiFillLike onClick={onLike} /> : <AiOutlineLike onClick={onLike} />}
                    <span data-testid="like-up">
                        {Likes}
                    </span>
                </p>
                <p>
                    {DislikeAction === 'disliked' ? <AiFillDislike onClick={onDisLike} /> : <AiOutlineDislike onClick={onDisLike} />}
                    <span data-testid="like-down">
                        {Dislikes}
                    </span>
                </p>
            </S.likebox>
        </Col>
    );
}

export default LikeDislikes;
