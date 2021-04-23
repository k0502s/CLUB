import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { POST_DETAIL_LOADING_REQUEST, POST_DELETE_REQUEST, COMMENT_LOADING_REQUEST } from '../../../redux/types';
import { Row, Col } from 'reactstrap';
import SideNav from '../../Nav/SideNav';
import * as S from './DetailPostPage.style';
import LocationDisplay from '../../../utils/LocationDisplay';
import { BsPen, BsFillEyeFill, BsPersonFill, BsFillChatDotsFill } from 'react-icons/bs';
import Comments from './Section/Comment/Comments';
import { Link } from 'react-router-dom';
import photographerImg from '../../../assets/img/사진작가2.png';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Loader } from '../../../components/Loader/Loader';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import { editorConfiguration } from '../../Editor/EditorConfig';

const DetailPostPage = (req) => {
    const dispatch = useDispatch();
    const { postDetail, writerId, title, isLoading } = useSelector((state) => state.post);
    const { userId, userName } = useSelector((state) => state.auth);
    const { comments } = useSelector((state) => state.comment);

    console.log(req);
    useEffect(() => {
        dispatch({
            type: POST_DETAIL_LOADING_REQUEST,
            payload: req.match.params.id,
        });
    }, [dispatch, req.match.params.id]);

    useEffect(() => {
        dispatch({
            type: COMMENT_LOADING_REQUEST,
            payload: req.match.params.id,
        });
    }, [dispatch, req.match.params.id]);

    const onDeleteClick = () => {
        dispatch({
            type: POST_DELETE_REQUEST,
            payload: {
                id: req.match.params.id,
                token: localStorage.getItem('token'),
            },
        });
    };

    const Body = (
        <>
            <Row>
                <Col md={{ size: 3, offset: 1 }}>
                    <SideNav />
                    <S.Img src={photographerImg} />
                </Col>
                <S.postWrap md={7}>
                    <S.topborder md={{ size: 5, offset: 1 }}>
                        <h5 data-testid="post-title">{postDetail.title}</h5>
                        <Link to={`/postlist_${postDetail.category}`}>
                            <S.button color={'#72b29c'}>
                                <S.listIcon />
                                목록
                            </S.button>
                        </Link>
                    </S.topborder>
                    {postDetail && postDetail.comments ? (
                        <>
                            <Row>
                                <S.infoWrap>
                                    <BsPersonFill />
                                    &nbsp;
                                    <span data-testid="post-name">{postDetail.writer.name}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <BsPen />
                                    &nbsp;
                                    <span data-testid="post-date">{postDetail.date}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <BsFillChatDotsFill />
                                    &nbsp;
                                    <span data-testid="post-comments">{postDetail.comments.length}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <BsFillEyeFill />
                                    &nbsp;
                                    <span data-testid="post-views">{postDetail.views}</span>
                                </S.infoWrap>
                            </Row>
                            <S.buttonWrap>
                                {writerId === userId && (
                                    <S.button color={'#F05232'} width={'70px'} margin={'0 20px 0 0'} onClick={onDeleteClick}>
                                        삭제
                                    </S.button>
                                )}
                                {writerId === userId && (
                                    <Link to={`/editpost/${req.match.params.id}`} data-testid="post-edit">
                                        <S.button color={'#8bc34a'} width={'70px'}>
                                            글 수정
                                        </S.button>
                                    </Link>
                                )}
                            </S.buttonWrap>
                            <Row>
                                <CKEditor editor={BalloonEditor} data={postDetail.contents} config={editorConfiguration} disabled="true" />
                            </Row>
                            <Row>
                                <S.commentWrap>
                                    <p>
                                        총 <span>{postDetail.comments.length}</span> 개의 댓글이 있습니다.
                                    </p>
                                    <hr />
                                    <Comments id={req.match.params.id} userId={userId} userName={userName} commentList={comments} commentId={comments._id} />
                                </S.commentWrap>
                                <LocationDisplay />
                            </Row>
                        </>
                    ) : (
                        ''
                    )}
                </S.postWrap>
            </Row>
        </>
    );

    return (
        <>
            {' '}
            <Helmet title={`Post | ${title}`} /> {isLoading === true ? Loader : Body}{' '}
        </>
    );
};

export default DetailPostPage;
