import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  SELECTED_TODO,
} from "./action-types";

export default function (state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.id, title: action.title, done: false, selected: false },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case DONE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      });
    case SELECTED_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, selected: !todo.selected }
          : todo;
      });
    default:
      return state;
  }
}
