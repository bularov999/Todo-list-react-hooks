import React, { useContext } from "react";
import "./list-items.css";
import { Context } from "../../context";
import { SELECTED_TODO, DONE_TODO, DELETE_TODO } from "../../store/action-types";

export default function ListItems() {
  const { state, dispatch } = useContext(Context);
  const changeItemStatus = (e,id) => {
    if (e.target.classList.contains('checkbox')) {
      dispatch({
        type:DONE_TODO,
        id
      })
    }
    else if (e.target.classList.contains('icon-star')) {
      dispatch({
        type:SELECTED_TODO,
        id
      })
    } 
    else if (e.target.classList.contains('cross')) {
      dispatch({
        type:DELETE_TODO,
        id
      })
    }
  } 
  return (
    <div className="clear content">
      <ul>
        {state.map((item) => {
          return (
            <li 
            className="list-item" 
            key={item.id} 
            onClick={(e) => changeItemStatus(e,item.id)} 
            >
              <input
              className="checkbox" 
              id={item.id}
              type="checkbox" 
              checked={item.done ? true : false}
              readOnly
              />
              <label
              htmlFor={item.id}
              style={{
                'textDecoration': item.done ? 'line-through' : ''
              }}
              >{item.title}</label>
              <i className="icon icon-star">
                {item.selected ? String.fromCharCode(9733) : String.fromCharCode(9734)}
              </i>
              <i className="icon cross">&#10008;</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
