import React from 'react';
import NavCircle from './NavCircle'
import '../css/Welcome.css'

const Welcome = () => {
	return (
		<>
			<div className='welcome-overlay' />
			<div
				className='welcome-wrapper'
				aria-modal
				aria-hidden
				tabIndex={-1}
				role='dialog'>
				<div className='welcome-nav-position-and-size'>
					<NavCircle />
				</div>
				<div className='welcome'>
					<div className='welcome-content'>
						<span className='welcome-header'>
							WIP<span>_</span>
						</span>
						{/* <p className='welcome-text'>
							Before we get started, we need to verify that you're 21+. If so,
							please press confirm to continue.
						</p> */}
						{/* <button className='welcome-close-button'>
							confirm
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
};
export default Welcome;