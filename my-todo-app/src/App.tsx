import { Todo } from "./types/Todotype";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (): void => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id: number): void => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const handleCompleteTodo = (id: number): void => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };

  return (
    <>
      <div>
        <h1>TodoList</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할일을 입력해주세요!"
        />
        <button onClick={handleAddTodo}>추가</button>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button onClick={() => handleCompleteTodo(todo.id)}>
                {todo.completed ? "취소" : "완료"}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
