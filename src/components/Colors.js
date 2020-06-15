// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default Colors;

// function Colors(props) {
// let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'brown', 'black', 'white', 'grey']

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
    // console.log(arts);
    
    arts.sort(() => Math.random() - 0.5);
    // console.log(colors);
		
		let blue = []
    let red = []
		let green = []
		let yellow  = []
    let purple = []
    let orange = []
    let brown = []
    let black = []
    let white = []
		let gray = []
		let mixed = []
    
    arts.map((art) => {
      switch(art.status) {
				case 'Alive':
          blue.push(art)
          break;
				case '?':
          red.push(art)
					break;
        case 'Deceased':
          green.push(art)
          break;
        case 'Presumed dead':
          yellow.push(art)
          break;
        case 'purple':
          purple.push(art)
          break;
        case 'orange':
          orange.push(art)
          break;
        case 'brown':
          brown.push(art)
          break;
        case 'black':
          black.push(art)
          break;
        case 'white':
          white.push(art)
          break;   
        case 'mixed':
          mixed.push(art)
          break;
      }
    })
    
    setArts(arts);
    
    // console.log(red);
    setUnkown(blue)
    setAlive(red)
		setPresumedDead(green)    
		setDeceased(yellow)

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
					<motion.h2 className='entranceText' 
						animate={{ color: ["#E02200",'#00B82D', "#2C3EAD", "#FA0",  '#9500B8', '#E04A00',] }} 
						transition={{ type: 'tween', duration: 10, yoyo: Infinity}}
						>
						 <motion.span style={{color: '#695F49'}}>♠</motion.span> ♦ ♣ ♥ explore color gallery ⟶
					</motion.h2>
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
					<h3 className='color-collage-title'></h3>
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
