import React, { useState } from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { BACKENDURL } from '../config';
import PieceForm from './PieceForm.js';
import '../css/PieceCreate.css'

<<<<<<< HEAD
const PieceCreate = ({props, match}) => {
=======
const PieceCreate = () => {
>>>>>>> deploy test 1
	const initialPieceState = {
		title: '',
		artist: match.params.id,
		medium: '',
		description: '',
		primary_palette: '',
		owner: 1,
	};
	
	const initialMediaState = {
		title: '',
		file_type: 'image',
		media_url: '',
		owner: 1,
		artwork: '',
	}
	
	const mediaData = new FormData()
	mediaData.set('owner', 1)
	mediaData.set('file_type', 'image')

	const [piece, setPiece] = useState(initialPieceState);
	const [mediaName, setMediaName] = useState(null)
	const [mediaFile, setMediaFile] = useState(null)
	const [createdId, setCreatedId] = useState(null);
<<<<<<< HEAD
	const [error, setError] = useState(false);
	
	const history = useHistory()
=======
  const [error, setError] = useState(false);
>>>>>>> made piece create form, cleaned up a little
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
	
	const handleMediaChange = (e) => {
		e.persist();
		
		setMediaFile(e.target.files[0])
		
		let splitPath = e.target.value.split('\\')
		setMediaName(splitPath[splitPath.length - 1])
	};

    
	const handleSubmit = (e) => {
		e.preventDefault();		
		const url = `${BACKENDURL}/artwork/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(piece),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setCreatedId(data.id);
								
				mediaData.set('artwork', data.id)
				mediaData.set('name', mediaName)
				mediaData.set('media_url', mediaFile)
				

						
						fetch(`${BACKENDURL}/artworkmedia/`, {
							method: 'POST',
							headers: {
								Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
							},
							body: mediaData,
						})
							.then((res) => res.json())
							.then((data) => {
								// console.log(data)
								history.push(`/artists/${match.params.id}`);
							})
				
				
				
				
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

<<<<<<< HEAD
	const colorChoices = colors.map((color, i) => {
		return (
			<option key={i}>
=======
	const colorChoices = colors.map((color) => {
		return (
			<option value={color._id} key={color._id}>
>>>>>>> made piece create form, cleaned up a little
				{color}
			</option>
		);
	});

<<<<<<< HEAD
	const mediumChoices = mediums.map((medium, i) => {
		return (
			<option key={i}>
=======
	const mediumChoices = mediums.map((medium) => {
		return (
			<option value={medium._id} key={medium._id}>
>>>>>>> made piece create form, cleaned up a little
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> made piece create form, cleaned up a little
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
<<<<<<< HEAD
						name='primary_palette'
						id='color'
						onChange={handleChange}
						className='select'
						defaultValue={"DEFAULT"}>
							
						<option value="DEFAULT" disabled>color</option>
						{colorChoices}
						
					</select>

					<select
						name='medium'
						id='medium'
						onChange={handleChange}
						className='select'
						defaultValue={"DEFAULT"}>
							
						<option value="DEFAULT" disabled>medium</option>
						{mediumChoices}
						
					</select>
					
					<label htmlFor="fileUpload" className="custom-file-upload">
				    {mediaName ? mediaName : 'photo'}
					</label>
					<input
						name="media_url"
						className="mediaSubmit"
						id="fileUpload"
						onChange={handleMediaChange}
						type="file"
						accept=".png,.jpg,.jpeg">
					</input>
=======
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
>>>>>>> made piece create form, cleaned up a little

					<button
						className='artSubmit'
						onClick={handleSubmit}
						type='submit'
						name='submit'>
						===>
					</button>
				</form>
			</div>
<<<<<<< HEAD
=======
			<PieceForm
				piece={piece}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
>>>>>>> deploy test 1
=======
>>>>>>> made piece create form, cleaned up a little
		</>
	);
};

export default PieceCreate;
