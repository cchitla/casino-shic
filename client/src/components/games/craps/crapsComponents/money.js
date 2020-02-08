import React from 'react';

const Money = (props) => {
    const bets = [5, 10];
    const betTotal = bets.reduce((a, b) => (a + b));
    return (
        <div>
            <p>Earnings: ${props.earnings}</p>
            <p>Bets: ${betTotal}</p>
        </div>
    );
};

export default Money;