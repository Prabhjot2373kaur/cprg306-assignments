'use client';

import React, { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1); 
    const [category, setCategory] = useState("Produce"); 

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <main className="flex flex-col items-center m-10 ">
            <form onSubmit={handleSubmit} className="bg-grey flex flex-col items-center p-6 w-full max-w-md space-y-6 border border-gray-300 rounded-lg shadow-lg" >
                <div className="w-full">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='item name'
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="text-3xl font-bold text-blue-600">{quantity}</div>
                    <div className="flex space-x-4 mt-2">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
                            onClick={decrement}
                            disabled={quantity === 1}
                            type="button"
                        >
                            -
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
                            onClick={increment}
                            disabled={quantity === 20}
                            type="button"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg p-3 w-full hover:bg-blue-600 transition duration-200"
                >
                  +
                </button>
            </form>
        </main>
    );
}
