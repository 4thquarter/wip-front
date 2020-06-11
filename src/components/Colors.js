// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavCircle from './NavCircle';

export default Colors;

// function Colors(props) {
// let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'brown', 'black', 'white', 'grey']

// for(let i = 0; i<colors.length; i++) {

// }

// let list = props.artData.map((item) => {
//   if (item.primaryimageurl !== null && item.peoplecount !==0) {
//     return (
// <div className="colors" key={item.title}>
//   <Link to={"/Colors/" + item.title}>
//     <img
//       className="galleryPiece"
//       src={item.primaryimageurl}
//       alt={item.title}
//     ></img>
//   </Link>
// </div>
//     );
//   }
// });

// return (
// 	<>
// 		<h3 className='page-title'>Mediums</h3>
//     {props.artData.map((item) => {
//       if (item.primaryimageurl !== null && item.peoplecount !==0) {
//         // <div className="colors" key={item.title}>
//         //   <Link to={"/Colors/" + item.title}>
//         //     <img
//         //       className="galleryPiece"
//         //       src={item.primaryimageurl}
//         //       alt={item.title}
//         //     ></img>
//         //   </Link>
//         // </div>
//       }
//     })}
// 	</>
// );

//   return (
//   <div className="Colors">
//     {list}
//     <div className="error">
//       {props.error}
//     </div>
//   </div>
//   )
// }

function Colors() {
	useEffect(() => {
		fetchColors();
	}, []);

	const [colors, setColors] = useState([]);

	const fetchColors = async () => {
		const colorsData = await fetch(
			'https://www.breakingbadapi.com/api/characters'
		);
		const colors = await colorsData.json();
		setColors(colors);
	};

	return (
		<>
			<h2 className='collage-title'>color gallery</h2>
      
      <div className="colorsGalleryHolder">
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>red</h3>
    			{colors.slice(0, 5).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(-30deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>blue</h3>
    			{colors.slice(5, 10).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(140deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>yellow</h3>
    			{colors.slice(10, 15).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(5deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>green</h3>
    			{colors.slice(15, 20).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(40deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>purple</h3>
    			{colors.slice(20, 25).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(190deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>orange</h3>
    			{colors.slice(25, 30).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'sepia(100%) saturate(300%) hue-rotate(-5deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>brown</h3>
    			{colors.slice(0, 5).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter:
    								'sepia(100%) saturate(300%) opacity(60%) hue-rotate(-25deg)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>black</h3>
    			{colors.slice(5, 10).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'brightness(.4) grayscale(100%)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>white</h3>
    			{colors.slice(10, 15).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'brightness(5) grayscale(100%)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
        <div className='colorCollageHolder'>
    			<h3 className='color-collage-title'>grey</h3>
    			{colors.slice(15, 20).map((color) => (
    				<div key={color.char_id} className='color-collage'>
    					<Link
    						className='image-link'
    						style={{
    							filter: 'brightness(.5) contrast(50%) grayscale(100%)',
    						}}
    						to={`/colors/${color.char_id}`}>
    						<img
    							key={color.char_id}
    							className='image-in-collage'
    							src={color.img}
    							alt={color.name}
    						/>
    					</Link>
    				</div>
    			))}
        </div>
        
      </div>
		</>
	);
}
