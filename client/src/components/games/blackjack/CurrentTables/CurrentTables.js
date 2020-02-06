import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentTables.css';


const CurrentTables = (props) => {
  // retrieve current tables with socket.io in Blackjack.js
  const { tables } = props;

  
  return (
    <div>
      {tables
        ? tables.map((table) => (
          <div className="blackjackTablesList" key={table}>
            <Link to={`/games/blackjack/tables/?${table}`}>
              <img style={{ height: 20 }} src="/resources/blackjack_logo.png" alt="icon" />
              {table}
            </Link>
          </div>
        ))
        : ""}
    </div>
  );
};

export default CurrentTables;