import React from "react";
import "../css/shared.css";
import '../css/todolist.css';

const TodoItem = (props) => {
    //console.log(props);
    function checkHandler(e){
         props.doneHandler(props.todo.id);
         
    }
    return(
        <li className="todoitem">
           <input type="checkbox" onChange={checkHandler} className='inputDone' checked={props.todo.done}/>
           <span className={props.todo.done?'done':''}>{props.todo.todoText}</span>
           <button className="buttonitem" onClick={()=>props.removeTodo(props.todo.id)}>delete</button>
        </li>
    )
};

export default TodoItem;
