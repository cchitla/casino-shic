import React, { useState } from 'react';

const NewTable = (props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event, input) => {
    event.preventDefault();
    console.log(input)
    props.addNewTable(input);
    setInput("");
  };

  return (
    <div>
      Create new blackjack table
      <input placeholder="Table name" type="text" onChange={e => handleInputChange(e)} value={input}/>
      <button onClick={e => handleClick(e, input)} >Create Table</button>
    </div>
  );
};

export default NewTable;