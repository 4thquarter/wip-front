// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BACKENDURL } from '../config';

export default Colors;

// function Colors(props) {
// let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'brown', 'black', 'white', 'grey']



function Colors(props) {
	useEffect(() => {
		getRandomIntegers();
		fetchColors();
	}, []);
	
	const history = useHistory();

	const [pieces, setPieces] = useState([]);
	const [blue, setBlue] = useState([]);
	const [red, setRed] = useState([]);
	const [green, setGreen] = useState([]);
	const [yellow, setYellow] = useState([]);
	const [purple, setPurple] = useState([]);
	const [orange, setOrange] = useState([]);
	const [brown, setBrown] = useState([]);
	const [black, setBlack] = useState([]);
	const [white, setWhite] = useState([]);
	const [mixed, setMixed] = useState([]);

	const [randomIntegers, setRandomIntegers] = useState([]);

	// const fetchColors = async () => {
	// 	const colorsData = await fetch(
	// 		'https://www.breakingbadapi.com/api/characters'
	// 	);
	// 	const colors = await colorsData.json();
	// 	setColors(colors);
	// };

	const fetchColors = async () => {
		const piecesData = await fetch(
			'https://q4backend.herokuapp.com/artwork/'
		);
		const pieces = await piecesData.json();
		// console.log(pieces);

		pieces.sort(() => Math.random() - 0.5);
		// console.log(colors);

		let blue = [];
		let red = [];
		let green = [];
		let yellow = [];
		let purple = [];
		let orange = [];
		let brown = [];
		let black = [];
		let white = [];
		let gray = [];
		let mixed = [];

		pieces.map((piece) => {
			switch (piece.primary_palette) {
				case 'blue':
					if (piece.media[0]) {
					blue.push(piece);
					}
					break;
				case 'red':
					if (piece.media[0]) {
					red.push(piece);
					}
					break;
				case 'green':
					if (piece.media[0]) {
					green.push(piece);
					}
					break;
				case 'yellow':
					if (piece.media[0]) {
					yellow.push(piece);
					}
					break;
				case 'purple':
					if (piece.media[0]) {
					purple.push(piece);
					}
					break;
				case 'orange':
					if (piece.media[0]) {
					orange.push(piece);
					}
					break;
				case 'brown':
					if (piece.media[0]) {
					brown.push(piece);
					}
					break;
				case 'black':
					if (piece.media[0]) {
					black.push(piece);
					}
					break;
				case 'white':
					if (piece.media[0]) {
					white.push(piece);
					}
					break;
				case 'mixed':
					if (piece.media[0]) {
					mixed.push(piece);
					}
					break;
			}
		});

		setPieces(pieces);

		// console.log(red);
		setBlue(blue);
		setRed(red);
		setGreen(green);
		setYellow(yellow);
		setPurple(purple);
		setOrange(orange);
		setBrown(brown);
		setBlack(black);
		setWhite(white);
		setMixed(mixed)
	};

	function getRandomIntegers() {
		let randomIntegers = [];

		for (let j = 0; j < 10; j++) {
			randomIntegers[j] = [];

			for (let i = 0; i < 5; i++) {
				let min = 10;
				let max = 70;
				randomIntegers[j].push(Math.floor(Math.random() * (max - min)) + min);
			}
		}

		setRandomIntegers(randomIntegers);
	}

	return (
		<>
			<div className='colorsGalleryHolder'>
				<div className='colorCollageHolder' id='colorsGalleryEntrance'>
					<motion.h2
						className='entranceText'
						animate={{
							color: [
								'#E02200',
								'#00B82D',
								'#2C3EAD',
								'#FA0',
								'#9500B8',
								'#E04A00',
							],
						}}
						transition={{ type: 'tween', duration: 10, yoyo: Infinity }}>
						<motion.span style={{ color: '#695F49' }}>♠</motion.span> ♦ ♣ ♥
						explore color gallery ⟶
					</motion.h2>
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{blue.slice(0, 5).map((blue, i) => (
						<div
							key={blue.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[0][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${blue.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={blue.id}
									className='image-in-collage'
									src={blue.media[0].media_url}
									alt={blue.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{red.slice(0, 5).map((red, i) => (
						<div
							key={red.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[1][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${red.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={red.id}
									className='image-in-collage'
									src={red.media[0].media_url}
									alt={red.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{green.slice(0, 5).map((green, i) => (
						<div
							key={green.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[2][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${green.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={green.id}
									className='image-in-collage'
									src={green.media[0].media_url}
									alt={green.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{yellow.slice(0, 5).map((yellow, i) => (
						<div
							key={yellow.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[3][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${yellow.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={yellow.id}
									className='image-in-collage'
									src={yellow.media[0].media_url}
									alt={yellow.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{purple.slice(0, 5).map((purple, i) => (
						<div
							key={purple.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[4][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${purple.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={purple.id}
									className='image-in-collage'
									src={purple.media[0].media_url}
									alt={purple.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{orange.slice(0, 5).map((orange, i) => (
						<div
							key={orange.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[5][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${orange.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={orange.id}
									className='image-in-collage'
									src={orange.media[0].media_url}
									alt={orange.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{brown.slice(0, 5).map((brown, i) => (
						<div
							key={brown.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[6][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${brown.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={brown.id}
									className='image-in-collage'
									src={brown.media[0].media_url}
									alt={brown.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{black.slice(0, 5).map((black, i) => (
						<div
							key={black.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[7][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${black.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={black.id}
									className='image-in-collage'
									src={black.media[0].media_url}
									alt={black.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{white.slice(0, 5).map((white, i) => (
						<div
							key={white.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[8][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${white.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={white.id}
									className='image-in-collage'
									src={white.media[0].media_url}
									alt={white.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='colorCollageHolder'>
					<h3 className='color-collage-title'></h3>
					{mixed.slice(0, 5).map((mixed, i) => (
						<div
							key={mixed.id}
							className='color-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[9][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${mixed.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={mixed.id}
									className='image-in-collage'
									src={mixed.media[0].media_url}
									alt={mixed.name}
								/>
							</a>
						</div>
					))}
				</div>
				
				<motion.button 
				animate={{
					backgroundColor: [
						'#E02200',
						'#00B82D',
						'#2C3EAD',
						'#FA0',
						'#9500B8',
						'#E04A00',
					],
				}}
				transition={{ 
					backgroundColor: {type: 'tween', duration: 8, yoyo: Infinity},
					// default: duration: 2
				}}
				whileHover={{ scale: 1.9, rotate: -180, duration: 2 }}
		 	  whileTap={{
			    scale: 0.8,
			    rotate: -180,
			    borderRadius: "100%"
			  }}
				
				className="scrollBackButton" 
				onClick={props.scrollToLeft}
				>
					
						<motion.span 
						animate={{
							color: [
								'#E02200',
								'#00B82D',
								'#2C3EAD',
								'#FA0',
								'#9500B8',
								'#E04A00',
							],
						}}
						transition={{ 
							type: 'tween', duration: 1, yoyo: Infinity 
						}}>
							▧ ▨
						</motion.span>
						
						<br />
						
						<motion.span 
						animate={{
							color: [
								'#E02200',
								'#00B82D',
								'#2C3EAD',
								'#FA0',
								'#9500B8',
								'#E04A00',
							],
						}}
						transition={{ 
							type: 'tween', duration: 1, yoyo: Infinity 
						}}>
							▧ ▨
						</motion.span>
					
				</motion.button>
				
			</div>
		</>
	);
}
