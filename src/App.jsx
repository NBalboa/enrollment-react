import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom"
import SideMenu from "./components/SideMenu"
import Dashboard from "./pages/Dashboard"
import Admission from './pages/Admission'
import Student from './pages/Student'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/enlistment' element={<Student />} />
      </Routes>
    </div>
  )
}

export default App
