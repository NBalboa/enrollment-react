import React, {useState, useEffect}from 'react'
import "../css/pre_advising.css";
import { useNavigate, useParams } from "react-router-dom";
import StudentTopNav from '../components/StudentTopNav';
import { Link } from 'react-router-dom';

function PrintPreAdivsing() {
    
    const [studentId, setStudentId] = useState("");
    const [semester, setSemester] = useState("");
    const [schoolYear, setSchoolYear] = useState("");
    const [yearLevel, setYearLevel] = useState("");
    const [studentName, setStudentName] = useState("");
    const [program, setProgram] = useState("");
    const [selectedSubject, setSelectedSubject] = useState([]);

    const navigate = useNavigate();
    const {sem, sy, yl} = useParams();

    const handlePrint = () => {
        window.print();
    }

    const handleSelectedSubject = () => {
        const selectedSubject = JSON.parse(localStorage.getItem("selectSubject"));
        if(!selectedSubject) {
            alert("Please select a subject first")
            navigate("/pre_advising");
        }
        console.log(selectedSubject)
        setSelectedSubject(selectedSubject);
    }
    const handleCurrentUser = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      // console.log(`the current user ${currentUser.role}`);

      if (currentUser) {
        const studentDetails = currentUser;
        console.log(studentDetails.program);
        setStudentName(
          `${studentDetails.last_name}, ${studentDetails.first_name} ${studentDetails.middle_name[0]}.`
        );
        setStudentId(studentDetails.student_id);
        setProgram(studentDetails.program);
        // setProfile(`http://localhost:3000/${studentDetails.profile}`);
      } else {
        // console.log(currentUser)
        navigate("/student_login");
      }
    };

    useEffect(() => {
        handleCurrentUser();
        handleSelectedSubject();
    }, [])
  return (
    <div className="preview__container">
      <div className="preview__print">
        <div className="header">
          <div className="header__info">
            <h3>Western Mindanao State University</h3>
            <h4>College of Pagadian</h4>
            <h5>Pre-Advising Form</h5>
          </div>
        </div>

        <div className="student__information">
          <div className="preview">
            <div className="one_input">
              <p>Student Name</p>
              <p className="text-bold">{studentName}</p>
            </div>
            <div className="one_input">
              <p>Program</p>
              <p className="text-bold">{program}</p>
            </div>
            <div className="two_input">
              <div className="two_input-group">
                <p>Student ID</p>
                <p className="text-bold">{studentId}</p>
              </div>
              <div className="two_input-group">
                <p>Semester</p>
                <p className="text-bold">{sem}</p>
              </div>
            </div>
            <div className="two_input">
              <div className="two_input-group">
                <p>School Year</p>
                <p className="text-bold">{sy}</p>
              </div>
              <div className="two_input-group">
                <p>Level</p>
                <p className="text-bold">{yl}</p>
              </div>
            </div>
          </div>
        </div>
        <table className="student_table">
          <thead>
            <tr>
              <th>Subject ID</th>
              <th>Subject Code</th>
              <th>Subject Description</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            {selectedSubject.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.subject_code}</td>
                <td>{subject.subject_description}</td>
                <td>{subject.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary print_button mt-4 me-2" onClick={handlePrint}>
          Print
        </button>
        <Link to="/pre_advising" className="btn btn-primary print_button mt-4">Home</Link>
      </div>
    </div>
  );
}

export default PrintPreAdivsing