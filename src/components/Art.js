import React, { Component } from "react";

class Art extends Component {
    render() {
        const arts = this.props.artData
        for(let i=0; i< arts.length; i++) {
            if(this.props.match.params.title === arts[i].title) {
                let art = arts[i];
                return (
                  <div className="singleDisplay">
                    <a className="readMore" 
                    onClick={() => {
                      {window.open(art.url, '_blank')} 
                    }}
                    rel="noopener noreferrer"
                    >
                        <img src={art.primaryimageurl} className="singleImage" alt={art.title}></img>
                    </a>
                      <div id="text">
                        <h1 id="artTitle">{art.title}</h1>
                        <h2 id="artist">{art.people[0].name}</h2>
                        <div className="medium">
                          <p id="mediumText">{art.medium}</p>
                        </div>
                      </div>
                  </div>
                )
            }
        }
    }
}

export default Art;  