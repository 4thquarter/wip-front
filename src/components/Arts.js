import React, { Component } from "react";
import { Link } from "react-router-dom";

class Arts extends Component {
  render() {
    let list = this.props.artData.map((item) => {
      if (item.primaryimageurl !== null && item.peoplecount !==0) {
        return (
          <div className="Art" key={item.title}>
            <Link to={"/Art/" + item.title}>
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
    <div className="Arts">
      {list}
      <div className="error">
        {this.props.error}
      </div>
    </div>
    )
  }
}

export default Arts;
