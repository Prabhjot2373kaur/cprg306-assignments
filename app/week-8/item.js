import React from 'react';

export default function Item({ name, category, quantity, onSelect }) {
  const handleClick = () => {
    if (onSelect) onSelect(name);
  };

  return (
    <li onClick={handleClick} className="cursor-pointer hover:bg-blue-900 p-2 rounded-lg">
      <h3 className="font-semibold">{name}</h3>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}







