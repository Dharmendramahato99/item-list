import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddItem = () => {
    // Only add the item if the input is not empty
    if (inputText.trim()) {
      setItems([...items, inputText]);
      setInputText(""); // Clear the input field after adding
    }
  };
  return (
    <div className='text-center'>
      <h1 className='font-bold p-4 m-4  text-3xl'>Item List </h1>
      {/* Input field for adding a new item */}
      
      <div className="text-center ">
      <input className=' p-4 m-4 border border-solid border-black w-1/2'
        type="text"
        placeholder='Enter item'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update the input text as the user types
      />
      {/* Button to trigger adding the item */}
      <button className='border border-solid border-black p-4 m-4 bg-green-600 w-1/2 text-white' onClick={handleAddItem}>Add Item</button>

      </div>
      
      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
} 
export default ItemList