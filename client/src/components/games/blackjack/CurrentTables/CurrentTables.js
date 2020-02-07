import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentTables.css';


const CurrentTables = (props) => {
  const { tables } = props;

  
  return (
    <div>
      {tables
        ? tables.map((table) => (
          <div className="blackjackTablesList" key={table.tableName}>
            <Link to={`/games/blackjack/tables/?${table.tableName}`}>
              <img style={{ height: 20 }} src="/resources/blackjack_logo.png" alt="icon" />
              {table.tableName} Players: {table.players}
            </Link>
          </div>
        ))
        : ""}
    </div>
  );
};

export default CurrentTables;