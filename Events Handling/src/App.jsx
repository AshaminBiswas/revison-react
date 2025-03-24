import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [input, setInput] = useState("Ashamin")

  const [form, setForm] = useState({ email: "", phone: "" })

  const handleClick = () => {
    alert("i am click")
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);

  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <input type="text" name="email" value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} />
    </>
  )
}

export default App
