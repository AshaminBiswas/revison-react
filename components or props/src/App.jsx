import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-wrap justify-between items-center bg-green-500 p-5'>
        <Card title="Card 1" description="this is my card 1 components"></Card>
        <Card title="Card 2" description="this is my card 2 components"></Card>
        <Card title="Card 3" description="this is my card 3 components"></Card>
        <Card title="Card 4" description="this is my card 4 components"></Card>
        <Card title="Card 5" description="this is my card 5 components"></Card>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
