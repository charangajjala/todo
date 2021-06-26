import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "../css/shared.css";
import "../css/todolist.css";

function Dashboard() {
  const [todoData, setTodoDATA] = useState([]);
  /* console.log('in dashboard starting point');
  console.log(todoData); */
  function submitHandler(todo) {
    /* console.log("in submit handler dashboard"); */
    if(todo.todoText===''){
      return;
    }
    setTodoDATA((prevState) => {
      return [todo, ...prevState];
    });
  }
  function doneHandler(id) {
    setTodoDATA((prevState) => {
      const currState = [...prevState];
      return currState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return { ...todo };
      });
    });
  }
  //console.log(todoData.length);
  function removeTodo(id) {
    setTodoDATA((prevState) => {
      const currState = [...prevState].filter((todo) => todo.id !== id);
      return currState;
    });
  }
  function noTaksDone(todoData) {
    return todoData.filter((todo) => todo.done === true).length;
  }
  /* console.log(todoData); */
  return (
    <>
      <TodoForm submitHandler={submitHandler} />
      {todoData.length > 0 && (
        <ul className="todolist">
          {todoData.map((todo) => (
            <TodoItem
              todo={todo}
              key={Math.random().toString()}
              removeTodo={removeTodo}
              doneHandler={doneHandler}
            />
          ))}
        </ul>
      )}
      <div className="noTask">
        Total tasks done: {noTaksDone(todoData)}
        <span id="info">
          Tasks Left:
          {todoData.length - noTaksDone(todoData)}
        </span>
      </div>
    </>
  );
}

export default Dashboard;
