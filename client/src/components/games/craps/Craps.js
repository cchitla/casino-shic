import React from 'react';
import Money from './crapsComponents/money';
import Table from './crapsComponents/table';
import Dice from './crapsComponents/dice';

const Craps = (props) => {
  return (
    <div>
      <h1>Craps component</h1>
      <Money earnings={100} />
      <Table />
      <Dice />
    </div>
  );
};

export default Craps;