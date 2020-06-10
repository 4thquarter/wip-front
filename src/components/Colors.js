import React, { Component } from "react";
import { Link } from "react-router-dom";

function Colors() {
  let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'grey']
  
  for(let i = 0; i<colors.length; i++) {
    
  }
    
  
    let list = props.artData.map((item) => {
      if (item.primaryimageurl !== null && item.peoplecount !==0) {
        return (
          <div className="colors" key={item.title}>
            <Link to={"/Colors/" + item.title}>
              <img
                className="galleryPiece"
                src={item.primaryimageurl}
                alt={item.title}
              ></img>
            </Link>
          </div>
        );
      }
    });
  return (
  <div className="Colors">
    {list}
    <div className="error">
      {props.error}
    </div>
  </div>
  )
}

export default Colors;
