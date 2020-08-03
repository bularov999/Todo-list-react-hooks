import React, {useReducer, useEffect} from "react";
import "./App.css";

import { Context } from "./context";
import reducer from './store/index'
import Header from './components/header/header'
import AddTodo from "./components/add-todo/add-todo";
import BtnSort from "./components/btn-sort-group/btn-sort-group";
import ListItems from "./components/list-items/list-items";


function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || [])
  // 
  
  useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(state))
  },[state])

  return (
    <Context.Provider value={{
      state,
      dispatch
    
    }}>
      <div className="container">
       <Header />
        <AddTodo />
        <BtnSort />
        <ListItems />
      </div>
    </Context.Provider>
  );
}

export default App;
