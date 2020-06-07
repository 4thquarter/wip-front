import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import "./App.css";
import Arts from "./components/Arts.js"
import Art from "./components/Art.js"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import About from "./components/About"



function App() {
  
  
  const [artData, setartData] = useState([]);
  const [error, setError] = useState('')
  
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
  
  const [hideUserOptions, setHideUserOptions] = useState(true);
  const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
  const [hideSignOut, setHideSignOut] = useState(true)

  
  const history = useHistory();
  
  useEffect(() => {
    console.log('samrussell.com x Andrés Ortiz Montalvo  ϟ  2020')
    getArtData();
    return history.listen((location) => {
			// console.log(location.pathname);
			// console.log('useffecting');

			switch (location.pathname) {
				case '/':
					setHideUserOptions(true);
					break;
			}
		});
	}, [completedUsername, history, username]);
  

  
  
  function userButtonClick(event) {
		if (event.target.getAttribute('name') === 'user') {
      setHideUserOptions(false);
      history.push('/user')
		}
		// if (event.target.getAttribute('name') === 'completedUsername') {
		// 	setHideInventory(false);
		// 	setHideNav(true);
		// }
	}
  
  
  
  
  function getArtData() {    
    const url = `https://api.harvardartmuseums.org/object?classification=Paintings&sort=random&size=8&hasimage=1&apikey=${process.env.REACT_APP_KEY}`
        
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setartData(response.records);
      })
      .catch(function(error) {
        setError(error);
      })
    }
  
    function handleClick() {
      console.log('click');
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
  
        default:
          console.log('switch is broke');
      }
    }
    
    
    
    let signUpInformation;
	  let signInInformation;
    
    function checkSubmit(event) {
      event.preventDefault();
  // 		console.log('checking submit');
  
      if (username === null) {
        return;
      }
      if (password === null) {
        return;
      } 
      else {
  // 			console.log(username);		
        setcompletedUsername(username);
        runSubmit(event)
      }
    }
  
    function runSubmit(event) {
      event.preventDefault();
  
      signUpInformation = {
        email: email,
        userName: username,
        password: password,
      };
      signInInformation = {
        userName: username,
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
          signIn();
          break;
  
        default:
          console.log('switch is broke');
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
  
      fetch('https://paperclip-api.herokuapp.com/api/user', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setPostId(data.id);
            setUserId(data._id);
            setIsUserFound(true);
            getArtData();
          } else {
            // console.log('bad user');
            setIsUserFound(false);
          }
        })
        .then(() => {
          setPassword(null);
          setconfirmPassword(null);
          setHideSignIn(true);
          history.push(`/${username}`);
        });
    }
  
    function signIn(body) {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      
      let dataVariable = null;
  
      fetch(
        `https://paperclip-api.herokuapp.com/api/user/${username}/name`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data) {
  // 					console.log(data);
            dataVariable = data;
            setPostId(data.id);
            setUserId(data._id);
            setIsUserFound(true);
            getArtData();
            
          } else {
            // console.log('bad user');
  // 					console.log('no data');
            
            setIsUserFound(false);
          }
          // check response to see if the info was good
          // if not, call a function that will reset the state?
        })
        .then(() => {
          if(dataVariable) {
  // 				console.log('nextscreen');
          
          setPassword(null);
          setconfirmPassword(null);
          setHideSignIn(true);
          setHideSignOut(true);
          console.log(hideSignOut);
          history.push(`/${username}`)
          } else {
          setPassword(null);
          setconfirmPassword(null);
          }
        });
    }
    
    
  return (
    <div className='wrapper'>
      <main>
        <Route path="/" render={() => {
          return (
            <>
              <a href=''><h1 className="header" onClick={getArtData}>"User Art"</h1></a>
              
              {/* USER BUTTON */}
              <div className={hideUserOptions ? 'user' : 'hidden'}>
									
										{/* GENERIC USER HEADER */}
										<h2
                      onClick={userButtonClick}
											className={completedUsername ? 'hidden' : 'user'}
											name='user'>
											user
										</h2>
                    
                    {/* USERNAME HEADER */}
                    <Link to={completedUsername ? `${completedUsername}` : 'user'}>
											<h2
												className={completedUsername ? 'user' : 'hidden'}
												name='completedUsername'>
												{completedUsername}
											</h2>
										</Link>
							</div>
              
							{/* USER BUTTON ON CLICK WHILE NOT SIGNED IN */}
				 			<div className={hideUserOptions ? 'hidden' : 'user'}>
      							<Link to='/signup'>
      								<h2 className="navSignButton">sign up</h2>
      							</Link>
      							<Link to='/signin'>
      								<h2 className="navSignButton">sign in</h2>
      							</Link>
							</div>
              <Link to="/about">
                <h2 className="about">about</h2>
              </Link>
              <Arts artData={artData} error={error}/>
            </>
          )
        }} />  
        <Route 
        path="/Art/:title" 
        render={(routerProps) => {
          return (
            <>
              <Link to="/">
                <h1 className="header" id="artHeader">"Harvard Art"</h1>
              </Link>
              <Art 
                match={routerProps.match}
                artData={artData}
                handleClick={handleClick}
              />
            </>
          );
        }} />
        <Route path="/about" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">"Harvard Art"</h1>
              </Link>
              <About />
            </>
          )
        }}
        />
        <Route
					path='/signup'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip//sign up</h1>
								</Link>
								<SignUp
									handleChange={handleChange}
									checkSubmit={checkSubmit}
									hideSignUp={hideSignUp}
									isPasswordValid={isPasswordValid}
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
									<h1 className='header'>paperclip//sign in</h1>
								</Link>
								<SignIn
									handleChange={handleChange}
									checkSubmit={checkSubmit}
									hideSignIn={hideSignIn}
									isUserFound={isUserFound}
								/>
							</>
						);
					}}
				/>
      </main>
  </div>
  );
}

export default App;

/*

URL:
for basic 10 paintings:
`https://api.harvardartmuseums.org/object?classification=Paintings&sort=random&hasimage=1&apikey=038ebf20-87f7-11ea-8c88-97e5b91498c3`


*/
