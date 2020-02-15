import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';

import Avatar from '../picture_section/Avatar';
import Profile from '../profile_section/Profile';
import Interests from '../interests_section/Interests';


const ProfileContainer = props => {
  return (
    <Container className="pt-4">

          <Row className="text-light-gold">
            <Col md={12}>
              <CardGroup>
                <Avatar {...props} />
                <Profile {...props} />
                <Interests {...props} />
              </CardGroup>
            </Col>
          </Row>
        
        </Container>
  )
}

export default ProfileContainer;

