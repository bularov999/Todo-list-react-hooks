import React, { useContext } from "react";
import { Context } from "../../../context";
import './selected.css'

export default function () {
    const { state } = useContext(Context);
    return (
      <ul>
        {state.map((item) => {
          if (item.selected) {
            return(          
          <li className="selected" key={item.id}>
              {item.title} <span className="star">{String.fromCharCode(9733)}</span> 
          </li>) 
  
          }
        })}
      </ul>
    );
  }