import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import './Profile.css';
import API from '../../utils/API';
import EditButton from './EditButton';


class EditProfile extends React.Component {


  state = {
    firstName: "",
    lastName: "",
    sign: "",
    gender: "",
    backToProfile: false,
    dontWantToEdit: true

  };

  componentDidMount() {
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        console.log(res.data);
        this.setState({ 
        firstName: res.data.firstName,  
        lastName: res.data.lastName,  
        sign: res.data.sign,  
        gender: res.data.gender,  
      })})
      .catch(err => console.log(err));
  }
 
  editTrigger = () => {
    this.setState({ dontWantToEdit: false })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(name, value );
    
  }


  handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      sign: this.state.sign ,
      gender: this.state.gender
    }
    API.updatePlayer(this.props.user.email, data)
      .then(res => { console.log(res.data) })
      .catch(err => console.log(err));
      this.setState({ backToProfile: true })
      
  }

  render() {


    if (this.props.dontWantToEdit || this.state.backToProfile) {
      return (
          <ul className="list-unstyled">
          <li>Name: {this.props.user.nickname}</li>
          <li>Email: {this.props.user.email}</li>
          <li>First Name: {this.state.firstName}</li>
          <li>Last Name: {this.state.lastName}</li>
          <li>Zodiac sign: {this.state.sign}</li>
          <li>Gender: {this.state.gender}</li>
        </ul>
      )
    } else {

      
      return (

        <form className="input-custom">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            className="form-control"
            onChange={(e) => this.handleChange(e)}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            className="form-control my-2"
            onChange={(e) => this.handleChange(e)}
          />

          <input
            type="text"
            name="sign"
            placeholder="Zodiac sign"
            value={this.state.sign}
            className="form-control my-2"
            onChange={(e) => this.handleChange(e)}
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={this.state.gender}
            className="form-control my-2"
            onChange={(e) => this.handleChange(e)}
          />

          <button
            className="custom-btn btn btn-block rounded-0"
            type="submit"
            onClick={(e) => this.handleFormSubmit(e)}
          >Submit</button> 
          
        </form>

        
      )
    }

    


  }
}

export default EditProfile;