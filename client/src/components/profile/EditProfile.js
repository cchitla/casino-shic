import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import './Profile.css';
import AvatarUpload from '../imgupload/Imageupload';


class EditProfile extends React.Component {

  email = this.props.email

  state = {
    firstName: "",
    lastName: "",
    sign: "",
    gender: ""

  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    if (this.props.dontWantToEdit) {
      return (
        <ul className="list-unstyled">
          <li>Name: {this.props.user.nickname}</li>
          <li>Email: {this.props.user.email}</li>
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

          <button className="custom-btn btn btn-block rounded-0">Submit</button>
        </form>
      )
    }


  }
}

export default EditProfile;