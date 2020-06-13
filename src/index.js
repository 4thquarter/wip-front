import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import useHorizontal from '@oberon-amsterdam/horizontal';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Helper() {
//   const refContainer = useRef(0);
  
//   const [scrollValue, setScrollValue] = useState(0)
  
//   function onScroll() {
//     const scrollX = window.scrollX //Don't get confused by what's scrolling - It's not the window
//     const scrollValue = refContainer.current.scrollLeft
//     console.log(`onScroll, window.scrollX: ${scrollX} refContainer.scrollValue: ${scrollValue}`)
//     setScrollValue(scrollValue)
//   }
  
//   return (
//     <div onScroll={onScroll} >
//     <BrowserRouter>
//       <App scrollValue={scrollValue} />
//     </BrowserRouter>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// style={{overflow: 'scroll'}}