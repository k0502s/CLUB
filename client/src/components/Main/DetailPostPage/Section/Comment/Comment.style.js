import styled from 'styled-components';
import { Row, Col, Button, Label, Form } from 'reactstrap';

// Root Comment CSS
const CommentBtn = styled(Button)`
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    color: #fff;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const CommentLabel = styled(Label)`
    font-weight: bold;
    margin: 15px;
`;
const CommentWrap = styled(Row)`
    padding: 13px;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 20px 0;
`;

// List Comment CSS

const ListCommentWrap = styled(Row)`
    justify-content: ${(props) => props.justify};
    padding: 13px;

    & div:nth-child(1) {
        font-weight: bold;
    }
    & div:nth-child(2) {
        font-size: medium;
        color: lightslategray;

        & div.col span {
            cursor: pointer;
        }
    }
`;
const CommentcontentWrap = styled(Row)`
    padding: 13px;
`;
const EditForm = styled(Form)`
    display: flex;
`;

export { CommentBtn, BtnWrap, CommentLabel, CommentWrap, ListCommentWrap, CommentcontentWrap, EditForm };
