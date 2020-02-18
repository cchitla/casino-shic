import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import '../Profile.css';
import API from '../../../utils/API';
import ProfileInfo from './ProfileInfo';
import ProfileForm from './ProfileForm';


class ShowOrEditProfile extends React.Component {

  state = {
    backToProfile: false,
    dontWantToEditProfile: true
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      sign: this.state.sign,
      gender: this.state.gender
    }
    API.updatePlayer(this.props.user.email, data)
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));

      //this.setState({dontWantToEditProfile: true, backToProfile: false})
    this.setState(prevState => ({
      dontWantToEditProfile: !prevState.dontWantToEditProfile,
      backToProfile: !prevState.backToProfile
    }));
  }


  render() {
return (

  this.props.dontWantToEditProfile || this.state.backToProfile ?
  
    <ProfileInfo 
      firstName={this.props.firstName} 
      lastName={this.props.lastName} 
      sign={this.props.sign} 
      gender={this.props.gender} 
      user={this.props.user} 
      {...this.state} 
    />
:
    <ProfileForm 
      firstName={this.props.firstName} 
      lastName={this.props.lastName} 
      sign={this.props.sign} 
      gender={this.props.gender} 
      user={this.props.user} 
      handleChange={this.handleChange}
      handleFormSubmit={this.handleFormSubmit}
      {...this.state}
    />

)

} 
  
}

export default ShowOrEditProfile;