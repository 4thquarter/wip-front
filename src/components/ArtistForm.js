import React from "react";

const ArtistForm = ({ artist, handleSubmit, handleChange }) => {
  return (
    <>
      <div className="submitArtContainer">
        <form className="artist-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-title">
            name / pseudonym
          </label>
          <input
            className="inputBox"
            placeholder="name / pseudonym"
            defaultValue={artist.name}
            name="name"
            onChange={props.handleChange}
            required
            id="name"
          />

          <label htmlFor="email" className="form-title">
            email
          </label>
          <input
            className="inputBox"
            placeholder="email address"
            defaultValue={artist.email}
            name="email"
            onChange={props.handleChange}
            required
            id="email"
          />

          <label htmlFor="information" className="form-title">
            info / bio
          </label>
          <input
            className="inputBox"
            placeholder="info / bio"
            defaultValue={artist.information}
            name="information"
            onChange={props.handleChange}
            required
            id="information"
          />

          <label htmlFor="location" className="form-title">
            location
          </label>
          <input
            className="inputBox"
            placeholder="(city, state / country)"
            defaultValue={artist.location}
            name="location"
            onChange={props.handleChange}
            required
            id="location"
          />

          <label htmlFor="website" className="form-title">
            site
          </label>
          <input
            className="inputBox"
            placeholder="website address / portfolio"
            defaultValue={artist.artist_website}
            name="website"
            onChange={handleChange}
            required
            id="website"
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );

};

export default ArtistForm;
