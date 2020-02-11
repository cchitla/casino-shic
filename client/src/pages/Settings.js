import React from 'react';
import Ranking from '../components/profile/Ranking';
import { useAuth0 } from "../components/auth/auth0/Auth0";

const UserRanking = (props) => {
  const { isAuthenticated, loading, user, profile } = useAuth0();

  // pull user DB info (money/chips) and send to game as prop

  if (loading && !profile) {
    return <div></div>;
  };

  return(
    <Ranking  user={user} />
  );
}

export default UserRanking;