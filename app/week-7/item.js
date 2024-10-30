import React from 'react';

export default function Item({ name, category, quantity }) {
  return (
    <ul>
      <li>{name}</li>
      <li>Buy {quantity} in {category}</li>
    </ul>
  );
}



