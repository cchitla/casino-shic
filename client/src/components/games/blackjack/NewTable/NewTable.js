import React, { useState } from 'react';

const NewTable = (props) => {
  const [input, setInput] = useState("");
  //send new table info to parent component, then to socket

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };


  return (
    <div>
      Create new blackjack table
      <input placeholder="Table name" type="text" onChange={e => handleInputChange(e)}/>
      <button onClick={e => props.addNewTable(e, input)}>Create Table</button>
    </div>
  );
};

export default NewTable;