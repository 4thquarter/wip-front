import React, { useState, useEffect, useRef } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Colors from './Colors'

function NavCircle(props) {
  const history = useHistory();


	// const [scrollValue, setScrollValue] = useState(0);

	// function onScroll() {
	// 	const scrollValue = window.scrollX;
	// 	// console.log(`onScroll, window.scrollX: ${scrollValue}`)
	// 	setScrollValue(scrollValue);
	// }

	// const navAnimation = {
	// 	transform: `rotate(${scrollValue / 20}deg)`,
	// 	position: 'absolute',
	// };
  
  return (
		// <div>
			<svg className='header' width='200px' height='200px' viewBox='100 100'>
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
            <tspan 
              x='0' 
              dy='0' 
              onClick={props.getArtData}>
							<a
                className='navlink'
                id="nav1"
								onClick={(e) => {
									{
										e.preventDefault();
										history.push('/profile');
									}
								}}>
								profile
							</a>
						</tspan>
            
						<tspan
							x='115'
							dy='0'
							onClick={props.getArtData}>
							<a
                className='navlink'
                id="nav2"
								onClick={(e) => {
									{
										e.preventDefault();
										history.push('/colors');
									}
								}}>
								colors
							</a>
						</tspan>
            
						<tspan
							x='225'
							dy='0'
							onClick={props.getArtData}>
							<a
                className='navlink'
                id="nav3"
								onClick={(e) => {
									{
										e.preventDefault();
										history.push('/mediums');
									}
								}}>
								mediums
							</a>
						</tspan>
            
						<tspan
							x='355'
							dy='0'
							onClick={props.getArtData}>
							<a
                className='navlink'
                id="nav4"
								onClick={(e) => {
									{
										e.preventDefault();
										history.push('/mediums');
									}
								}}>
								artists
							</a>
						</tspan>
            
					</textPath>
				</text>
			</svg>
		// </div>
	);
}

export default NavCircle;
