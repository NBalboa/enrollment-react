import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom"
import SideMenu from "./components/SideMenu"
import Dashboard from "./pages/Dashboard"
import Admission from './pages/Admission'
import Student from './pages/Student'
import UpdateForm from './pages/UpdateForm'
import StudentProfile from './pages/StudentProfile'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/students' element={<Student />} />
        <Route path='/update/:id' element={<UpdateForm/>} />
        <Route path='/student/:id' element={<StudentProfile/>} />
      </Routes>
    </div>
  )
}

export default App
