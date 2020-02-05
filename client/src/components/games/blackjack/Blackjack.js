import React, { useState } from 'react';
// import { useAuth0 } from '../../auth/auth0/Auth0';
import NewTable from './NewTable/NewTable';
import CurrentTables from './CurrentTables/CurrentTables';
import './Blackjack.css';

const Blackjack = (props) => {
  const [newTableName, setNewTableName] = useState(null);
  // const { isAuthenticated, loading, user } = useAuth0();

  // if (loading) {
  //   return <div></div>;
  // };

  const addNewTable = (event, newTableName) => {
    event.preventDefault();
    setNewTableName(newTableName);

    // send table info to server with socket.io
  };

  return (
    <div className="blackjack">Create a new blackjack table or join an existing table.
      <NewTable addNewTable={addNewTable} newTableName={newTableName} />
      <CurrentTables />
    </div>
  );
};

export default Blackjack;