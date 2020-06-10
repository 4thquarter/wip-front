import React, { Component } from "react";
import { Link } from "react-router-dom";

function Mediums() {
  let mediums = ['music', 'garment', 'painting', 'sculpture', 'photo', 'writing', 'drawing', 'graphic', 'website']
  
  for(let i = 0; i<mediums.length; i++) {
    
  }
    
  
    let list = props.artData.map((item) => {
      if (item.primaryimageurl !== null && item.peoplecount !==0) {
        return (
          <div className="mediums" key={item.title}>
            <Link to={"/Mediums/" + item.title}>
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
  <div className="mediums">
    {list}
    <div className="error">
      {props.error}
    </div>
  </div>
  )
}

export default Mediums;
