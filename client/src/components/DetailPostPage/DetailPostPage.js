import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { POST_DETAIL_LOADING_REQUEST, POST_DELETE_REQUEST, COMMENT_LOADING_REQUEST } from '../../redux/types';
import { Button, Row, Col, Container } from 'reactstrap';
import SideNav from '../Nav/SideNav';
import CommentList from './Section/CommentList'
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { GrowingSpinner } from '../../components/spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCommentDots, faMouse } from '@fortawesome/free-solid-svg-icons';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import { editorConfiguration } from '../../components/editor/EditorConfig';
import Comments from './Section/Comments';

const DetailPostPage = (req) => {
    const dispatch = useDispatch();
    const { postDetail, writerId, title, loading } = useSelector((state) => state.post);
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

    const EditButton = (
        <Fragment>
            <Row className="d-flex justify-content-center pb-3">
                <Col className="col-md-3 mr-md-3">
                    <Link to="/" className="btn btn-primary btn-block">
                        Home
                    </Link>
                </Col>
                <Col className="col-md-3 mr-md-3">
                    <Link to={`/editpost/${req.match.params.id}`} className="btn btn-success btn-block">
                        Edit Post
                    </Link>
                </Col>
                <Col className="col-md-3">
                    <Button className="btn-block btn-danger" onClick={onDeleteClick}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Fragment>
    );

    const HomeButton = (
        <Fragment>
            <Row className="d-flex justify-content-center pb-3">
                <Col className="col-sm-12 com-md-3">
                    <Link to="/" className="btn btn-primary btn-block">
                        Home
                    </Link>
                </Col>
            </Row>
        </Fragment>
    );

    const Body = (
        <>
            {userId === writerId ? EditButton : HomeButton}
            <Row className="border-bottom border-top border-primary p-3 mb-3 d-flex justify-content-between">
                {(() => {
                    if (postDetail && postDetail.writer) {
                        return (
                            <Fragment>
                                <div className="font-weight-bold text-big">
                                    <span className="mr-3">{/* <Button color="info">{postDetail.category.categoryName}</Button> */}</span>
                                    {postDetail.title}
                                </div>
                                <div className="align-self-end">{postDetail.writer.name}</div>
                            </Fragment>
                        );
                    }
                })()}
            </Row>
            {postDetail && postDetail.comments ? (
                <Fragment>
                    <Col>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        &nbsp;
                        <span>{postDetail.date}</span>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCommentDots} />
                        &nbsp;
                        <span>{postDetail.comments.length}</span>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faMouse} />
                        <span>{postDetail.views}</span>
                    </Col>
                    <Row className="mb-3">
                        <CKEditor
                            editor={BalloonEditor} //ckeditor로 편집한 글도 ckditor 기능을 이용해 보여주어햐한다.
                            data={postDetail.contents}
                            config={editorConfiguration}
                            disabled="true" //보여주는 editor 글을 수정하지 못하도록 한다.
                        />
                    </Row>
                    <Row>
                        <Container className="mb-3 border border-blue rounded">
                            <Comments id={req.match.params.id} userId={userId} userName={userName} comments={comments} commentId={comments._id}/>
                        </Container>
                    </Row>
                </Fragment>
            ) : (
                <h1>게시글이 존재하지 않습니다.</h1>
            )}
        </>
    );

    return (
        <Row>
            <Col md={{ size: 3 }} xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
                <SideNav />
            </Col>
            <Helmet title={`Post | ${title}`} />
            <Col md={7} className="mt-3">
                {loading === true ? GrowingSpinner : Body}
            </Col>
        </Row>
    );
};

export default DetailPostPage;
