/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { BACKENDURL } from '../config';
import { motion } from 'framer-motion';
import '../css/PieceDetail.css';
// import '../css/Welcome.css';

const PieceDetail = ({ match }) => {
	window.scrollTo(0, 0);

	const history = useHistory()
	
	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [piece, setPiece] = useState(null);
	const [artist, setArtist] = useState(null);
	const [artistId, setArtistId] = useState(null);

	// useEffect(() => {
	// 	const artUrl = `${BACKENDURL}/artwork/${match.params.id}`;
	// 	const artistUrl = `${BACKENDURL}/artist/${match.params.id}`;
	// 	let response = null;
	// 	fetch(url)
	// 		.then((res) => {
	// 			if (res.status >= 200 && res.status <= 299) {
	// 				// console.log(requestOptions)
	// 				let response = res.json();
	// 				// console.log(data)
	// 				return response;
	// 			} else {
	// 				// console.log(response.json())
	// 				setError('not found.');
	// 				throw Error(res.statusText);
	// 			}
	// 		})
	// 		.then((response) => {
	// 			setPiece([response]);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});

	// 	console.log(response);
	// 	// eslint-disable-next-line
	// }, []);

	useEffect(() => {
		fetchPieceDetail();
	}, []);

	async function fetchPieceDetail() {
		const url = `${BACKENDURL}/artwork/${match.params.id}`;
		const piece = await fetch(url)
			.then((response) => response.json())
			// .then((response) => {
			// 	setPiece([response]);
			// })
			.catch(function (error) {
				setError(error);
			});
		const artistId = piece.artist;
		// console.log(`THIS IS ${artistId}`);
		const artist = await fetch(`${BACKENDURL}/artists/${artistId}`).then(
			async (response) => {
				const res = await response.json();
				// console.log(res.name);
				return res.name;
			}
		);
		setArtist(artist);
		setArtistId(artistId)
		setPiece(piece);
	}

	const onDeletedPiece = (e) => {
		const url = `${BACKENDURL}/artwork/${match.params.id}`;
		fetch(url, { 
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then((res) => {
				setDeleted(true);
				history.push(`/artists/${artistId}`)
			})
			.catch(console.error);
	};

	const entranceText = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '250px',
		height: '100px',
		color: '#B6AB92',
		letterSpacing: '2px',
		fontWeight: '800',
		fontStyle: 'normal',
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	};

	if (deleted) {
		return <Redirect to='/pieces' />;
	}
	if (error) {
		return (
			<div style={entranceText}>Sorry, this piece is not in the gallery.</div>
		);
	}
	if (!piece) {
		return (
			<div>
				<motion.h2
					style={entranceText}
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
					transition={{ type: 'tween', duration: 7, yoyo: Infinity }}>
					☯☠♠<motion.span style={{ color: '#695F49' }}>LOADING</motion.span>♠☠☯
				</motion.h2>
			</div>
		);
	}

	return (
		<div className='details'>
			<div className='details-container'>
				<div className='piece-main-image-w1'>
					<motion.div className='piece-main-image-w2'>
						<motion.img
							className='piece-main-image'
							src={piece.media[0].media_url}
							alt={piece.media[0].name}
						/>

						<span className='piece-information'>
							<br />
							<br />

							<div className='piece-information-text-wrapper'>
								<span className='piece-title'>
									{piece.title}
									<span className='blinker'>_</span>
								</span>

								<br />
								<br />
								<Link
									className='piece-information-artist-link'
									to={`/artists/${piece.artist}`}>
									<i>{artist}</i>
								</Link>
								<br />
								<br />
								<i>{piece.medium}</i>
								<br />
								<br />
								<br />
								{piece.description}
								<br />
								<br />
								<br />
								<Link
									className='anchor-to-fix'
									to={`/pieces/${match.params.id}/edit`}>
								</Link>
								<button
									className='details-delete-button'
									onClick={onDeletedPiece}
									id='piece-button2'>
									delete
								</button>
								<br />
								<br />
								<br />
							</div>
						</span>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default PieceDetail;
