import React from "react";
import styled from "styled-components";

const WrapDiv = styled.div`
border: 2px black solid;
background-color: gainsboro;
width: 100%;
margin: 5%;
text-align: left;
padding: 2%;
`;

const CopyStyle = styled.h3`
text-align: left;
`;



const NasaCard = (props) => {
    console.log("props", props)
    return (
    <WrapDiv>
        <h2>Title: {props.title}</h2>
        <p>{props.description}</p>
        <CopyStyle>Copyright: {props.copy}</CopyStyle>
    </WrapDiv>
);
};


export default NasaCard;