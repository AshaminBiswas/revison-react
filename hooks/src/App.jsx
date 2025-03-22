import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App flex flex-col justify-center items-center h-screen">
        <div>
          count is {count}
        </div>
        <button onClick={() => { setCount(count + 1) }}>Update count </button>
      </div>
    </>
  )
}

export default App
