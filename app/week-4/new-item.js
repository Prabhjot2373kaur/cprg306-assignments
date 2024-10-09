'use client';

import React, { useState } from 'react';

export default function NewItem () {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
          setQuantity(quantity + 1);
        }
      };
    
      const decrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };
  return (
    <main className="flex flex-col items-center m-10">
        <div className="bg-white flex flex-col items-center p-1 w-1/6 space-y-4 border rounded-lg shadow-md ">
        <div className="text-2xl font-bold text-black">{quantity}</div>
      
        <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={decrement}
          disabled={quantity === 1}
        >-</button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={increment}
          disabled={quantity === 20}
        >+</button>
        </div>
        </div>
    </main>
  );
}
