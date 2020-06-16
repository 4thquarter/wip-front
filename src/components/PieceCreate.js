import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BACKENDURL } from '../config';
import PieceForm from './PieceForm.js';

const PieceCreate = ({ artistName, artistId }) => {
	const initialPieceState = {
		title: '',
		artist: '',
		medium: '',
		description: '',
		primaryPalette: '',
		secondaryPalette: '',
	};
	const [piece, setPiece] = useState(initialPieceState);
	const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);
	// const [passedArtistName, setPassedArtistName] = useState(match.params.artistName);
	// const [passedArtistId, setPassedArtistId] = useState(artistId);
    
    // console.log(passedArtistName)
    // console.log(match.params.artistId)
    
    const handleChange = (e) => {
		e.persist();
		setPiece({
			...piece,
			[e.target.name]: e.target.value,
		});
	};

    
	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${BACKENDURL}/artists`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=utf-8',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(piece),
		})
			.then((res) => res.json())
			.then((data) => {
                setCreatedId(data.id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/pieces/${createdId}`} />;
	}
	return (
		<>
			<span className='page-title'>
				
				<span className='blinker'>_</span>
			</span>
			<span className='page-title2'>
				{}
				<span className='blinker'>_</span>
			</span>
			<div className='create-form-header'>
				<h2 className='page-title'>{artistName}add a piece</h2>
				{error && <p>Something went wrong... Please try again!</p>}
			</div>
			<PieceForm
				piece={piece}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
                artistId={artistId}
			/>
		</>
	);
};

export default PieceCreate;
