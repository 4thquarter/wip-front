import React, { useState } from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { BACKENDURL } from '../config';
import PieceForm from './PieceForm.js';
import '../css/PieceCreate.css'

const PieceCreate = ({props, match}) => {
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
	const [error, setError] = useState(false);
	
	const history = useHistory()
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

	const colorChoices = colors.map((color, i) => {
		return (
			<option key={i}>
				{color}
			</option>
		);
	});

	const mediumChoices = mediums.map((medium, i) => {
		return (
			<option key={i}>
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
