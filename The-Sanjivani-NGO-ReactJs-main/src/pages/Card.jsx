import React from 'react';

const Card = ({ amount, checkoutHandler }) => {
  return (
    <div>
      <p>{amount}</p>
      <button onClick={() => checkoutHandler(amount)}>Buy now</button>
    </div>
  );
};

export default Card;
