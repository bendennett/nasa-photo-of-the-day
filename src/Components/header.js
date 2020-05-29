import React from "react";
import styled from "styled-components";

const HeadStyle = styled.h1`
color: black;
font-size: 80px;
font-family: impact;
border: 2px solid green;
width: 40%;
margin-left: 30%;
background-color: darkseagreen;
`;

const SubHead = styled.h2`
color: Gold;
font-size: 40px;
`;


const Header = (props) => {
console.log("headerprops", props)
return (
<HeadStyle>NASA
<SubHead>Picture Perfect</SubHead>
</HeadStyle>

);
};

export default Header