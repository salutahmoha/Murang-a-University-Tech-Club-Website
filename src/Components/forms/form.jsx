import React from "react";
import "./form.css";

function RegistrationForm() {
  return (
    <div id="forms-container">
      <div className="track-registration-form">
        <form action="">
          <div className="form-details">
            <label htmlFor="fullname" className="fullname">
              Full Name
            </label>
            <input type="text" id="fullname" />
            <br />
          </div>

          <div className="form-details">
            <label htmlFor="emailAddress" className="emailAddress">
              Email Address
            </label>
            <input type="email" id="emailAddress" />
            <br />
          </div>
          <div className="form-details">
            <label htmlFor="currentCourse" className="currentCourse">
              Current Course
            </label>
            <input type="text" id="currentCourse" />
            <br />
          </div>
          <div className="form-details">
            <label htmlFor="yearOfStudy" className="yearOfStudy">
              Year of Study
            </label>
            <input type="number" id="yearOfStudy" />
            <br />
          </div>
          <div className="form-details">
            <label htmlFor="desiredTracks" className="desiredTracks">
              Desired Tracks
            </label>
            <select name="desiredTracks" id="desiredTracks">
              <option value="desiredTrack">Cyber Security</option>
              <option value="desiredTrack">UI/UX design</option>
              <option value="desiredTrack">Web development</option>
              <option value="desiredTrack">Mobile apps development </option>
              <option value="desiredTrack">Cloud engineering</option>
              <option value="desiredTrack">Power Platform</option>
            </select>
            <br />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
