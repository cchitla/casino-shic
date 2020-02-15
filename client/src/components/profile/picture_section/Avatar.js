import React from 'react';
import { Card, Image } from 'react-bootstrap';
import AvatarUpload from '../picture_section/imgupload/Imageupload';

const Avatar = props => {
  return (
    <Card className="profile-cols">
      <Card.Header><h5 className="profile-caths">Avatar</h5></Card.Header>
      <div className="small-divider "></div>
      <Card.Body>
        <Card.Text>
          <Image thumbnail src={props.avatar || props.user.picture} alt={props.user.given_name} />
        </Card.Text>
      </Card.Body>
      <AvatarUpload user={props.user} />
    </Card>
  )
}

export default Avatar;

