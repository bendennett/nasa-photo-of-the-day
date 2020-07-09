import React from "react";
import styled from "styled-components";



const ImgWrap = styled.img`
width: 80%;
border: 4px green solid;
`;

const Image = (props) => {
    console.log("image props", props)
    return (
    <ImgWrap src={props.url}></ImgWrap>
    );
};

export default Image