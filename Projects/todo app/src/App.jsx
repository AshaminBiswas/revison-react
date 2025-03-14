import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItemOne from "./components/TodoItem1"
import TodoItemTwo from "./components/TodoItem2"
import "./App.css"
function App() {
  return (
    <>
      <center class="container ">
        <AppName />
        <AddTodo />
        <TodoItemOne />
        <TodoItemTwo />

      </center>
    </>
  )
}

export default App
