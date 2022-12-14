import React from "react";
import "./NotFound.scss";

const NotFound = ({ text }) => {
    
    return (
      <div className="notFound">
        <p>{text}</p>
      </div>
    )
  }
  
  export default NotFound;