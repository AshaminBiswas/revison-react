import FoodItems from './components/FoodItems'
import ErrorMassege from './components/ErrorMassege'
import "bootstrap/dist/css/bootstrap.min.css";  // Importing bootstrap CSS
import './App.css'
import { useState } from 'react';
function App() {
  const [button, setButton] = useState(false)
  const [todo, setTodo] = useState([
    { title: "todo 1", description: "i am first todo" },
    { title: "todo 2", description: "i am second todo" },
    { title: "todo 3", description: "i am third todo" },
    { title: "todo 4", description: "i am fourth todo" },
  ])
  // const Todo = ({ todo }) => {
  //   (
  //     <div>
  //       <div className="todo">
  //         {todo.title}
  //       </div>
  //       <div className="desc">{todo.description}</div>
  //     </div>

  //   )

  // }
  return (
    <div>
      {todo.map(todo => {
        // return <Todo key={todo.title} todo={todo} /> 
        return (
          <div key={todo.title}>
            <div className="todo">
              {todo.title}
            </div>
            <div className="desc">{todo.description}</div>
          </div>

        )
      })}

      {/* {button ? <button>this is a button</button> : "lol"} */}

      {button && <button>button is true</button>}
      <button onClick={() => { setButton(!button) }}>click</button>
      {/* <Food></Food> */}
      {/* <FoodItems></FoodItems>
      <ErrorMassege></ErrorMassege> */}



    </div>
  )
}

export default App
