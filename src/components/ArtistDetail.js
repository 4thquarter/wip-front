import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { BACKENDURL } from '../config';
import { motion } from 'framer-motion';
import PieceCreate from './PieceCreate';
import '../css/ArtistDetail.css';

const ArtistDetail = ({ match, deleteArtist }) => {
	const history = useHistory();

	window.scrollTo(0, 0);

	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [artist, setArtist] = useState(null);
	const [artistName, setArtistName] = useState(null);
	const [artistId, setArtistId] = useState(null);
	// const [artistIsSet, setArtistIsSet] = useState(false);

	useEffect(() => {
		const url = `${BACKENDURL}/artists/${match.params.id}`;
		let response = null;
		fetch(url)
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					// console.log(requestOptions)
					let response = res.json();
					// console.log(data)
					return response;
				} else {
					// console.log(response.json())
					setError('not found.');
					throw Error(res.statusText);
				}
			})
			.then((response) => {
				setArtist([response]);
				setArtistName([response.name]);
				setArtistId([response.id]);localStorage.setItem('latestArtistId', response.id);
				// console.log(localStorage.getItem('latestArtistId'))
			})
			// .then(() => {
			// 	setArtistIsSet(true);
			// })
			.catch((error) => {
				console.error(error);
			});

		// console.log(response);
		// eslint-disable-next-line
	}, []);

	
	
	const onDeletedArtist = (e) => {
		const url = `${BACKENDURL}/artists/${match.params.id}`;

		fetch(url, {
			method: 'DELETE',
			headers: {
				// 'content-type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then((res) => {
				setDeleted(true);
				deleteArtist(match.params.id)
				history.push(`/${localStorage.getItem('username')}`)
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
			<div className='details'>
				<motion.h2
					className='loading'
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
					transition={{
						type: 'tween',
						duration: 7,
						yoyo: Infinity,
					}}>
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
				<span className='page-title2'>
					{artist[0].name}
					<span className='blinker'>_</span>
				</span>
				<img src={artist[0].media[0]} className='details-image' alt='' />
				<ul className='details-text-1'>
					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].name}</li>

					<br />
					<br />

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].location}</li>
					<br />

					{/* <li className='details-property'></li> */}
					<li className='details-value'>{artist[0].email}</li>
					<br />

					{/* <li className='details-property'></li> */}
					<li to={artist[0].artist_website} className='details-value'>
						{artist[0].artist_website}
					</li>
					<br />
					<br />
					<br />
					{/* <li className='details-property'></li> */}
					<li className={artist[0].information ? 'details-value' : 'hidden'}>
						{artist[0].information}
						{artist[0].id}
					</li>
					<br />
					<br />
					<br />
					{/* <PieceCreate artistName={artistName} artistId={artistId}/> */}
				</ul>
				<div className='details-hor-gallery'>
					{/* {artworkMedia} */}
					{artist[0].artwork.map((artwork) => (
						<motion.div
							key={artwork.id}
							animate={{ opacity: [0, 1] }}
							transition={{
								delay: 2,
								duration: 0.5,
							}}>
							<a
								className='artist-piece'
								id='nav1'
								style={{ cursor: 'pointer' }}
								onClick={(e) => {
									e.preventDefault();
									history.push(`/pieces/${artwork.id}`);
								}}>
								<motion.img
									whileHover={{ scale: 1.1, duration: 0.5 }}
									whileTap={{ scale: 0.9, duration: 0.2 }}
									className='artist-piece-image'
									src={artwork.media[0].media_url}
									alt={artwork.media[0].name}
								/>
							</a>
						</motion.div>
					))}
				</div>
				{/* <Route exact path='/pieces/create' /> */}
				{/* <PieceCreate artistName={artistName} artistId={artistId} /> */}
				{/* <Route exact path='/artists/:id/create' component={PieceCreate} /> */}

				{/* <Link
					className='anchor-to-fix'
					to={`/artists/${artistId}/add_piece`}
					artistId={artistId}
					artistName={artistName}
					// component={PieceCreate}
					// artistName={artistName}
					// artistId={artistId}
				> */}
				<a
				className={'artistLink'}
				onClick={(e) => {
					e.preventDefault();
					history.push(`/artists/${artistId}/addpiece`);
				}}
				style={{cursor: 'pointer'}}>
					<button className='details-add-piece-button'>add piece</button>
				</a>
				
				<button className='details-delete-button' onClick={onDeletedArtist}>
					delete artist
				</button>
			</div>
		</div>
	);
};

export default ArtistDetail;

	// let artworkMedia = (
	// 	<div>
	// 		no pieces found under this artist.
	// 	</div>
	// )

	// if (setArtistIsSet) {
	// 	const artworkMediaIsTrue = artist[0].artwork[0].media[0];

	// 	if (artworkMediaIsTrue) {
	// 		artworkMedia = artist[0].artwork.map((artwork) => (
	// 			<motion.div
	// 				key={artwork.id}
	// 				animate={{ opacity: [0, 1] }}
	// 				transition={{
	// 					delay: 2,
	// 					duration: 0.5,
	// 				}}>
	// 				<a
	// 					className='artist-piece'
	// 					id='nav1'
	// 					style={{ cursor: 'pointer' }}
	// 					onClick={(e) => {
	// 						e.preventDefault();
	// 						history.push(`/pieces/${artwork.id}`);
	// 					}}>
	// 					<motion.img
	// 						whileHover={{ scale: 1.1, duration: 0.5 }}
	// 						whileTap={{ scale: 0.9 }}
	// 						className='artist-piece-image'
	// 						src={artwork.media[0].media_url}
	// 						alt={artwork.media[0].name}
	// 					/>
	// 				</a>
	// 			</motion.div>
	// 		));
	// 	}
	// }
	
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
