import React, { useContext } from "react";
import { Context } from "../../../context";
import './done.css'

export default function () {
  const { state } = useContext(Context);
  return (
    <ul>
      {state.map((item) => {
        if (item.done) {
          return(          
        <li className="done" key={item.id}>
            {item.title}
        </li>) 

        }
      })}
    </ul>
  );
}
