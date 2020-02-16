import React from 'react';
import SubmitButton from './SubmitButton';

const ProfileForm = (props) => {
  return (
    <form className="input-custom">

      <div className="form-group row">
        <label for="firstName" class="col-sm-4 col-form-label">First Name</label>
        <div class="col-sm-8">
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            className="form-control"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="lastName" class="col-sm-4 col-form-label">First Name</label>
        <div class="col-sm-8">
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            className="form-control my-2"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="sign" class="col-sm-4 col-form-label">Sign</label>
        <div class="col-sm-8">
          <input
            id="sign"
            type="text"
            name="sign"
            placeholder="Sign"
            value={props.sign}
            className="form-control my-2"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="gender" class="col-sm-4 col-form-label">Gender</label>
        <div class="col-sm-8">
        <select id="gender" name="gender" className="form-control my-2" value={props.gender} onChange={(e) => props.handleChange(e)}>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Shemale">Shemale</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
        </div>
      </div>


      
      <SubmitButton onClick={props.handleFormSubmit} />
    </form>
  );
}

export default ProfileForm;

