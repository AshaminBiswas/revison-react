import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //USE Case 1
  let a = useRef(0)// when we change the use ref value for that time not rerendering the component
  let btnRef = useRef()// we can reference a component through a useRef === ref{bntRef}, without DOM manipulation
  // let a = 0


  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rerendering is ${a.current}`);
    btnRef.current.style.backgroundColor = "green"
  },)



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" ref={btnRef}>
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => { btnRef.current.style.display = "none" }}>click</button>
    </>
  )
}

export default App
