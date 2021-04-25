import styled from 'styled-components';
import { Row, Spinner } from 'reactstrap';

const LoaderWrap = styled(Row)`
    display: flex;
    justify-content: center;
    margin: 50px;
`;
const Loader = styled(Spinner)`
    width: 3rem;
    height: 3rem;
    margin-left: ${(props) => props.margin};
    margin-top: 150px;
`;

export { LoaderWrap, Loader };
