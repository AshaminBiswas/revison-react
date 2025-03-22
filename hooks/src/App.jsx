import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)



  useEffect(() => {
    setColor(color + 2)
    alert('I am run beacuse color is updated')
  }, [count])


  return (
    <>

      <div className="App flex flex-col justify-center items-center h-screen">
        <Navbar color={"navy" + "Blue" + color}></Navbar>
        <div>
          count is {count}
        </div>
        <button onClick={() => { setCount(count + 1) }}>Update count </button>
      </div>
    </>
  )
}

export default App
