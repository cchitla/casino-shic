import React from 'react';
import Profile from '../components/profile/Profile';
import { useAuth0 } from "../components/auth/auth0/Auth0";

const UserProfile = (props) => {

  const { isAuthenticated, loading, user, profile } = useAuth0();

  // pull user DB info (money/chips) and send to game as prop

  if (loading && !profile) {
    return <div></div>;
  };

  return(
    <Profile user={user} />
  );
}

export default UserProfile;