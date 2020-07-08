import React from 'react';

const PieceForm = ({ piece, artistId, handleSubmit, handleChange }) => {
	return (
		<>
			<div className='submitArt'>
				<form className='piece-form' onSubmit={handleSubmit}>

					<label htmlFor='title' className='form-title'>
						title
					</label>
					<input
						className='inputBox'
						placeholder='title'
						onChange={handleChange}
						defaultValue={piece.title}
						name='title'
						required
						id='title'
					/>

					<label htmlFor='artist' className='form-title'>
						artist
					</label>
					<input
						className='inputBox'
						placeholder='artist address'
						defaultValue={piece.artist}
						name='artist'
						onChange={handleChange}
						required
						id='artist'
					/>

					<label htmlFor='information' className='form-title'>
						info / bio
					</label>
					<input
						className='inputBox'
						placeholder='info / bio'
						defaultValue={piece.information}
						name='information'
						onChange={handleChange}
						required
						id='information'
					/>

					<label htmlFor='location' className='form-title'>
						location
					</label>
					<input
						className='inputBox'
						placeholder='(city, state / country)'
						defaultValue={piece.location}
						name='location'
						onChange={handleChange}
						required
						id='location'
					/>

					<label htmlFor='website' className='form-title'>
						site
					</label>
					<input
						className='inputBox'
						placeholder='website address / portfolio'
						defaultValue={piece.artist_website}
						name='website'
						onChange={handleChange}
						required
						id='website'
					/>

					<button className='submit-button' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default PieceForm;





	/* <form autoComplete='yeeyee'>
					<input
						className='inputBox'
						onChange={props.handleChange}
						type='text'
						id='title'
						name='title'
						autoComplete='yeeyee'
						placeholder='title'
					/>

					<input
						className='inputBox'
						onChange={props.handleChange}
						type='text'
						id='artist'
						name='artist'
						placeholder='artist'
					/>

					<select
						name='colorSelect'
						id='colorSelect'
						onChange={props.handleChange}
						className='select'>
						{colorChoices}
					</select>

					<select
						name='mediumSelect'
						id='mediumSelect'
						onChange={props.handleChange}
						className='select'>
						{mediumChoices}
					</select>

					<button
						className='artSubmit'
						onClick={props.submitArt}
						type='submit'
						name='submit'>
						===>
					</button>
				</form> */



// <div className='submitArtContainer'>
// 				<ArtistForm handleChange={props.handleChange}/>
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
