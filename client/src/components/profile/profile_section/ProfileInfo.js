import React from 'react';

const ProfileInfo = (props) => {
  return (
    <ul className="list-unstyled">
      <li>First name: <span className="text-light-gold">{props.firstName}</span></li>
      <li>Last name: <span className="text-light-gold">{props.lastName}</span></li>
      <li>Sign: <span className="text-light-gold">{props.sign}</span></li>
      <li>Gender: <span className="text-light-gold">{props.gender}</span></li>
      <li>Email: <span className="text-light-gold">{props.user.email}</span></li>
    </ul>
  );
}

export default ProfileInfo;

