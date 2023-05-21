import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Dashboard from "./pages/Dashboard";
import Admission from "./pages/Admission";
import Student from "./pages/Student";
import UpdateForm from "./pages/UpdateForm";
import StudentProfile from "./pages/StudentProfile";
import Settings from "./pages/Settings";
import ListSubject from "./pages/ListSubject";
import AddSubject from "./pages/AddSubject";

import AdminLogin from "./pages/AdminLogin";
import UpdateSubject from "./pages/UpdateSubject";
import { CurrentUserContext } from "./CreateContext";
import PreAdvisingForm from "./pages/PreAdvisingForm";
import StudentLogin from "./pages/StudentLogin";
import PrintPreAdivsing from "./pages/PrintPreAdivsing";

import AboutDeveloper from "./pages/AboutDeveloper";
// import AboutCompany from "./pages/AboutCompany";

import AboutCompany from "./pages/AboutCompany";
import Enrollment from "./pages/Enrollment";


import AddProgam from "./pages/AddProgam";
import ListProgram from "./pages/ListProgram";

function App() {

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
          element={<StudentLogin  />}
        />
        {/* <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/students" element={<Student />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/admin_login"
          element={<AdminLogin />}
        />
        <Route path="/settings/list_subject" element={<ListSubject />} />
        <Route path="/settings/add_subject" element={<AddSubject />} />

        <Route path="/settings/add_program" element={<AddProgam />} />
        <Route path="/settings/list_program" element={<ListProgram />} />

        <Route
          path="/settings/update_subject/:id"
          element={<UpdateSubject />}
        />
        <Route
          exact
          path="/settings/about_developer"
          element={<AboutDeveloper />}
        />
        <Route
          exact
          path="/settings/about_company"
          element={<AboutCompany />}
        />
        <Route path="/settings/enrollment" element={<Enrollment/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
