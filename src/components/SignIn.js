import React from 'react';

function SignIn(props) {
	return (
		<>
			<div className='signIn'>
				<form autoComplete="yeeyee">
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						id='username'
						name='username'
						autoComplete="yeeyee"
						placeholder='username'
					/>
					
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='password'
						id='password'
						name='password'
						placeholder='password'
					/>
					
					<button className="signInButton" onClick={props.checkSubmit} type='submit' name='signIn'>
						===>
					</button>
					<p className={props.isUserFound ? 'hidden' : 'isUserFound'}>user not found!</p>
				</form>
			</div>
		</>
	);
}

export default SignIn;
