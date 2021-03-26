import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { DISLIKE_UN_REQUEST, DISLIKE_UP_REQUEST, LIKE_UN_REQUEST, LIKE_UP_REQUEST } from '../../../redux/types';

function LikeDislikes(props) {
    const dispatch = useDispatch();
    const [Likes, setLikes] = useState(0);
    const [Dislikes, setDislikes] = useState(0);
    const [LikeAction, setLikeAction] = useState(null);
    const [DislikeAction, setDislikeAction] = useState(null);
    let variable = {};
    variable = { photoId: props.photoId, userId: props.userId };

    useEffect(() => {
        Axios.post('/api/like/getLikes', variable).then((response) => {
            console.log('getLikes', response.data);

            if (response.data.success) {
                setLikes(response.data.likes.length);

                response.data.likes.map((like) => {
                    if (like.userId === props.userId) {
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
                    if (dislike.userId === props.userId) {
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
        <Col style={{ marginLeft: '65px', marginTop: '10px' }}>
            <span key="comment-basic-like">
                {/* <Icon type="like" theme={LikeAction === 'liked' ? 'filled' : 'outlined'} onClick={onLike} /> */}
                <FontAwesomeIcon icon={faThumbsUp} size="3x" onClick={onLike} />
                <span style={{ paddingLeft: '8px', cursor: 'auto', fontSize: '25px', color: 'white' }}>{Likes} </span>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                {/* <Icon type="dislike" theme={DisikeAction === 'disliked' ? 'filled' : 'outlined'} onClick={onDislike} /> */}
                <FontAwesomeIcon icon={faThumbsDown} size="3x" onClick={onDisLike} />
                <span style={{ paddingLeft: '8px', cursor: 'auto', fontSize: '25px', color: 'white' }}>{Dislikes} </span>
            </span>
            &nbsp;&nbsp;
        </Col>
    );
}

export default LikeDislikes;
