import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // List of todos
  const [newTodo, setNewTodo] = useState(""); // Input for new or edited todo
  const [editTodoId, setEditTodoId] = useState(null); // Id of todo being edited

  // Add or Edit a Todo
  const addOrEditTodo = () => {
    if (newTodo.trim() === "") return;

    if (editTodoId !== null) {
      // Editing an existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: newTodo } : todo
      );
      setTodos(updatedTodos);
      setEditTodoId(null); // Reset edit state
    } else {
      // Adding a new todo
      const newEntry = {
        id: Date.now(), // Unique ID
        text: newTodo,
      };
      setTodos([...todos, newEntry]);
    }

    setNewTodo(""); // Clear input
  };

  // Delete a Todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Populate input for editing
  const startEditing = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setNewTodo(todoToEdit.text);
      setEditTodoId(id);
    }
  };

  return (
    <section className="landing-section">
      <div className="row container">
        <div className="todos">
          <div className="heading">Todo App</div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control input-box"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)} // Fix incorrect value binding
            />
            <button className="btn btn-primary" onClick={addOrEditTodo}>
              {editTodoId !== null ? "Update Todo" : "Add Todo"}
            </button>
          </div>

          <ul className="list-group">
            {todos.map((todo) => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span>{todo.text}</span>
                <div>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => startEditing(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
