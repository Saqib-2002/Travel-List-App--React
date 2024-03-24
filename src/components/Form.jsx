import { useState } from "react";
const Form = ({ onAddItems }) => {
  const [desc, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc) return;

    const newItems = {
      desc,
      select,
      packed: false,
      id: Date.now(),
    };
    console.log(newItems);

    onAddItems(newItems);

    setDescription("");
    setSelect(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
