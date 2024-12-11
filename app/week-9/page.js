"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';


const cleanItemName = (name) => {
  return name.split(',')[0].replace(/[^\w\s]/g, '').trim().toLowerCase();
};

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    const newItem = { id: Math.random().toString(36).substr(2, 9), ...item };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (name) => {
    const cleanedName = cleanItemName(name);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex space-x-12 p-6">
      <div className="w-1/3">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-2/3">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}

