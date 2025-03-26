import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import User from './component/User'
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([

    {
      path: '/',
      element: <> <Navbar /><Home /></>,
      errorElement: <div>Not Found</div>,
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>,
    },
    {
      path: '/user/:username',
      element: <User />,
    },
    {
      path: '/service',
      element: <div>Service</div>,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
