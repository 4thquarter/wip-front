// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BACKENDURL } from '../config';


// function Colors(props) {
// let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'brown', 'black', 'white', 'grey']



function Artists(props) {
	useEffect(() => {
		getRandomIntegers();
		fetchartists();
	}, []);
	
	const history = useHistory();

	const [pieces, setPieces] = useState([]);
	const [one, setone] = useState([]);
	const [two, settwo] = useState([]);
	const [three, setthree] = useState([]);
	const [four, setfour] = useState([]);
	const [five, setfive] = useState([]);
	const [six, setsix] = useState([]);
	const [seven, setseven] = useState([]);
	const [eight, seteight] = useState([]);
	const [nine, setnine] = useState([]);
	const [ten, setten] = useState([]);

	const [randomIntegers, setRandomIntegers] = useState([]);

	// const fetchartists = async () => {
	// 	const artistsData = await fetch(
	// 		'https://www.breakingbadapi.com/api/characters'
	// 	);
	// 	const artists = await artistsData.json();
	// 	setartists(artists);
	// };

	const fetchartists = async () => {
		const piecesData = await fetch(
			'https://q4backend.herokuapp.com/artwork/'
			// `${BACKENDURL}/pieces`
		);
		const pieces = await piecesData.json();
		// console.log(pieces);

		pieces.sort(() => Math.random() - 0.5);
		// console.log(artists);

		let one = [];
		let two = [];
		let three = [];
		let four = [];
		let five = [];
		let six = [];
		let seven = [];
		let eight = [];
		let nine = [];
		let ten = [];

		pieces.map((piece, i) => {
			switch (true) {
				case piece.artist===2:
					if (piece.media[0]) {
					one.push(piece);
					}
					break;
				case piece.artist===14:
					if (piece.media[0]) {
					two.push(piece);
					}
					break;
				case piece.artist===11:
					if (piece.media[0]) {
					three.push(piece);
					}
					break;
				case piece.artist===4:
					if (piece.media[0]) {
					four.push(piece);
					}
					break;
				case piece.artist===12:
					if (piece.media[0]) {
					five.push(piece);
					}
					break;
				case piece.artist===18:
					if (piece.media[0]) {
					six.push(piece);
					}
					break;
				case piece.artist===16:
					if (piece.media[0]) {
					seven.push(piece);
					}
					break;
				case piece.artist===13:
					if (piece.media[0]) {
					eight.push(piece);
					}
					break;
				case piece.artist===9:
					if (piece.media[0]) {
					nine.push(piece);
					}
					break;
				case piece.artist===10:
					if (piece.media[0]) {
					ten.push(piece);
					}
          break;
        default:
          break;
			}
		});

		setPieces(pieces);

		// console.log(red);
		setone(one);
		settwo(two);
		setthree(three);
		setfour(four);
		setfive(five);
		setsix(six);
		setseven(seven);
		seteight(eight);
		setnine(nine);
		setten(ten)
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
			<div className='artistsGalleryHolder'>
				<div className='artistCollageHolder' id='artistsGalleryEntrance'>
					<motion.h2
						className='entranceText'
						animate={{
							artist: [
								'#E02200',
								'#00B82D',
								'#2C3EAD',
								'#FA0',
								'#9500B8',
								'#E04A00',
							],
						}}
						transition={{ type: 'tween', duration: 10, yoyo: Infinity }}>
						<motion.span style={{ artist: '#695F49' }}>♠</motion.span> ♦ ♣ ♥
						explore artist gallery ⟶
					</motion.h2>
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{one.slice(0, 5).map((one, i) => (
						<div
							key={one.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[0][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${one.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={one.id}
									className='image-in-collage'
									src={one.media[0].media_url}
									alt={one.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{two.slice(0, 5).map((two, i) => (
						<div
							key={two.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[1][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${two.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={two.id}
									className='image-in-collage'
									src={two.media[0].media_url}
									alt={two.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{three.slice(0, 5).map((three, i) => (
						<div
							key={three.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[2][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${three.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={three.id}
									className='image-in-collage'
									src={three.media[0].media_url}
									alt={three.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{four.slice(0, 5).map((four, i) => (
						<div
							key={four.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[3][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${four.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={four.id}
									className='image-in-collage'
									src={four.media[0].media_url}
									alt={four.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{five.slice(0, 5).map((five, i) => (
						<div
							key={five.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[4][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${five.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
								
									key={five.id}
									className='image-in-collage'
									src={five.media[0].media_url}
									alt={five.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{six.slice(0, 5).map((six, i) => (
						<div
							key={six.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[5][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${six.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={six.id}
									className='image-in-collage'
									src={six.media[0].media_url}
									alt={six.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{seven.slice(0, 5).map((seven, i) => (
						<div
							key={seven.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[6][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${seven.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={seven.id}
									className='image-in-collage'
									src={seven.media[0].media_url}
									alt={seven.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{eight.slice(0, 5).map((eight, i) => (
						<div
							key={eight.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[7][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${eight.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={eight.id}
									className='image-in-collage'
									src={eight.media[0].media_url}
									alt={eight.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{nine.slice(0, 5).map((nine, i) => (
						<div
							key={nine.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[8][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${nine.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={nine.id}
									className='image-in-collage'
									src={nine.media[0].media_url}
									alt={nine.name}
								/>
							</a>
						</div>
					))}
				</div>

				<div className='artistCollageHolder'>
					<h3 className='artist-collage-title'></h3>
					{ten.slice(0, 5).map((ten, i) => (
						<div
							key={ten.id}
							className='artist-collage'
							id={`cc${i + 1}`}
							style={{
								marginLeft: `${randomIntegers[9][i]}%`,
								// marginTop: `${randomIntegers[i]}%`,
							}}>
							<a
								className='image-link'
								onClick={(e) => {
									e.preventDefault();
									history.push(`/artists/${ten.artist}`);
								}}
								style={{cursor: 'pointer'}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: .5 }}
									whileTap={{ scale: 0.9 }}
									
									key={ten.id}
									className='image-in-collage'
									src={ten.media[0].media_url}
									alt={ten.name}
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

export default Artists;
