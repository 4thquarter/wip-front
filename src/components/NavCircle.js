import React, { Component } from "react";
import { Link, Route, useHistory } from 'react-router-dom';
import Colors from './Colors'

function NavCircle(props) {
  const history = useHistory();
  
  return (
		<div className='circleTextContainer'>
			<Route path='/colors' exact component={Colors} />
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
					<textPath href='#curve' className='circleText' id='ct1'>
						<tspan x='0' dy='0' className='navlink' onClick={props.getArtData}>
							<a style={{ fill: 'white' }} onClick={(e) => {
                      {e.preventDefault()
                       history.push('/profile')} 
                    }}>
								profile
							</a>
						</tspan>
						<tspan
							x='115'
							dy='0'
							className='navlink'
							onClick={props.getArtData}>
							<a style={{ fill: 'white' }} onClick={(e) => {
                      {e.preventDefault()
                       history.push('/colors')} 
                    }}>
								colors
							</a>
						</tspan>
						<tspan
							x='225'
							dy='0'
							className='navlink'
							onClick={props.getArtData}>
							<a style={{ fill: 'white' }} onClick={(e) => {
                      {e.preventDefault()
                       history.push('/mediums')} 
                    }}>
								mediums
							</a>
						</tspan>
						<tspan
							x='355'
							dy='0'
							className='navlink'
							onClick={props.getArtData}>
							<a style={{ fill: 'white' }} onClick={(e) => {
                      {e.preventDefault()
                       history.push('/mediums')} 
                    }}>
								mediums
							</a>
						</tspan>
					</textPath>
				</text>
			</svg>
		</div>
	);
}

export default NavCircle;
