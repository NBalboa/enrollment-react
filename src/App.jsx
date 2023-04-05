import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom"
import SideMenu from "./components/SideMenu"
import Dashboard from "./pages/Dashboard"
import Admission from './pages/Admission'
import Student from './pages/Student'
import UpdateForm from './pages/UpdateForm'
import StudentProfile from './pages/StudentProfile'
import Settings from './pages/Settings'
import ListSubject from './pages/ListSubject'
import AddSubject from './pages/AddSubject'
import AboutDeveloper from './pages/AboutDeveloper'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/students" element={<Student />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/settings" element={<Settings />} />
          <Route path="/settings/list_subject" element={<ListSubject />} />
          <Route path="/settings/add_subject" element={<AddSubject />} />
          <Route
            exact path="/settings/about_developer"
            element={<AboutDeveloper />}
          />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App
