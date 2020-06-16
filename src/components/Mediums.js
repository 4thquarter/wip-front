// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BACKENDURL } from '../config';

export default Mediums;

// function Colors(props) {
// let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'brown', 'black', 'white', 'grey']



function Mediums(props) {
	useEffect(() => {
		getRandomIntegers();
		fetchMediums();
  }, []);
  
  let mediums = ['music', 'garment', 'painting', 'sculpture', 'photo', 'writing', 'drawing', 'graphic', 'website']
	
	const history = useHistory();

  const [pieces, setPieces] = useState([]);
  
	const [music, setmusic] = useState([]);
	const [garment, setgarment] = useState([]);
	const [painting, setpainting] = useState([]);
	const [sculpture, setsculpture] = useState([]);
	const [photo, setphoto] = useState([]);
	const [writing, setwriting] = useState([]);
	const [drawing, setdrawing] = useState([]);
	const [graphic, setgraphic] = useState([]);
	const [website, setwebsite] = useState([]);

	const [randomIntegers, setRandomIntegers] = useState([]);

	// const fetchColors = async () => {
	// 	const colorsData = await fetch(
	// 		'https://www.breakingbadapi.com/api/characters'
	// 	);
	// 	const colors = await colorsData.json();
	// 	setColors(colors);
	// };

	const fetchMediums = async () => {
		const piecesData = await fetch(
			'https://q4backend.herokuapp.com/artwork/'
			// `${BACKENDURL}/pieces`
		);
		const initialPieces = await piecesData.json();
		// console.log(pieces);

		const pieces = initialPieces.sort(() => Math.random() - 0.5);
		// console.log(colors);

		let music = [];
		let garment = [];
		let painting = [];
		let sculpture = [];
		let photo = [];
		let writing = [];
		let drawing = [];
		let graphic = [];
		let website = [];

		pieces.map((piece) => {
			switch (piece.medium) {
				case 'music':
					if (piece.media[0]) {
					music.push(piece);
					}
					break;
				case 'garment':
					if (piece.media[0]) {
					garment.push(piece);
					}
					break;
				case 'painting':
					if (piece.media[0]) {
					painting.push(piece);
					}
					break;
				case 'sculpture':
					if (piece.media[0]) {
					sculpture.push(piece);
					}
					break;
				case 'photo':
					if (piece.media[0]) {
					photo.push(piece);
					}
					break;
				case 'writing':
					if (piece.media[0]) {
					writing.push(piece);
					}
					break;
				case 'drawing':
					if (piece.media[0]) {
					drawing.push(piece);
					}
					break;
				case 'graphic':
					if (piece.media[0]) {
					graphic.push(piece);
					}
					break;
				case 'website':
					if (piece.media[0]) {
					website.push(piece);
					}
					break;
				default:
					break;
			}
		});

		setPieces(pieces);

		setmusic(music);
		setgarment(garment);
		setpainting(painting);
		setsculpture(sculpture);
		setphoto(photo);
		setwriting(writing);
		setdrawing(drawing);
		setgraphic(graphic);
		setwebsite(website);
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
			<div className='mediumsGalleryHolder'>
				<div className='mediumCollageHolder' id='mediumsGalleryEntrance'>
					<motion.h2
						className='entranceText'
						animate={{
							medium: [
								'#E02200',
								'#00B82D',
								'#2C3EAD',
								'#FA0',
								'#9500B8',
								'#E04A00',
							],
						}}
						transition={{ type: 'tween', duration: 10, yoyo: Infinity }}>
						<motion.span style={{ medium: '#695F49' }}>♠</motion.span> ♦ ♣ ♥
						explore medium gallery ⟶
					</motion.h2>
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{music.slice(0, 5).map((music, i) => (
						<div
							key={music.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[0][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${music.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={music.id}
									className='image-in-collage'
									src={music.media[0].media_url}
									alt={music.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{garment.slice(0, 5).map((garment, i) => (
						<div
							key={garment.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[1][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${garment.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={garment.id}
									className='image-in-collage'
									src={garment.media[0].media_url}
									alt={garment.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{painting.slice(0, 5).map((painting, i) => (
						<div
							key={painting.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[2][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${painting.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={painting.id}
									className='image-in-collage'
									src={painting.media[0].media_url}
									alt={painting.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{sculpture.slice(0, 5).map((sculpture, i) => (
						<div
							key={sculpture.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[3][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${sculpture.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={sculpture.id}
									className='image-in-collage'
									src={sculpture.media[0].media_url}
									alt={sculpture.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{photo.slice(0, 5).map((photo, i) => (
						<div
							key={photo.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[4][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${photo.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={photo.id}
									className='image-in-collage'
									src={photo.media[0].media_url}
									alt={photo.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{writing.slice(0, 5).map((writing, i) => (
						<div
							key={writing.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[5][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${writing.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={writing.id}
									className='image-in-collage'
									src={writing.media[0].media_url}
									alt={writing.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{drawing.slice(0, 5).map((drawing, i) => (
						<div
							key={drawing.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[6][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${drawing.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={drawing.id}
									className='image-in-collage'
									src={drawing.media[0].media_url}
									alt={drawing.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{graphic.slice(0, 5).map((graphic, i) => (
						<div
							key={graphic.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[7][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${graphic.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={graphic.id}
									className='image-in-collage'
									src={graphic.media[0].media_url}
									alt={graphic.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='mediumCollageHolder'>
					<h3 className='medium-collage-title'></h3>
					{website.slice(0, 5).map((website, i) => (
						<div
							key={website.id}
							className='medium-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[8][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${website.id}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={website.id}
									className='image-in-collage'
									src={website.media[0].media_url}
									alt={website.name}
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

