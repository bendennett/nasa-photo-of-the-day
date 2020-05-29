import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./nasacard";
import Header from "./header";
import styled from 'styled-components';
import Image from "./image";
// import { tsPropertySignature } from "@babel/types";


const NasaData = () => {

const [spaceData, setSpaceData] = useState(null);


useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=zbwBCsPFIenffDWfNumsplhBb1KXlMvgKfL7QG5d")
    .then(response => {
      setSpaceData(response.data)
      console.log("response", response.data);
    })
    .catch(err => console.log("Error!", err));
  }, []);

  return (
    <div>
      <Header/>
      {spaceData && <Image url={spaceData.hdurl}/>}
     {spaceData && <NasaCard title={spaceData.title}  description={spaceData.explanation} copy={spaceData.copyright}/>}
</div>
  );
};

export default NasaData;