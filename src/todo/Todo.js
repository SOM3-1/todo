import { useState } from "react";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../store/createSlice";
import classes from "./Todo.module.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addHandler = () => {
    if (todo.length) {
      dispatch(sliceReducers.add(todo));
      setTodo("");
    }
  };

  return (
    <>
      <div className = {classes.input}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addHandler();
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            value={todo}
            className  = {classes.inputText}
          ></input>
          <button className = {classes.button}> Add</button>
        </form>
      </div>
    </>
  );
};

export default Todo;
