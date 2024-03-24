import { useState } from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteItems, onToggleItems, onClear }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            deleteItems={onDeleteItems}
            toggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="action" onChange={(e) => setSortBy(e.target.value)}>
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
};
export default PackingList;
