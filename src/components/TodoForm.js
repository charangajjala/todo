import React, { useRef } from "react";
import "../css/shared.css";
import "../css/form.css";

const TodoForm = (props) => {
  let todoRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(),
      todoText: todoRef.current.value,
      done:false
    };
    props.submitHandler(todo);
    todoRef.current.value = "";
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="input-1"
        type="text"
        placeholder="write a todo..."
        ref={todoRef}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};
export default TodoForm;
