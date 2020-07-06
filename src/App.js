import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory, Switch } from 'react-router-dom';
import { motion } from 'framer-motion'
// import useHorizontal from '@oberon-amsterdam/horizontal';

import './App.css';

import Welcome from './components/Welcome';

import NavCircle from './components/NavCircle';
import Colors from './components/Colors';
import Mediums from './components/Mediums';
import Artists from './components/Artists';

import ArtistDetail from './components/ArtistDetail';
import PieceCreate from './components/PieceCreate';
import PieceDetail from './components/PieceDetail';


// import ArtistForm from '.components/ArtistForm';

// import PieceEdit from './components/PieceEdit';
// import ArtistEdit from './components/ArtistEdit';

// import ArtistCreate from './components/ArtistCreate';


import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import User from './components/User';

function App() {

	// useHorizontal();

	// const refContainer = useRef(0);
	const [artistData, setArtistData] = useState([])
	const [artData, setArtData] = useState([]);
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
	const [userArtists, setUserArtists] = useState([])
	const [userArtist, setUserArtist] = useState([])

	const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
	const [hideSignOut, setHideSignOut] = useState(true);
	

	// hooks for adding artist
	const [name, setName] = useState(null)
	const [information, setInformation] = useState(null)
	const [location, setLocation] = useState(null)
	const [website, setWebsite] = useState(null)
	
	
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
		// console.log('samrussell.com x Andrés Ortiz Montalvo  ϟ  2020');
		console.log('app useffecting')

		window.addEventListener('scroll', onScroll);
		window.addEventListener('wheel', onAttemptedScroll);
		// window.addEventListener('mousemove', onMouseMove)

		
		getArtistData()
		getArtData()
		
		console.log(localStorage['userArtists'])
		
		let access = localStorage.getItem('accessToken')
					// console.log(access)
		let username = localStorage.getItem('username')
					// console.log(username);
		let email = localStorage.getItem('email')
					// console.log(email)
		let userArtistId = localStorage.getItem('userArtistId')
					// console.log(userArtistId);
					setUserArtist([...userArtist, userArtistId])
		let userArtists = JSON.parse(localStorage['userArtists'])
					// console.log(userArtists)
					
		if (username != 'signedOut') {
			setcompletedUsername(username)
			setcompletedEmail(email)
			setUserArtists(userArtists)
		} else {
			setUserArtist(['signedOut'])
			setUserArtists('signedOut')
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

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// ON SCROLL EVENTS
	
	

	function onAttemptedScroll(e) {
		let y = (e.deltaY)*(.8);
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
			
			if (path === '/colors') {
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
	
	
	const scrollToLeft = () => {
		const c = document.documentElement.scrollLeft || document.body.scrollLeft;
		// console.log(c);
		
		if (c > 0) {
			window.requestAnimationFrame(scrollToLeft);
			window.scrollTo(c - c / 20, 0);
		}
	};
	
	
	
	
	
	const colorAnimation = {
		backgroundColor: `${colorValue}`,
	};
	
	const navAnimation = {
		transform: `rotate(${scrollValue / 20}deg)`,
		position: 'absolute',
	};
	
	

	
	
	
	
	
	
	
	
	
	
	// GETTING ARTIST AND ART DATA
	
	
	async function getArtistData() {
		const url = `https://q4backend.herokuapp.com/artists/`;
		const artistsFetched = await fetch(url)
			.then((response) => response.json())
			.then(async (data) => {
				// console.log(data)
				const sortedData = await data.sort(() => Math.random() - 0.5);
				setArtistData(sortedData);
				return sortedData;
			})
			.then((data) => {	
			const userArtists = []
			for (let i=0; i<data.length; i++) {
				if (data[0]) {
					if (data[i].email === completedEmail) {
						// console.log(data[i].owner)
						userArtists.push(data[i])
					}
				}
			}
			// console.log(userArtists);
			localStorage['userArtists'] = JSON.stringify(userArtists)
			return true;
			})
			.catch(function (error) {
				setError(error);
			});

	}
	
	async function getArtData() {
		const url = `https://q4backend.herokuapp.com/artwork/`;
		const artworkFetched = await fetch(url)
			.then((response) => response.json())
			.then(async (data) => {
				// console.log(data)
				const sortedData = await data.sort(() => Math.random() - 0.5);
				setArtData(sortedData);
				return sortedData;
			})
			.then((data) => {
				// console.log('i wonder if this is running');
				return true;
			})
			.catch(function (error) {
				setError(error);
			});

		if (artworkFetched) {
			// console.log('fetched');
			
			// getItemData();
			// getNeedData();
			// setNewItemTier(tierData[0]._id);
		}
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  
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
				
			case 'name':
				setName(event.target.value)
				break;
			case 'information':
				setInformation(event.target.value)
				break;
			case 'location':
				setLocation(event.target.value)
				break;
			case 'website':
				setWebsite(event.target.value)
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
				setHideSignIn(true);
				setError(null);
				signIn();
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
					localStorage.setItem('email', `${email}`);
					
					const userArtists = []
					for (let i=0; i<artistData.length; i++) {
						if (artistData[0]) {
							if (artistData[i].email === email) {
								// console.log(data[i].owner)
								userArtists.push(artistData[i])
								}
						}
					}
					// console.log(userArtists);
					localStorage['userArtists'] = JSON.stringify(userArtists)
					setUserArtists(userArtists)
					
					dataVariable = data;
					setPostId(data.id);
					setUserId(data._id);
					setError(false);
					setIsUserFound(true);
				} else {
					// console.log('bad user');
					console.log('no data');

					// setIsUserFound(false);
				}
			})
			.then(() => {
				if (dataVariable) {
					setEmail(null);
					setUsername(null);
					setPassword(null);
					setconfirmPassword(null);
					
					setHideSignIn(true);
					setHideSignOut(true);
					history.push(`/${username}`);
				} else {
					setEmail(null);
					setUsername(null);
					setPassword(null);
					setconfirmPassword(null);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	

	
	
	
	
	
	// 
	// 
	// 
	// SUBMITTING ARTISTS AND ARTWORK
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	
	
	
	
	
	
	
	
	function submitArtist(event) {
		// POST request using fetch inside useEffect React hook
		event.preventDefault()
		console.log('submitting artist');

		const newArtistInformation = {
			name: name,
			email: completedEmail,
			information: information,
			location: location,
			artist_website: website,
			artist_media: 'none',
			owner: 1,
		};
		
		console.log(newArtistInformation);
		

		const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
			},
			body: JSON.stringify(newArtistInformation),
		};

		console.log(requestOptions);

		fetch('https://q4backend.herokuapp.com/artists/', requestOptions)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					console.log(response.json());
					setError('invalid artist.');
					throw Error(response.statusText);
				}
			})
			.then((data) => {
				console.log(data)
				let newUserArtist = data
				localStorage.setItem('userArtistId', data.id)
				localStorage['userArtists'] = JSON.stringify([...userArtists, newUserArtist])
				setUserArtists([...userArtists, newUserArtist])
			})
			.then(() => {
				setError(null);
			})
			.catch((error) => {
				console.error(error);
			});
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
	
	
	
	
	// DELETING ARTIST
	
	function deleteArtist(id) {
		let number = parseInt(id, 10)
		let newArtists = []
		for (let i=0; i<userArtists.length; i++) {
			if (userArtists[i].id != number) {
				newArtists.push(userArtists[i])
			}
		}
		setUserArtists(newArtists)
		localStorage['userArtists'] = JSON.stringify(newArtists)
	}

	
	
	

		// SIGN OUT
	
		function signOut() {
			localStorage.setItem('accessToken', 'signedOut')
			localStorage.setItem('username', 'signedOut')
			localStorage.setItem('email', 'signedOut')
			localStorage.setItem('userArtistId', 'signedOut')
			localStorage['userArtists'] = JSON.stringify('signedOut')
			setcompletedUsername(null)
			setcompletedEmail(null)
			history.push('/')
			// window.location.pathname = '/'
		}
	
	
	
	
	
	
	
	
	
	
	
	


	


	return (
		<motion.div className='wrapper' style={colorAnimation} >
			<div className="general-nav-position-and-size">
				<NavCircle navAnimation={navAnimation} completedUsername={completedUsername}/>
			</div>
			
			<Route
					path='/artists/:id'
					exact={true}
					render={(props) => {
						return (
							<>
								<ArtistDetail {...props} deleteArtist={deleteArtist} />
							</>
						);
					}}
			/>
			<Route exact path='/artists/:id/add_piece' component={PieceCreate} />
			<Route exact path='/pieces/:id' component={PieceDetail} />
			
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
				<Route
					path='/colors'
					exact={true}
					render={() => {
						return (
							<>
								<Colors scrollToLeft={scrollToLeft}/>
							</>
						);
					}}
				/>
				<Route
					path='/artists'
					exact={true}
					render={() => {
						return (
							<>
								<Artists scrollToLeft={scrollToLeft}/>
							</>
						);
					}}
				/>
				<Route
					path='/mediums'
					exact={true}
					render={() => {
						return (
							<>
								<Mediums scrollToLeft={scrollToLeft}/>
							</>
						);
					}}
				/>
				
			</Switch>
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
				path='/signup'
				render={() => {
					return (
						<>
							<h1 className='signUpHeader'>[wip] // sign up</h1>
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
							<h1 className='signInHeader'>[wip] // sign in</h1>
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
							<h1 className='usernameHeader'>[wip] // {completedUsername}</h1>
							<User
								handleChange={handleChange}
								submitArtist={submitArtist}
								userArtists={userArtists}
								userArtist={userArtist}
								error={error}
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

{/* <Route exact path='/mediums' 
				// component={Mediums} 
				/> */}
				{/* <Route exact path='/artists/:id' component={ArtistDetail} /> */}
				{/* <Route exact path='/artists/:id/add_piece' component={PieceCreate} /> */}
				{/* <Route exact path='/pieces/:id' component={PieceDetail} /> */}
				
	{/* <Route exact path='/artists' component={Artists} /> */}
	{/* <Route exact path='/artists/create' component={ArtistCreate} /> */}
	{/* <Route exact path='/artists/:id/edit' component={ArtistEdit} /> */}
	{/* <Route exact path='/pieces/:id/edit' component={PieceEdit} /> */}