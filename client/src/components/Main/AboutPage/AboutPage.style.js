import styled from 'styled-components';

const AboutWrap = styled.div`
    padding: 30px 0;

    & p {
        margin: 30px 0;
        font-size: 40px;
        color: #f9e81c;
    }
    & ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline-block;
        width: 100%;
        margin-bottom: 100px;
        & li {
            float: left;
            width: 50%;
            color: #fff;
            text-align: justify;
            font-size: 16px;
            font-weight: 300;
            line-height: 28px;
        }
        & li img {
            max-width: 500px;
            object-fit: fill;
            vertical-align: middle;
            font-size: 1em;
            margin: 0;
            padding: 0;
            border: 0;
        }
        & li:first-child {
            text-align: left;
        }
        & li:last-child {
            padding-top: 5px;
        }
    }
    & ul:nth-child(4),
    ul:nth-child(8) {
        & li {
            float: right;
        }

        & li:first-child {
            text-align: right;
        }
    }
    @media only screen and (max-width: 1024px) {
        & ul {
            margin-bottom: 50px;
            & li img {
                width: 100%;
                max-width: 450px;
            }
            & li {
                float: unset;
                width: 100%;
                color: #fff;
                text-align: justify;
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
            }
            & li:first-child {
                text-align: center;
            }
            & li:last-child {
                padding-top: 20px;
            }
        }
        & ul:nth-child(4),
        ul:nth-child(8) {
            & li {
                float: unset;
            }

            & li:first-child {
                text-align: center;
            }
        }
    }
`;

const SubWrap = styled.div`
    margin: 0 229px;
    @media only screen and (max-width: 1024px) {
        margin: 0 20px;
    }
`;

export { AboutWrap, SubWrap };
