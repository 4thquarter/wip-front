import React, { Component } from "react";

function NavCircle(props) {

  return (
    <div className='circleTextContainer'>
    <svg className='header' viewBox='1 1 1500 200'>
      <path
        id='curve'
        fill='none'
        d='
          M 100, 100
          m -75, 0
          a 75,75 0 1,0 150,0
          a 75,75 0 1,0 -150,0
          '
      />

      <text
        width='500'
        className='circleTextSquare'
        style={props.navAnimation}>
        <textPath
          href='#curve'
          className='circleText'
          id='ct1'>
          <tspan
            x='0'
            dy='0'
            className='navlink'
            onClick={props.getArtData}>
            profile
          </tspan>
          <tspan
            x='130'
            dy='0'
            className='navlink'
            onClick={props.getArtData}>
            about
          </tspan>
          <tspan
            x='400'
            dy='0'
            className='navlink'
            onClick={props.getArtData}>
            me
          </tspan>
          <tspan
            x='300'
            dy='0'
            className='navlink'
            onClick={props.getArtData}>
            you
          </tspan>
        </textPath>
      </text>
    </svg>
  </div>
  )
}

export default NavCircle;
