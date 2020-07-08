import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BACKENDURL } from '../config';
import PieceForm from './PieceForm.js';
import '../css/PieceCreate.css'

const PieceCreate = () => {
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

	// if (createdId) {
	// 	return <Redirect to={`/pieces/${createdId}`} />;
	// }
	
	let colors = [
		'red',
		'blue',
		'yellow',
		'green',
		'purple',
		'orange',
		'brown',
		'black',
		'white',
		'gray',
		'mixed',
	];
	let mediums = [
		'music',
		'garment',
		'painting',
		'sculpture',
		'photo',
		'writing',
		'drawing',
		'graphic',
		'website',
		'mixed',
	];

	const colorChoices = colors.map((color) => {
		return (
			<option value={color._id} key={color._id}>
				{color}
			</option>
		);
	});

	const mediumChoices = mediums.map((medium) => {
		return (
			<option value={medium._id} key={medium._id}>
				{medium}
			</option>
		);
	});
	
	return (
		<>
			<span className='page-title2'>
				{}
			</span>
			<div className='create-form-header'>
				<h2 className='page-title'>add a piece</h2>
				{error && <p>Something went wrong... Please try again!</p>}
			</div>
			<div className='submitArt'>
				<form autoComplete='yeeyee' className="pieceForm">
					<input
						className='inputBox'
						onChange={handleChange}
						type='text'
						id='title'
						name='title'
						autoComplete='yeeyee'
						placeholder='"title"'
					/>

					<select
						name='colorSelect'
						id='colorSelect'
						onChange={handleChange}
						className='select'>
						<option value="" selected data-default>color</option>
						{colorChoices}
					</select>

					<select
						name='mediumSelect'
						id='mediumSelect'
						onChange={handleChange}
						className='select'>
						<option value="" selected data-default>medium</option>
						{mediumChoices}
					</select>

					<button
						className='artSubmit'
						onClick={handleSubmit}
						type='submit'
						name='submit'>
						===>
					</button>
				</form>
			</div>
		</>
	);
};

export default PieceCreate;
