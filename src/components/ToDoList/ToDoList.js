import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import {
  actions,
  getInitialStateAsync,
} from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
    // fetch("http://localhost:4100/api/todos")
    //   .then((response) => response.json())
    //   .then((parsedJson) => {
    //     console.log(parsedJson);
    //   });
    // axios.get("http://localhost:4100/api/todos").then((response) => {
    //   dispatch(actions.setInitialState(response.data));
    // });
    dispatch(getInitialStateAsync());
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(actions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
