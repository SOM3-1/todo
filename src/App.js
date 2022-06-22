import Todo from "./todo/Todo";
import { Provider } from "react-redux/es/exports";
import { sliceStore } from "./store/configureSlice";
import DisplayTodo from "./todo/DisplayTodo";

const App = () => {
  return (
    <>
      <Provider store={sliceStore}>
        <Todo />
        <DisplayTodo />
      </Provider>
    </>
  );
};

export default App;
