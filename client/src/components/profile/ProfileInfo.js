import React from 'react';

const ProfileInfo = (props) => {
  return(
    <ul className="list-unstyled">
                  <li>First name: <b>{props.user.given_name}</b></li>
                  <li>Last name: <b>{props.user.family_name}</b></li>
                  <li>Birthday: <b>October 30 1977</b></li>
                  <li>Gender: <b>Femle</b></li>
                  <li>Email: <b>{props.user.email}</b></li>
                </ul>
  );
}

export default ProfileInfo;

