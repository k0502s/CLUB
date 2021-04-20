import styled from 'styled-components';
import { BsFillPeopleFill, BsCamera } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { Navbar, Nav, Button, Label, Input, Form, Card, CardTitle, CardFooter, CardSubtitle } from 'reactstrap';

const card = styled(Card)`
    margin-top: ${(props) => props.margintop};
    margin-bottom: ${(props) => props.marginbottom};
    width: ${(props) => props.width};
    border-radius: 3%;
    background-color: #f4fcfb;
`;

const cardfooter = styled(CardFooter)`
    color: gray;
    text-align: center;
`;
const helloIcon = styled(BsFillPeopleFill)`
   margin-right: 6px;
   font-size: larger;
`;
const trophyIcon = styled(FaTrophy)`
   margin-right: 6px;
   font-size: larger;
`;
const photoIcon = styled(BsCamera)`
   margin-right: 6px;
   margin-top: 1px;
   font-size: larger;
`;

const td = styled.td`
width: 50%;
color: ${(props) => props.color};
text-align: ${(props) => props.text};
text-align: ${(props) => props.text};

`

export { card, cardfooter, td, helloIcon, photoIcon, trophyIcon};
