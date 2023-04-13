import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, useNavigate } from "react-router-dom"
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
import AdminLogin from './pages/AdminLogin'
import UpdateSubject from './pages/UpdateSubject'
import { CurrentUserContext } from './CreateContext'
import PreAdvisingForm from './pages/PreAdvisingForm'
import StudentLogin from './pages/StudentLogin'
import PrintPreAdivsing from './pages/PrintPreAdivsing'
function App() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if(storedUser){
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  function handleLogin(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));

    if(!currentUser.role && currentUser.role === 'admin'){
      console.log('admin')
      navigate('/')
    }
    else {
      console.log('student')
      navigate('/pre_advising')
    }
    console.log(user)
    setCurrentUser(user)
  }

  return (
    <div>
      <Routes>
        <Route path="/pre_advising/" element={<PreAdvisingForm />} />
        <Route
          path="/print_advising/:sem/:sy/:yl"
          element={<PrintPreAdivsing />}
        />
        <Route
          path="/student_login"
          element={<StudentLogin onLogin={handleLogin} />}
        />
        <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/students" element={<Student />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/admin_login"
          element={<AdminLogin onLogin={handleLogin} />}
        />
        <Route path="/settings/list_subject" element={<ListSubject />} />
        <Route path="/settings/add_subject" element={<AddSubject />} />
        <Route
          path="/settings/update_subject/:id"
          element={<UpdateSubject />}
        />
        <Route
          exact
          path="/settings/about_developer"
          element={<AboutDeveloper />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App
