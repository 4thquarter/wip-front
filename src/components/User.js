import React from 'react';

function User(props) {
	
  let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'gray', 'mixed']
  let mediums = ['music', 'garment', 'painting', 'sculpture', 'photo', 'writing', 'drawing', 'graphic', 'website', 'mixed']
	
	const colorChoices = colors.map((color) => {
		return <option value={color._id} key={color._id}>{color}</option>;
	});
	
	const mediumChoices = mediums.map((medium) => {
		return <option value={medium._id} key={medium._id} >{medium}</option>;
	});
	
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
						{colorChoices}
					</select>
          
          <select
						name='mediumSelect'
						id='mediumSelect'
						onChange={props.handleChange}
						className="select"
						>
						{mediumChoices}
					</select>
					
					<button className="artSubmit" onClick={props.submitArt} type='submit' name='submit'>
						===>
					</button>
          
				</form>
			</div>
		</>
  )
}

export default User;