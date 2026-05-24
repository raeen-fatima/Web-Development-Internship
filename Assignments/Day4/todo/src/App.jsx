
import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Study React",
      completed: false,
    },

    {
      id: 2,
      task: "Practice JavaScript",
      completed: true,
    },
  ]);

  // ADD TODO

  const addTodo = (task) => {

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // DELETE TODO

  const deleteTodo = (id) => {

    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  };

  // COMPLETE TODO

  const toggleComplete = (id) => {

    const updatedTodos = todos.map((todo) => {

      if (todo.id === id) {

        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  // UPDATE TODO

  const updateTodo = (id) => {

    const updatedTask = prompt("Enter updated task");

    const updatedTodos = todos.map((todo) => {

      if (todo.id === id) {

        return {
          ...todo,
          task: updatedTask,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (

    <div className="app">

      <h1 className="title">
        Todo App
      </h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />

    </div>
  );
}

export default App;