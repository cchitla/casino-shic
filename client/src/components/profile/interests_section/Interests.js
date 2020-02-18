import React from 'react';
import { Card } from 'react-bootstrap';
import EditButton from './EditButton';
import EditInterests from './EditInterests';

const Interests = props => {

  //console.log(props)
  return (
    <Card className="profile-cols">
      <Card.Header><h5 className="profile-caths">Interests</h5></Card.Header>
      <div className="small-divider "></div>
      <Card.Body>
        <EditInterests {...props} />
      </Card.Body>
      <Card.Footer className="text-muted">
       <EditButton edit={props.editInterestsTrigger} />
       </Card.Footer> 
    </Card>
  )
}

export default Interests;

