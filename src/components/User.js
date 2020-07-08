import React from 'react';
import { useHistory } from 'react-router-dom';

function User(props) {
	let history = useHistory();

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

	// const colorChoices = colors.map((color) => {
	// 	return (
	// 		<option value={color._id} key={color._id}>
	// 			{color}
	// 		</option>
	// 	);
	// });

	// const mediumChoices = mediums.map((medium) => {
	// 	return (
	// 		<option value={medium._id} key={medium._id}>
	// 			{medium}
	// 		</option>
	// 	);
	// });
	
	let userArtists = null
	
	// const artistHeader = props.userArtist[0] != 'signedOut' ? :
	
	if (props.userArtists !== 'signedOut') {
		// console.log('yee');
		
		userArtists = props.userArtists.map((artist, i) => {
		return (<a
		className={'artistLink'}
		onClick={(e) => {
			e.preventDefault();
			history.push(`/artists/${artist.id}`);
		}}
		style={{cursor: 'pointer'}}
		key={artist.id}>
			
			<h1 key={artist.id} className='artistHeader' id={'artistHeader' + (i+1)}>{artist.name}</h1>
			
		</a>
		)
	});
};
	

	return (
		<>
			<div className='artistHeadersContainer'>{userArtists}</div>
			<div className='submitArtContainer'>
				<p className={props.error ? 'error' : 'hidden'}>{props.error}</p>
				<p className={props.userArtists[2] ? 'hidden' : 'newArtistHeader'}>NEW ARTIST</p>
				<form className={props.userArtists[2] ? 'hidden' : 'artist-form'}>
					<input
						className='inputBox'
						placeholder='name / pseudonym'
						name='name'
						onChange={props.handleChange}
						required
						id='name'
					/>

					<input
						className='inputBox'
						placeholder='info / bio'
						name='information'
						onChange={props.handleChange}
						required
						id='information'
					/>

					<input
						className='inputBox'
						placeholder='location'
						name='location'
						onChange={props.handleChange}
						required
						id='location'
					/>

					<input
						className='inputBox'
						placeholder='website / portfolio'
						name='website'
						onChange={props.handleChange}
						required
						id='website'
					/>

					<button
						className='artSubmit'
						onClick={props.submitArtist}
						type='submit'
						name='submit'>
						===
					</button>
				</form>
			</div>
		</>
	);
}

export default User;
