import React from 'react';
import './Profile.css';
import API from '../../utils/API';
import PageTitle from '../page_titles/Title';
import ProfileContainer from './container/ProfileContainer';

class Profile extends React.Component {

  state = {
    dontWantToEditProfile: true,
    dontWantToEditInterests: true,
    firstName: "",
    lastName: "",
    sign: "",
    gender: "",
    avatar: "",
    interests: []
  }

  componentDidMount() {
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        //console.log(res.data);
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          sign: res.data.sign,
          gender: res.data.gender,
          avatar: res.data.avatar,
          interests: res.data.interests
        })
      })
      .catch(err => console.log(err));
  }

  editProfileTrigger = (e) => {
    this.setState(prevState => ({
      dontWantToEditProfile: !prevState.dontWantToEditProfile
    }));
  }

  editInterestsTrigger = () => {
    this.setState(prevState => ({
      dontWantToEditInterests: !prevState.dontWantToEditInterests
    }));
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle title="Profile" />
        <ProfileContainer
          user={this.props.user}
          {...this.state}
          editProfileTrigger={this.editProfileTrigger}
          editInterestsTrigger={this.editInterestsTrigger} />
      </React.Fragment>
    )
  }
}

export default Profile;