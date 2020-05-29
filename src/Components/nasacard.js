import React from "react";

const NasaCard = (props) => {
    console.log("props", props)
    return (
    <div>
        <img src={props.url}></img>
        <p>{props.title}</p>
        <h2>Picture Perfect</h2>
        <p>{props.description}</p>
        <h3>{props.copy}</h3>
    </div>
);
};


export default NasaCard;