import React from "react";
import "./card.css"
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="flex flex-wrap my-16 mx-8">
    <div className="card">
      <div className="circle"></div>
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.desc} </p>
        <Link to={"/app2"}>
        <a  href="" target="__blank">
          READ MORE
        </a>
        </Link>
      </div>
      <img src={props.src} alt="" />
    </div>
   
   </div>
  );
}

export default Card;
