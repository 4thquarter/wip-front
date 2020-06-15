import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory, Switch } from 'react-router-dom';
import { motion } from 'framer-motion'
// import useHorizontal from '@oberon-amsterdam/horizontal';

import './App.css';

import Welcome from './components/Welcome';

import NavCircle from './components/NavCircle';
import Colors from './components/Colors';
import Mediums from './components/Mediums';
// import Artists from './components/Artists';
// import ArtistCreate from './components/ArtistCreate';
import ArtistDetail from './components/ArtistDetail';
// import ArtistEdit from './components/ArtistEdit';
// import ArtistForm from '.components/ArtistForm';
// import PieceCreate from './components/PieceCreate';
import PieceDetail from './components/PieceDetail';
// import PieceEdit from './components/PieceEdit';
// import PieceForm from 'components/PieceForm';

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
	const [completedEmail, setcompletedEmail] = useState(null);

	const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
	const [hideSignOut, setHideSignOut] = useState(true);

	//hooks for adding art
	const [title, setTitle] = useState(null);
	const [artist, setArtist] = useState(null);
	const [color, setColor] = useState(null);
	const [medium, setMedium] = useState(null);
	const [description, setDescription] = useState(null);

	// const [thisPage, setThisPage] = useState(null)
	// const [lastPage, setLastPage] = useState(null)

	const [lastPage, setLastPage] = useState([null, null]);

	const history = useHistory();

	const [scrollValue, setScrollValue] = useState(0);
	const [colorValue, setColorValue] = useState(0);

	useEffect(() => {
		console.log('samrussell.com x Andrés Ortiz Montalvo  ϟ  2020');

		window.addEventListener('scroll', onScroll);

    window.addEventListener('wheel', onAttemptedScroll);
		
		// window.addEventListener('mousemove', onMouseMove)
		
		let access = localStorage.getItem('accessToken')
					console.log(access)
		let username = localStorage.getItem('username')
					console.log(username);
		if (username != 'signedOut') {
			setcompletedUsername(username)
		}
		
		
		// FOR PRODUCTION ONLY
    // function onMouseMove() {
		// 	for(let i=0; i<20; i++) {
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	console.log('|')
		// 	}
		// 	console.log('V')
		// 	console.log('samrussell.com x Andrés Ortiz Montalvo  ϟ  2020')
		// 	window.removeEventListener('mousemove', onMouseMove)
		// }
    
		return history.listen((location) => {
			// console.log(location.pathname);
			// console.log(location);

			let thisPageLocal = location.pathname;

			setLastPage((lastPage) => [lastPage[1], thisPageLocal]);

			switch (lastPage) {
				case '/':
					break;
			}
		});
	}, [completedUsername, history, lastPage, username]);

	
  
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

	let signUpInformation;
	let signInInformation;

	function checkSubmit(event) {
		event.preventDefault();
		console.log('checking submit');

		switch (event.target.name) {
			case 'signUp':
				if (username === null) break;

			case 'signIn':
				if (email === null) break;

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
					console.log(response.json());
					setError('invalid email.');
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
			.catch((error) => {
				console.error(error);
			});
	}

	function signIn(body) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(signInInformation),
		};

		let dataVariable = null;

		fetch('https://q4backend.herokuapp.com/api/token/', requestOptions)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					// console.log(requestOptions)
					let data = response.json();
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
					localStorage.setItem('accessToken', `${data.access}`);
					let access = localStorage.getItem('accessToken');
					console.log(access);
					localStorage.setItem('username', `${username}`);
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
			.catch((error) => {
				console.error(error);
			});
	}

	function onScroll() {
		if (window.screen.width > 500) {
			const scrollValue = window.scrollX;
			setScrollValue(scrollValue);
		} else {
			const scrollValueY = window.scrollY;
			setScrollValue(scrollValueY);
		}
		// console.log(`onScroll, window.scrollX: ${scrollValue}`)
	}

	function onAttemptedScroll(e) {
		let y = e.deltaY;
		// console.log(y);

		if (window.screen.width > 500) {
			// console.log('big screen')
			window.scrollBy(y, 0);
		} else {
			return;
		}
	}


	function onScroll(event) {    
    if (window.screen.width > 500) {
      const scrollValue = window.scrollX;
			setScrollValue(scrollValue);
			
			let path = window.location.pathname
			
			let w =  window.innerWidth
			// console.log(w > scrollValue)
			
			if (path = '/colors') {
				// console.log('colors');
				
				switch(true) {
					case scrollValue < w: 
					// console.log('black');
					setColorValue('black')
					break;
					case scrollValue > w * 1.2 && scrollValue < w * 3.5:
					setColorValue('rgb(255, 170, 0)'); //BLUE WITH   YELLOW
					break;
					case scrollValue > w * 3.5 && scrollValue < w * 5.5:
					setColorValue('#2245AD'); //RED WITH   BLUE
					break;
					case scrollValue > w * 5.5 && scrollValue < w * 7:
					setColorValue('#FF8100'); //GREEN WITH    ORANGE
					break;
					case scrollValue > w * 7 && scrollValue < w * 8.5:
					setColorValue('#40077D'); //YELLOW WITH   PURPLE
					break;
					case scrollValue > w * 9 && scrollValue < w * 11:
					setColorValue('#FA1001'); //PURPLE WITH     RED
					break;
					case scrollValue > w * 11 && scrollValue < w * 13:
					setColorValue('#24874E'); //ORANGE WITH   GREEN
					break;
					case scrollValue > w * 13 && scrollValue < w * 14.5:
					setColorValue('#FFE8CB'); //BROWN WITH   PARCHMENT
					break;
					case scrollValue > w * 14.5 && scrollValue < w * 16:
					setColorValue('white'); //BLACK WITH   WHITE
					break;
					case scrollValue > w * 16.5 && scrollValue < w * 17.5:
					setColorValue('black'); //WHITE WITH   BLACK
					break;
					case scrollValue > w * 17.5 && scrollValue < w * 19.5:
					setColorValue('black'); //MIXED WITH   BLACK
					break;
				}
				}
			} else {
      const scrollValueY = window.scrollY
			setScrollValue(scrollValueY);
    };
    // console.log(`onScroll, window.scrollX: ${scrollValue}`)
	}
	
	
	const colorAnimation = {
		backgroundColor: `${colorValue}`,
	};
	
		const navAnimation = {
		transform: `rotate(${scrollValue / 20}deg)`,
		position: 'absolute',
	};
	
  
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
	

	
	
	
	
	// SIGN OUT
	
	function signOut() {
		localStorage.setItem('accessToken', 'signedOut')
		localStorage.setItem('username', 'signedOut')
		setcompletedUsername(null)
		setcompletedEmail(null)
		history.push('/')
		// window.location.pathname = '/'
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	function submitArt(body) {
		// POST request using fetch inside useEffect React hook
		console.log('submitting art');

		const newArtInformation = {
			title: title,
			description: description,
			primary_palette: color,
			medium: medium,
			artist: artist,
		};

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newArtInformation),
		};

		console.log(requestOptions);

		fetch('https://q4backend.herokuapp.com/signup/', requestOptions)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					console.log(response.json());
					setError('invalid email.');
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
			.catch((error) => {
				console.error(error);
			});
	}
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	// animate={{ backgroundColor: ["#60F", "#09F", "#FA0"] }} transition={{ type: 'tween', duration: 2}}
	
	


	

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
		<motion.div className='wrapper' style={colorAnimation} >
			<div className="general-nav-position-and-size">
				<NavCircle navAnimation={navAnimation} />
			</div>

			<Switch>
				<Route
					path='/'
					exact={true}
					render={() => {
						return (
							<>
								<Welcome />
							</>
						);
					}}
				/>
				<Route exact path='/colors' component={Colors} />
				<Route exact path='/mediums' component={Mediums} />
				{/* <Route exact path='/artists' component={Artists} /> */}
				{/* <Route exact path='/artists/create' component={ArtistCreate} /> */}
				<Route exact path='/artists/:id' component={ArtistDetail} />
				{/* <Route exact path='/artists/:id/edit' component={ArtistEdit} /> */}
				{/* <Route exact path='/pieces/create' component={PieceCreate} /> */}
				<Route exact path='/pieces/:id' component={PieceDetail} />
				{/* <Route exact path='/pieces/:id/edit' component={PieceEdit} /> */}
			</Switch>

			<Route
				path='/user'
				exact={true}
				render={() => {
					return (
						<>
							{/* USER BUTTON */}
							<div className='user'>
								<Link
									to={completedUsername ? `${completedUsername}` : 'usersign'}>
									{/* GENERIC USER HEADER */}
									<h2
										className={completedUsername ? 'hidden' : 'userButton1'}
										name='user'>
										user
									</h2>
									<h2
										className={completedUsername ? 'hidden' : 'userButton1'}
										name='user'>
										user
									</h2>
									<h2
										className={completedUsername ? 'hidden' : 'userButton1'}
										name='user'>
										user
									</h2>
									<h2
										className={completedUsername ? 'hidden' : 'userButton1'}
										name='user'>
										user
									</h2>
									<h2
										className={completedUsername ? 'hidden' : 'userButton1'}
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
							<Art match={routerProps.match} artData={artData} />
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
								<h1 className='signInHeader'>[wip] // sign in</h1>
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
								<h1 className='usernameHeader'>[wip] // {completedUsername}</h1>
							</Link>
							<User
								handleChange={handleChange}
								// submitArt={submitArt}
							/>
							<h2 className="signOutButton" onClick={signOut}>sign out</h2>
						</>
					);
				}}
			/>
		</motion.div>
	);
}

export default App;
