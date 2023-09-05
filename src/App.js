import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useEffect, useState } from "react";
import "./styles.css";

const getInitialItems = () => {
  const data = JSON.parse(localStorage.getItem("items"));
  if (!data) return [];
  return data;
};

export default function App() {
  const [items, setItems] = useState(getInitialItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        togglePacked={handlePacked}
        deleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
