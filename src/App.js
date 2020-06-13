import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

// import useHorizontal from '@oberon-amsterdam/horizontal';

import './App.css';

import Welcome from './components/Welcome';

import NavCircle from './components/NavCircle';
import Colors from './components/Colors';

import Art from './components/Art.js';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import User from './components/User';

import About from './components/About';

function App(props) {
	// useHorizontal();

  
  // const refContainer = useRef(0);

	const [artData, setartData] = useState([]);
	const [error, setError] = useState(null);

	// hooks for login and sign up
	const [email, setEmail] = useState(null);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setconfirmPassword] = useState(null);

	const [isPasswordValid, setisPasswordValid] = useState(true);
	const [isUserFound, setIsUserFound] = useState(true);

	//hook for storing current user info
	//ideally this would be in local storage so refreshing wouldn't break everything
	const [userId, setUserId] = useState('');
	const [completedUsername, setcompletedUsername] = useState(null);
	const [completedEmail, setcompletedEmail] = useState(null)

	const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
	const [hideSignOut, setHideSignOut] = useState(true);

	const history = useHistory();

	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		console.log('samrussell.com x Andrés Ortiz Montalvo  ϟ  2020');
		
		let access = localStorage.getItem('accessToken')
					console.log(access)

		window.addEventListener('scroll', onScroll);
    window.addEventListener('wheel', onAttemptedScroll);
    
		return history.listen((location) => {
			// console.log(location.pathname);
			// console.log('useffecting');

			switch (location.pathname) {
				case '/':
				break;
			}
		});
	}, [completedUsername, history, username]);
	
	
	// window.addEventListener('mouseup', (e) => {
	// 	// Let's pick a random color between #000000 and #FFFFFF
	// 	var colors = ['red', 'green', 'blue', 'yellow'];
		
	// 	// Let's format the color to fit CSS requirements
	// 	const fill = colors[Math.floor(Math.random() * colors.length)]
	
	// 	// Let's apply our color in the
	// 	// element we actually clicked on
	// 	e.target.style.fill = fill
	// })

	// // easy fix for weird state problems
	// window.onload = () => {
	// 	// console.log('window onloading');
	// 	if (window.location.pathname != '/') {
	// 		window.location.assign('/');
	// 	}
	// };


	//SIGNING IN AND UP

	function handleChange(event) {
		// eslint-disable-next-line default-case
		// console.log('handling change');

		switch (event.target.name) {
			case 'email':
				setEmail(event.target.value);
				break;
			case 'username':
				setUsername(event.target.value);
				break;
			case 'password':
				setPassword(event.target.value);
				break;
			case 'confirmPassword':
				setconfirmPassword(event.target.value);
				break;

			default:
				console.log('switch is broke');
		}
	}

	function submitArt(event) {
		console.log('art submitted');
	}

	let signUpInformation;
	let signInInformation;

	function checkSubmit(event) {
		event.preventDefault();
				console.log('checking submit');
				
		switch (event.target.name) {
			case 'signUp':
				if (username === null)
				break;

			case 'signIn':
				if (email === null)
				break;

			default:
				console.log('switch is broke');
				break;
		}
		
		if (password === null) {
			return;
		} else {
			// 			console.log(username);
			setcompletedUsername(username);
			setcompletedEmail(email);
			runSubmit(event);
		}
	}

	function runSubmit(event) {
		event.preventDefault();

		signUpInformation = {
			email: email,
			name: username,
			password: password,
		};
		signInInformation = {
			email: email,
			password: password,
		};
		// console.log(signUpInformation);
		// console.log(signInInformation)

		switch (event.target.name) {
			case 'signUp':
				const match = confirmPassword === password;
				setisPasswordValid(match);
				if (match) {
					signUp();
				}
				break;

			case 'signIn':
				// console.log('signin')
				signIn();
				break;

			default:
				console.log('switch is broke');
				break;
		}
	}

	// SIGN UP AND SIGN IN FUNCTIONS

	const [postId, setPostId] = useState('');

	function signUp(body) {
		// POST request using fetch inside useEffect React hook
		console.log('signing up');

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(signUpInformation),
		};

		console.log(requestOptions);

		fetch('https://q4backend.herokuapp.com/signup/', requestOptions)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					console.log(response.json())
					setError('invalid email.')
					throw Error(response.statusText);
				}
			})
			.then((data) => {
					setPostId(data.id);
					setUserId(data._id);
			})
			.then(() => {
				setPassword(null);
				setconfirmPassword(null);
				setHideSignIn(true);
				history.push(`/${username}`);
				setError(null);
			})
			.catch(error => {
				console.error(error)
			})
			
	}

	
	
	
	
	
	function signIn(body) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(signInInformation),
		};

		let dataVariable = null;

		fetch(
			'https://q4backend.herokuapp.com/api/token/',
			requestOptions
		)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					// console.log(requestOptions)
					let data = response.json()
					// console.log(data)
					return data;
				} else {
					// console.log(response.json())
					setError('invalid login.')
					throw Error(response.statusText);
				}
			})
			.then((data) => {
				console.log(data);
				if (data) {
					localStorage.setItem('accessToken', `${data.access}`)
					let access = localStorage.getItem('accessToken')
					console.log(access)
					console.log('yes data');
					dataVariable = data;
					setPostId(data.id);
					setUserId(data._id);
					
					setIsUserFound(true);
				} else {
					// console.log('bad user');
					console.log('no data');

					// setIsUserFound(false);
				}
			})
			.then(() => {
				if (dataVariable) {
					setPassword(null);
					setconfirmPassword(null);
					setHideSignIn(true);
					setHideSignOut(true);
					history.push(`/${username}`);
				} else {
					setPassword(null);
					setconfirmPassword(null);
				}
			})
			.catch(error => {
				console.error(error)
			})
	}

	function onScroll() {    
    if (window.screen.width > 500) {
      const scrollValue = window.scrollX;
      setScrollValue(scrollValue);
    } else {
      const scrollValueY = window.scrollY
      setScrollValue(scrollValueY);
    };
    // console.log(`onScroll, window.scrollX: ${scrollValue}`)
  }
  
  function onAttemptedScroll(e) {
    let y = e.deltaY;
    // console.log(y);
    
    if (window.screen.width > 500) {
      // console.log('big screen')
      window.scrollBy(y, 0)
    } else {
      return
    }
  }
  

	const navAnimation = {
		transform: `rotate(${scrollValue / 20}deg)`,
		position: 'absolute',
	};

	// d="
	//                  M 100, 100
	//                  m -75, 0
	//                  a 75,75 0 1,0 150,0
	//                  a 75,75 0 1,0 -150,0
	//                  "

	// 	d="M150.7,50v2c12.1,0,23,4.9,30.9,12.8c7.9,7.9,12.8,18.8,12.8,30.9c0,12.1-4.9,23-12.8,30.9
	// c-7.9,7.9-18.8,12.8-30.9,12.8c-12.1,0-23-4.9-30.9-12.8c-7.9-7.9-12.8-18.8-12.8-30.9c0-12.1,4.9-23,12.8-30.9
	// c7.9-7.9,18.8-12.8,30.9-12.8V50v-2C124.4,48,103,69.3,103,95.6c0,26.3,21.4,47.7,47.7,47.7c26.3,0,47.7-21.4,47.7-47.7
	// c0-26.3-21.4-47.7-47.7-47.7V50z"

	return (
		<div className='wrapper'>
			<Route
				path='/'
				exact={true}
				render={() => {
					return (
						<>
							<Welcome
							/>
						</>
					);
				}}
			/>
			<Route path='/colors' exact component={Colors} />
			
			<div className="general-nav-position-and-size">
				<NavCircle navAnimation={navAnimation} />
			</div>
			
			<Route
				path='/user'
				exact={true}
				render={() => {
					return (
						<>
							{/* USER BUTTON */}
							<div className='user'>
								<Link to={completedUsername ? `${completedUsername}` : 'usersign'}>
									{/* GENERIC USER HEADER */}
									<h2
										className={completedUsername ? 'hidden' : 'userButton'}
										name='user'>
										user
									</h2>

									{/* USERNAME HEADER */}
									<h2
										className={completedUsername ? 'userButton' : 'hidden'}
										name='completedUsername'>
										{completedUsername}
									</h2>
								</Link>
							</div>

							{/* <Arts artData={artData} error={error} /> */}
						</>
					);
				}}
			/>
			<Route
				path='/usersign'
				render={() => {
					return (
						<>
							{/* USER BUTTON ON CLICK WHILE NOT SIGNED IN */}
							<div className='userSignIn'>
								<Link to='/signup'>
									<h2 className='navSignButton'>sign up</h2>
								</Link>
								<Link to='/signin'>
									<h2 className='navSignButton'>sign in</h2>
								</Link>
							</div>

						</>
					);
				}}
			/>
			<Route
				path='/Art/:title'
				render={(routerProps) => {
					return (
						<>
							<Link to='/'>
								<h1 className='header' id='artHeader'>
									"Harvard Art"
								</h1>
							</Link>
							<Art
								match={routerProps.match}
								artData={artData}
							/>
						</>
					);
				}}
			/>
			<Route
				path='/about'
				render={() => {
					return (
						<>
							<Link to='/'>
								<h1 className='header'>"Harvard Art"</h1>
							</Link>
							<About />
						</>
					);
				}}
			/>
			<Route
				path='/signup'
				render={() => {
					return (
						<>
							<Link to='/'>
								<h1 className='signUpHeader'>[wip] // sign up</h1>
							</Link>
							<SignUp
								handleChange={handleChange}
								checkSubmit={checkSubmit}
								hideSignUp={hideSignUp}
								isPasswordValid={isPasswordValid}
								error={error}
							/>
						</>
					);
				}}
			/>
			<Route
				path='/signin'
				render={() => {
					return (
						<>
							<Link to='/'>
								<h1 className='signInHeader' >[wip] // sign in</h1>
							</Link>
							<SignIn
								handleChange={handleChange}
								checkSubmit={checkSubmit}
								hideSignIn={hideSignIn}
								isUserFound={isUserFound}
								error={error}
							/>
						</>
					);
				}}
			/>
			<Route
				path={'/' + completedUsername}
				render={() => {
					return (
						<>
							<Link to='/'>
								<h1 className='header'>"User Art" // {completedUsername}</h1>
							</Link>
							<User handleChange={handleChange} submitArt={submitArt} />
						</>
					);
				}}
			/>
		</div>
	);
}

export default App;
