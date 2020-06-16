import React from 'react';

function SignIn(props) {
	return (
		<>
			<div className='signInWrapper'>
			<div className='signIn'>
				<p className={props.isUserFound ? 'hidden' : 'isUserFound'}>user not found!</p>
				<p className={props.error ? 'error' : 'hidden'}>{props.error}</p>
				<form autoComplete="yeeyee">
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						id='email'
						name='email'
						autoComplete="yeeyee"
						placeholder='email'
					/>
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='password'
						id='password'
						name='password'
						placeholder='password'
					/>
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						id='username'
						name='username'
						autoComplete="yeeyee"
						placeholder='who are you?'
					/>
					
					<button className="signInButton" onClick={props.checkSubmit} type='submit' name='signIn'>===</button>
					
				</form>
			</div>
			</div>
		</>
	);
}

export default SignIn;
