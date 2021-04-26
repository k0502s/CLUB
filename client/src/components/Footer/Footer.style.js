import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const FooterWrap = styled(Row)`
    text-align: center;
    padding: 15px;
    background-color: #1c685e;
    color: #fff;
    font-size: small;
    font-family: none;
    & p {
        margin: 0 0 8px 0;
    }
`;

export { FooterWrap };
