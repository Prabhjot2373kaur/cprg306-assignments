"use client";

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-6 bg-black rounded-lg shadow-md">
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 text-white rounded-md ${sortBy === 'name' ? 'bg-orange-600' : 'bg-blue-400 hover:bg-blue-500'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 text-white rounded-md ${sortBy === 'category' ? 'bg-orange-600' : 'bg-blue-400 hover:bg-blue-500'}`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
