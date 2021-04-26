import styled from 'styled-components';
import { Button, Card } from 'reactstrap';

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const EditBtn = styled(Button)`
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    color: #fff;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const EditCard = styled(Card)`
    border-radius: 25px;
    margin-bottom: 20px;
    margin-top: 30px;
`;

export { EditBtn, BtnWrap, EditCard };
