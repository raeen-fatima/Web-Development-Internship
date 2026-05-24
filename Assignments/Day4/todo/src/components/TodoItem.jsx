
function TodoItem({
  todo,
  deleteTodo,
  toggleComplete,
  updateTodo
}) {

  return (

    <div className="todo-item">

      <h3
        style={{
          textDecoration:
          todo.completed
          ? "line-through"
          : "none",
        }}
      >
        {todo.task}
      </h3>

      <div className="buttons">

        <button
          onClick={() => toggleComplete(todo.id)}
        >
          Complete
        </button>

        <button
          onClick={() => updateTodo(todo.id)}
        >
          Update
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;