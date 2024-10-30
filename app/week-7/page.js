"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    const newItem = { id: Math.random().toString(36).substr(2, 9), ...item };
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1
      >Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}


