import styled from 'styled-components';

const wrapper = styled.div`
    text-align: center;
    background-color: #f4fcfb;
`;
const logo = styled.img`
    width: 200px;
    height: 90px;
    margin: 8px 0 1px 0;
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

export { logo, wrapper };
