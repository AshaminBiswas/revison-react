import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoLists from "./components/TodoLists";
function App() {
  let todoList = [
    { name: "Problem Solving", date: "10 / 12 / 2025" },
    { name: "Going to college", date: "10 / 12 / 2025" },
    { name: "Coding practice", date: "10 / 12 / 2025" },
  ];

  return (
    <>
      <center class="container ">
        <AppName />
        <AddTodo />
        <TodoLists todoLists={todoList}></TodoLists>

      </center>
    </>
  );
}

export default App;
