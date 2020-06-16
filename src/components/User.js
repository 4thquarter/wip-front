import React from 'react';
import { useHistory } from 'react-router-dom'

function User(props) {
	
	let history = useHistory()
	
  let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'gray', 'mixed']
  let mediums = ['music', 'garment', 'painting', 'sculpture', 'photo', 'writing', 'drawing', 'graphic', 'website', 'mixed']
	
	const colorChoices = colors.map((color) => {
		return <option value={color._id} key={color._id}>{color}</option>;
	});
	
	const mediumChoices = mediums.map((medium) => {
		return <option value={medium._id} key={medium._id} >{medium}</option>;
	});
	
	let userArtist = null
	
	// const artistHeader = props.userArtist[0] != 'signedOut' ? :
	
	// if (props.userArtist[0] != 'signedOut') {
	// 	console.log('yee');
		
	// 	userArtist = props.userArtist.map((artist) => {
	// 	return (<a
	// 	className='artistLink'
	// 	onClick={(e) => {
	// 		e.preventDefault();
	// 		history.push(`/artists/${artist.id}`);
	// 	}}
	// 	style={{cursor: 'pointer'}}>
			
	// 		<h1 key={artist.id} className='artistHeader'>{artist.name}</h1>
			
	// 	</a>
	// 	)
	// });
	// 	return userArtist
	// };
	
	
  return (
    <>
		<div className='artistHeadersContainer'>{userArtist}</div>
		<div className='submitArtContainer'>
					<p className={props.error ? 'error' : 'hidden'}>{props.error}</p>

          <form className='artist-form'>

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
						placeholder='email'
						name='email'
						onChange={props.handleChange}
						required
						id='email'
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
					

					<button className="artSubmit" onClick={props.submitArtist} type='submit' name='submit'>
						===>
					</button>
					
				</form>
			</div>
			
			
		</>
  )
}

export default User;