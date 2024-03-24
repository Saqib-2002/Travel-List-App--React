const Items = ({ item, deleteItems, toggleItems })=> {
  return (
    <li>
      <input
        type="checkBox"
        value={item.packed}
        onChange={() => toggleItems(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.select} {item.desc}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
}
export default Items