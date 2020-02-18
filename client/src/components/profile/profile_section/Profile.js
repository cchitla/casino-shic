import React from 'react';
import { Card } from 'react-bootstrap';
import ShowOrEditProfile from './EditProfile';
import EditButton from './EditButton';

const Profile = props => {

  //console.log(props)
  return (
    <Card className="profile-cols">
      <Card.Header><h5 className="profile-caths">Profile</h5></Card.Header>
      <div className="small-divider "></div>
      <Card.Body>
        <ShowOrEditProfile {...props} />
      </Card.Body>
      <Card.Footer className="text-muted">
        <EditButton editBtn={props.editProfileTrigger} />
      </Card.Footer>
    </Card>
  )
}

export default Profile;

