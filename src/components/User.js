import React from 'react';

function User(props) {
  
  let mediumOptions = 'list of options'
  let colorOptions = 'list of options'
  
  return (
    <>
			<div className='submitArt'>
				<form autoComplete="yeeyee">
          
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						id='title'
						name='title'
						autoComplete="yeeyee"
						placeholder='title'
					/>
					
					<input
						className="inputBox"
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
						className="select"
						>
						{colorOptions}
					</select>
          
          <select
						name='mediumSelect'
						id='mediumSelect'
						onChange={props.handleChange}
						className="select"
						>
						{mediumOptions}
					</select>
					
					<button className="submitArtButton" onClick={props.submitArt} type='submit' name='submit'>
						===>
					</button>
          
				</form>
			</div>
		</>
  )
}

export default User;