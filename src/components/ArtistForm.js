import React from 'react';

function ArtistForm = ({ artist, handleSubmit, handleChange }) => {

	return (
		<>
			<div className='submitArt'>
				{/* <form autoComplete='yeeyee'>
					<input
						className='inputBox'
						onChange={props.handleChange}
						type='text'
						id='title'
						name='title'
						autoComplete='yeeyee'
						placeholder='title'
					/>

					<input
						className='inputBox'
						onChange={props.handleChange}
						type='text'
						id='artist'
						name='artist'
						placeholder='artist'
					/>

					<select
						name='colorSelect'
						id='colorSelect'
						onChange={props.handleChange}
						className='select'>
						{colorChoices}
					</select>

					<select
						name='mediumSelect'
						id='mediumSelect'
						onChange={props.handleChange}
						className='select'>
						{mediumChoices}
					</select>

					<button
						className='artSubmit'
						onClick={props.submitArt}
						type='submit'
						name='submit'>
						===>
					</button>
				</form> */}
                <form className='strain-form' onSubmit={handleSubmit}>
			<label htmlFor='name' className='form-title'>
				Strain Name
			</label>
			<input
				className='form-input'
				placeholder='Strain Name'
				defaultValue={strain.name}
				name='name'
				onChange={handleChange}
				required
				id='name'
			/>

			<label htmlFor='plantCategory' className='form-title'>
				Plant Category
			</label>
			<input
				className='form-input'
				placeholder='Indica | Sativa | Hybrid: Indica Dominant | Hybrid: Sativa Dominant | Hybrid: 50/50'
				defaultValue={strain.plantCategory}
				name='plantCategory'
				onChange={handleChange}
				required
				id='plantCategory'
			/>

			<label htmlFor='genetics' className='form-title'>
				Genetics
			</label>
			<input
				className='form-input'
				placeholder='Indica (%) | Sativa (%) | Hybrid (%)'
				defaultValue={strain.genetics}
				name='genetics'
				onChange={handleChange}
				required
				id='genetics'
			/>

			<label htmlFor='parents' className='form-title'>
				Parents
			</label>
			<input
				className='form-input'
				placeholder='Parents'
				defaultValue={strain.parents}
				name='parents'
				onChange={handleChange}
				required
				id='parents'
			/>

			<label htmlFor='thcContent' className='form-title'>
				THC Content
			</label>
			<input
				className='form-input'
				placeholder='THC Content'
				defaultValue={strain.thcContent}
				name='thcContent'
				onChange={handleChange}
				required
				id='thcContent'
			/>

			<label htmlFor='cbdContent' className='form-title'>
				CBD Content
			</label>
			<input
				className='form-input'
				placeholder='CBD Content'
				defaultValue={strain.cbdContent}
				name='cbdContent'
				onChange={handleChange}
				required
				id='cbdContent'
			/>

			<label htmlFor='smellAndFlavor' className='form-title'>
				Smell and Flavor
			</label>
			<input
				className='form-input'
				placeholder='Smell and Flavor'
				defaultValue={strain.smellAndFlavor}
				name='smellAndFlavor'
				onChange={handleChange}
				required
				id='smellAndFlavor'
			/>

			<label htmlFor='effect' className='form-title'>
				Effect
			</label>
			<input
				className='form-input'
				placeholder='Effect'
				defaultValue={strain.effect}
				name='effect'
				onChange={handleChange}
				required
				id='effect'
			/>

			<label htmlFor='description' className='form-title'>
				Description
			</label>
			<input
				className='form-input'
				placeholder='Description'
				defaultValue={strain.info}
				name='info'
				onChange={handleChange}
				required
				id='info'
			/>

			<label htmlFor='image' className='form-title'>
				Image
			</label>
			<input
				className='form-input'
				placeholder='Image'
				defaultValue={strain.mainImage}
				name='mainImage'
				onChange={handleChange}
				required
				id='info'
			/>

			<button className='submit-button' type='submit'>
				Submit
			</button>
		</form>
			</div>
		</>
	);
}

export default Artist;
