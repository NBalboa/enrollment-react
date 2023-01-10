import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom"
import SideMenu from "./components/SideMenu"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
