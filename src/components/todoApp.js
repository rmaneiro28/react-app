import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle("" + value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      alert("No se puede guardar una nota vacía");
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      const temp = [...todos];
      temp.unshift(newTodo);

      setTodos(temp);

      setTitle("");
    }
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id != id);
    setTodos(temp);
  }
  return (
    <div className="Container">
        <div class="context"></div>
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      <div className="todoContainer">
        <h1 className="title">Lista de tareas</h1>
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input onChange={handleChange} className="todoInput" placeholder="Escribe algo..." value={title} />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Crear nota"
            className="buttonCreate"
          />
        </form>
        <div className="todosContainer">
          {todos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
