import { sliceReducers } from "../store/createSlice";
import { useSelector, useDispatch } from "react-redux/";
import classes from "./Todo.module.css";

const DisplayTodo = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoList);

  const remove = (id) => {
    dispatch(sliceReducers.remove(id));
  };
  return (
    <>
      <div >
        {list?.map((value, index) => {
            return (
              <div key={index} className  = {classes.display}>
                {" "}
                {value}
                <button
                  onClick={() => {
                  remove(index);
                    
                  }}
                  className={classes["button-display"]}                >
                  Remove
                </button>
              </div>
            )
            })}
      </div>
    </>
  );
};

export default DisplayTodo;
