import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import './Profile.css';
import { useAuth0 } from '../auth/auth0/Auth0';
import { GiDiamonds } from 'react-icons/gi';
import AvatarUpload from '../imgupload/Imageupload';
import API from '../../utils/API'
import EditProfile from './EditProfile';
import ProfileInfo from './ProfileInfo';
import EditButton from './EditButton';


class Profile extends React.Component {

  state = {
    dontWantToEdit: true,
    firstName: "",
    lastName: "",
    sign: "",
    gender: "",
    avatar: ""
  }

  componentDidMount() {
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        console.log(res.data);
        this.setState({ 
        firstName: res.data.firstName,  
        lastName: res.data.lastName,  
        sign: res.data.sign,  
        gender: res.data.gender,  
        avatar: res.data.avatar
      })})
      .catch(err => console.log(err));
  }

  editTrigger = () => {
    this.setState({ dontWantToEdit: false })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <h3 className="mt-4 title">Profile</h3>
                <div className="divider divider-center divider-linear-gradient w-50 mx-auto">
                  <GiDiamonds className="diamond-icon" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pt-4">
          <Row className="text-light-gold">
            <Col md={12}>
              <CardGroup>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Avatar</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>
                    <Card.Text>
                      <Image thumbnail src={this.state.avatar || this.props.user.picture} alt={this.props.user.given_name} />
                    </Card.Text>
                  </Card.Body>
                  <AvatarUpload user={this.props.user} />

                </Card>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Profile</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>

                    <EditProfile dontWantToEdit={this.state.dontWantToEdit} user={this.props.user} />
                  </Card.Body>
                  <Card.Footer className="text-muted">
                   {/*  {this.state.dontWantToEdit && <EditButton edit={this.editTrigger} />} */}
                   <EditButton edit={this.editTrigger} />
                  </Card.Footer>
                </Card>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Interests</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li>Headbanging</li>
                      <li>Heavy Metal</li>
                      <li>Cats</li>
                      <li>Coding</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
                </Card>
                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </React.Fragment>

    );
  }
}

export default Profile;