import { useState } from "react";
import TodoForm from "../todo-from/form";
import TodoList from "../todo-list/Todolist";

function TodoWrapper() {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (item) => {
    setTodoItems([...todoItems, { task: item, done: false }]);
  };

  const markAsDone = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].done = true;
    setTodoItems(updatedTodoItems);
  };

  const undoItem = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].done = false;
    setTodoItems(updatedTodoItems);
  };

  const deleteItem = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems.splice(index, 1);
    setTodoItems(updatedTodoItems);
  };

  return (
    <div>
      <TodoForm addItem={addItem} />
      <h2 style={{ textAlign: "center", color: "#0B5ED7" }}>Todo List</h2>{" "}
      <hr style={{ width: "600px", margin: "auto" }} />
      <br />
      {todoItems.map((item, index) => (
        <>
          <TodoList
            key={index}
            mission={item.task}
            markedDone={item.done}
            markAsDone={() => markAsDone(index)}
            undoItem={() => undoItem(index)}
            deleteItem={() => deleteItem(index)}
          />
          <br />
        </>
      ))}
    </div>
  );
}

export default TodoWrapper;
