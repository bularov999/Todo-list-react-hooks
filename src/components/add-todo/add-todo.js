import React, { useState, useContext } from "react";
import { Context } from "../../context";
import "./add-todo.css";
import { ADD_TODO } from "../../store/action-types";
export default function AddTodo() {
  const {dispatch } = useContext(Context);
  
  const [todo, setTodo] = useState('');

  const addTodo = (e) => {
    if (todo.trim()) {
      dispatch({
        type:ADD_TODO,
        id:Math.random() + Date.now(), 
        title:todo
      })
      setTodo('')
    }
  }
  return (
    <div className="add-todo">
      <input
        type="text"
        className="form-input"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />

      <button className="form-btn" onClick={addTodo}>
        +
      </button>
    </div>
  );
}
