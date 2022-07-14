import React from "react";
import { name, city, divStyle } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">Home
    <h1 style={divStyle}> {`${name} is a Web Developer from ${city}`} </h1>
  </div>;
  
} 

export default Home;
