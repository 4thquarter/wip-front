import React from 'react';
import NavCircle from './NavCircle'
import '../css/Welcome.css'

import { motion } from 'framer-motion';

const Welcome = () => {
	
	const icon = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			fill: 'rgba(255, 255, 255, 0)',
		},
	};

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
				<div className='welcome-nav-outlining'>
					<motion.svg
						xmlns='http://www.w3.org/2000/svg'width='200px' height='200px' 
						className='item'>
						<motion.path
							d='
          M 100, 100
          m -75, 0
          a 75,75 0 1,0 150,0
          a 75,75 0 1,0 -150,0
          '
							variants={icon}
							initial='hidden'
							animate='visible'
							transition={{
								default: { duration: 2, ease: 'easeInOut' },
								fill: { duration: 2, ease: [1, 0, 0.8, 1] },
							}}
						/>
					</motion.svg>
				</div>
				
				<div className='welcome'>
					<div className='welcome-content'>
						<span className='welcome-header'>
							WIP<span className='blinker'>_</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default Welcome;