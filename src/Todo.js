import React, { useState } from "react";

function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(items.concat({ id: Date.now(), text: text }));
    setText("");
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setText(value);
  };
  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

export default Todo;
