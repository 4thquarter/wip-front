import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { BACKENDURL } from '../config';
import ArtistForm from './ArtistForm.js';

const ArtistEdit = ({ match }) => {
	const [artist, setArtist] = useState('');
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		const url = `${APIURL}/artists/${match.params.id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setArtist({
					id: data._id,
					name: data.name,
					plantCategory: data.plantCategory,
					genetics: data.genetics,
					parents: data.parents,
					thcContent: data.thcContent,
					cbdContent: data.cbdContent,
					smellAndFlavor: data.smellAndFlavor,
					effect: data.effect,
					info: data.info,
					mainImage: data.mainImage,
				});
			})
			.catch(() => {
				setError(true);
			});
		// eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		e.persist();
		setArtist({
			...artist,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${APIURL}/artists/${artist.id}`;

		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(artist),
		})
			.then((res) => res.json())
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/artists/${createdId}`} />;
	}
	return (
		<>
			<div className='edit-form-header'>
				<h2 className='page-title'>Artist Editor</h2>
				<h2 className='form-header-1'>
					We greatly appreciate all of our contributors!
				</h2>
				<h2 className='form-header-2'>
					Please use the form below to update {artist.name}.
				</h2>
				{error && <p>Something went wrong... Please try again!</p>}
			</div>
			<ArtistForm
				artist={artist}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default ArtistEdit;
