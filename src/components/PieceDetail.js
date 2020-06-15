import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BACKENDURL } from '../config';
import { motion } from 'framer-motion';
import '../css/PieceDetail.css';
// import '../css/Welcome.css';

const PieceDetail = ({ match }) => {
	window.scrollTo(0, 0);

	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [piece, setPiece] = useState(null);

	useEffect(() => {
		const url = `${BACKENDURL}/artwork/${match.params.id}`;
		let response = null;
		fetch(url)
			.then((res) => {
				response = res.json();
				return response;
			})
			.then((response) => {
				setPiece([response]);
			})
			.catch(() => {
				setError(true);
			});

		console.log(response);
		// eslint-disable-next-line
	}, []);

	const onDeletedPiece = (e) => {
		const url = `${BACKENDURL}/artwork/${match.params.id}`;
		fetch(url, { method: 'DELETE' })
			.then((res) => {
				setDeleted(true);
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
					<div className='piece-main-image-w2'>
						<img
							className='piece-main-image'
							src={piece[0].media[0].media_url}
							alt={piece[0].media[0].name}
						/>
						<span className='piece-information'>
							<br />
							<br />
							<span className='piece-title'>
								{piece[0].media[0].name}
								<span className='blinker'>_</span>
							</span>
							<br />
							<br />
							<Link
								className='piece-information-artist-link'
								to={`/artists/${piece[0].artist.id}`}>
								<i>artist: {piece[0].artist.name}</i>
							</Link>
							<br />
							<br />
							<i>medium: {piece[0].medium}</i>
							<br />
							<br />
							<br />
							{piece[0].description}
							<br />
							<br />
							<br />
							<Link
								className='anchor-to-fix'
								to={`/pieces/${match.params.id}/edit`}>
								<button className='details-update-button'>Edit</button>
							</Link>
							<button
								className='details-delete-button'
								onClick={onDeletedPiece}>
								Delete
							</button>
							<br />
							<br />
							<br />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PieceDetail;
