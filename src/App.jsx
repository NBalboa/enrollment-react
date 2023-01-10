import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom"
import SideMenu from "./components/SideMenu"
import Dashboard from "./pages/Dashboard"
import Admission from './pages/Admission'
import Enlistment from './pages/Enlistment'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/enlistment' element={<Enlistment />} />
      </Routes>
    </div>
  )
}

export default App
