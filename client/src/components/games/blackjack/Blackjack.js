import React, {} from 'react';
import { useAuth0 } from '../../auth/auth0/Auth0';
import NewTable from './NewTable/NewTable';
import CurrentTables from './CurrentTables/CurrentTables';
import './Blackjack.css';

const Blackjack = () => {
  const { isAuthenticated, loading, user } = useAuth0();

  if (loading) {
    return <div></div>;
  };

  return (
    <div className="blackjack">Create a new blackjack table or join an existing table.</div>

    // conditionally render NewTable and CurrentTable
    //
    // or render
    //
    // table user has joined
  );
};

export default Blackjack;