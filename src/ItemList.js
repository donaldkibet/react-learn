import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (itemName) => {
    const filteredItems = items.filter((item) => item !== itemName);
    setItems(filteredItems);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            style={{ color: index % 2 === 0 ? "grey" : "lightgrey" }}
            key={index}
          >
            {item}
            <button onClick={() => removeItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add new item</button>
    </div>
  );
}
export default ItemList;
