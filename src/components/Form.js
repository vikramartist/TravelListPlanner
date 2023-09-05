import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./form.css";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: uuid(), description, quantity, packed: false };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4>What do you need for your 😍 trip?</h4>
      <div className="user-input">
        <select
          name="items"
          id="items"
          className="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="search"
          value={description}
          placeholder="Item...."
          type="text"
          name="item"
          id="item"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
};

export default Form;
