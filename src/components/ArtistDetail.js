import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BACKENDURL } from '../config';
import { motion } from 'framer-motion';
import '../css/ArtistDetail.css';

const ArtistDetail = ({ match }) => {
	window.scrollTo(0, 0);

	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [artist, setArtist] = useState(null);

	useEffect(() => {
		const url = `${BACKENDURL}/artists/${match.params.id}`;
		let response = null;
		fetch(url)
			.then((res) => {
				response = res.json();
				return response;
			})
			.then((response) => {
				setArtist([response]);
			})
			.catch(() => {
				setError(true);
			});

		console.log(response);
		// eslint-disable-next-line
	}, []);

	const onDeletedArtist = (e) => {
		const url = `${BACKENDURL}/artists/${match.params.id}`;
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
			<div style={entranceText}>
				Sorry, the artist is out on a spiritual retreat.
			</div>
		);
	}
	if (!artist) {
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
				<span className='page-title'>
					{artist[0].name}
					<span className='blinker'>_</span>
				</span>
				<img src={artist[0].media[0]} className='details-image' alt='' />
				<ul className='details-text-1'>
					<li className='details-property'>{artist[0].name}</li>
					{/* <li className='details-value'></li> */}

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].location}</li>

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].information}</li>

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].email}</li>

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].artist_website}</li>
				</ul>
				<div className='details-hor-gallery'>
					{artist[0].artwork.map((artwork) => (
						<div key={artwork.id}>
							<Link className='artist-piece' to={`/pieces/${artwork.id}`}>
								<img
									src={artwork.media[0].media_url}
									alt={artwork.media[0].name}
								/>
							</Link>
						</div>
					))}
				</div>
				<Link className='anchor-to-fix' to={`/artists/${match.params.id}/edit`}>
					<button className='details-update-button'>Edit</button>
				</Link>
				<button className='details-delete-button' onClick={onDeletedArtist}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ArtistDetail;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Artist({ match, props }) {

// 	useEffect(() => {
// 		fetchArtist();
// 	}, []);

// 	const [artist, setArtist] = useState([]);

// 	const fetchArtist = async () => {
// 		const fetchArtist = await fetch(
// 			`https://q4backend.herokuapp.com/artists/${match.params.id}`
// 		);
// 		const artist = await fetchArtist.json();
// 		setArtist(artist[0]);
// 	};

//   let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'gray', 'mixed']
//   let mediums = ['music', 'garment', 'painting', 'sculpture', 'photo', 'writing', 'drawing', 'graphic', 'website', 'mixed']

// 	const colorChoices = colors.map((color) => {
// 		return <option value={color._id} key={color._id}>{color}</option>;
// 	});

// 	const mediumChoices = mediums.map((medium) => {
// 		return <option value={medium._id} key={medium._id} >{medium}</option>;
// 	});

//   return (
//     <>
// 			<div className='submitArt'>
// 				<form autoComplete="yeeyee">

// 					<input
// 						className="inputBox"
// 						onChange={props.handleChange}
// 						type='text'
// 						id='title'
// 						name='title'
// 						autoComplete="yeeyee"
// 						placeholder='title'
// 					/>

// 					<input
// 						className="inputBox"
// 						onChange={props.handleChange}
// 						type='text'
// 						id='artist'
// 						name='artist'
// 						placeholder='artist'
// 					/>

//           <select
// 						name='colorSelect'
// 						id='colorSelect'
// 						onChange={props.handleChange}
// 						className="select"
// 						>
// 						{colorChoices}
// 					</select>

//           <select
// 						name='mediumSelect'
// 						id='mediumSelect'
// 						onChange={props.handleChange}
// 						className="select"
// 						>
// 						{mediumChoices}
// 					</select>

// 					<button className="artSubmit" onClick={props.submitArt} type='submit' name='submit'>
// 						===>
// 					</button>

// 				</form>
// 			</div>
// 		</>
//   )
// }

// export default Artist;
