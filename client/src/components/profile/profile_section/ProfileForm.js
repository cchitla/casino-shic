import React from 'react';
import SubmitButton from './SubmitButton';

const ProfileForm = (props) => {
  return (
    <form className="input-custom">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.firstName}
        className="form-control"
        onChange={(e) => props.handleChange(e)}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.lastName}
        className="form-control my-2"
        onChange={(e) => props.handleChange(e)}
      />
      <input
        type="text"
        name="sign"
        placeholder="Zodiac sign"
        value={props.sign}
        className="form-control my-2"
        onChange={(e) => props.handleChange(e)}
      />
      <select name="gender" className="form-control my-2" value={props.gender} onChange={(e) => props.handleChange(e)}>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Shemale">Shemale</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <SubmitButton onClick={props.handleFormSubmit} />
    </form>
  );
}

export default ProfileForm;

