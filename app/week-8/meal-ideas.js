"use client";

import React, { useEffect, useState } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-6 bg-black rounded-lg shadow-md">
      <h2 className="text-white text-2xl mb-4">Meal Ideas with {ingredient}</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="text-white"> 
            <div>
              <h3 className="font-bold">{meal.strMeal}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
