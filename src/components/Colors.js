// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default Colors;

// function Colors(props) {
// let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'grey']

// for(let i = 0; i<colors.length; i++) {

// }

// let list = props.artData.map((item) => {
//   if (item.primaryimageurl !== null && item.peoplecount !==0) {
//     return (
// <div className="colors" key={item.title}>
//   <Link to={"/Colors/" + item.title}>
//     <img
//       className="galleryPiece"
//       src={item.primaryimageurl}
//       alt={item.title}
//     ></img>
//   </Link>
// </div>
//     );
//   }
// });

// return (
// 	<>
// 		<h3 className='page-title'>Mediums</h3>
//     {props.artData.map((item) => {
//       if (item.primaryimageurl !== null && item.peoplecount !==0) {
//         // <div className="colors" key={item.title}>
//         //   <Link to={"/Colors/" + item.title}>
//         //     <img
//         //       className="galleryPiece"
//         //       src={item.primaryimageurl}
//         //       alt={item.title}
//         //     ></img>
//         //   </Link>
//         // </div>
//       }
//     })}
// 	</>
// );

//   return (
//   <div className="Colors">
//     {list}
//     <div className="error">
//       {props.error}
//     </div>
//   </div>
//   )
// }

function Colors() {
	useEffect(() => {
    getRandomIntegers()
		fetchColors();
	}, []);

  
  
	const [arts, setArts] = useState([]);
  const [alive, setAlive] = useState([])
  const [unknown, setUnkown] = useState([])
  const [deceased, setDeceased] = useState([])
  const [presumedDead, setPresumedDead] = useState([])
  
  const [randomIntegers, setRandomIntegers] = useState([])

	// const fetchColors = async () => {
	// 	const colorsData = await fetch(
	// 		'https://www.breakingbadapi.com/api/characters'
	// 	);
	// 	const colors = await colorsData.json();
	// 	setColors(colors);
  // };
  
  
  const fetchColors = async () => {
		const artsData = await fetch(
			'https://www.breakingbadapi.com/api/characters'
		);
    const arts = await artsData.json();
    console.log(arts);
    
    arts.sort(() => Math.random() - 0.5);
    // console.log(colors);
        
    let red = []
    let blue = []
    let yellow  = []
    let green = []
    let purple = []
    let orange = []
    let brown = []
    let black = []
    let white = []
    let gray = []
    
    arts.map((art) => {
      switch(art.status) {
        case 'Alive':
          red.push(art)
          break;
        case '?':
          blue.push(art)
          break;
        case 'Deceased':
          yellow.push(art)
          break;
        case 'Presumed dead':
          green.push(art)
          break;
        case 'purple':
          green.push(art)
          break;
        case 'orange':
          green.push(art)
          break;
        case 'brown':
          green.push(art)
          break;
        case 'black':
          green.push(art)
          break;
        case 'white':
          green.push(art)
          break;   
        case 'grey':
          green.push(art)
          break;
      }
    })
    
    setArts(arts);
    
    console.log(red);
    
    setAlive(red)
    setUnkown(blue)
    setDeceased(yellow)
    setPresumedDead(green)
  };
  
  function getRandomIntegers() {
    let randomIntegers = []
    
    for(let j=0; j<10; j++) {
      randomIntegers[j] = []
    
      for(let i=0; i<5; i++) {
          let min = 10;
          let max = 70;
          randomIntegers[j].push(Math.floor(Math.random() * (max - min)) + min)
        }
    }
    
    setRandomIntegers(randomIntegers)
  }
  

	return (
		<>
			<div className='colorsGalleryHolder'>
        
				<div className='colorCollageHolder' id="colorsGalleryEntrance">
					<h2 className='entranceText'>
						explore color gallery ⟶
					</h2>
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[0][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>blue</h3>
					{unknown.slice(0, 5).map((unknown, i) => (
						<div
							key={unknown.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
              style={{
								marginLeft: `${randomIntegers[1][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(140deg)',
								}}
								to={`/colors/${unknown.char_id}`}>
								<img
									key={unknown.char_id}
									className='image-in-collage'
									src={unknown.img}
									alt={unknown.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>yellow</h3>
					{deceased.slice(0, 5).map((deceased, i) => (
						<div
							key={deceased.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
              style={{
								marginLeft: `${randomIntegers[2][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(5deg)',
								}}
								to={`/colors/${deceased.char_id}`}>
								<img
									key={deceased.char_id}
									className='image-in-collage'
									src={deceased.img}
									alt={deceased.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>green</h3>
					{presumedDead.slice(0, 5).map((presumedDead, i) => (
						<div
							key={presumedDead.char_id}
              className='color-collage'
              
              id={`cc${i + 1}`}
              style={{
								marginLeft: `${randomIntegers[3][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
              
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(40deg)',
								}}
								to={`/colors/${presumedDead.char_id}`}>
								<img
									key={presumedDead.char_id}
									className='image-in-collage'
									src={presumedDead.img}
									alt={presumedDead.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[4][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[5][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[6][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[7][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[8][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>
        
				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'>red</h3>
					{alive.slice(0, 5).map((alive, i) => (
						<div
							key={alive.char_id}
              className='color-collage'
              
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[9][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
                
							<Link
								className='image-link'
								style={{
									filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
								}}
								to={`/colors/${alive.char_id}`}>
								<img
									key={alive.char_id}
									className='image-in-collage'
									src={alive.img}
									alt={alive.name}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
