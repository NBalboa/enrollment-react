import React, { useState, useEffect, useRef } from "react";
import "../css/pre_advising.css";
import WmsuLogo from "../assets/wmsu_logo.jpg";
import SubjectModal from "../components/SubjectModal";
import StudentTopNav from "../components/StudentTopNav";
import { useNavigate, Link } from "react-router-dom";


function PreAdvisingForm() {
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [studentName, setStudentName] = useState("");
  const [program, setProgram] = useState("");
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();
  const printRef = useRef();

  const handlePrint = () => {
    // const printWindow = window.open("Hi", "PRINT", "height=400,width=600");

    // printWindow.document.write("<html><head><title>Print</title>");
   
    // printWindow.document.write("</head><body>");
    // printWindow.document.write(printRef.current.innerHTML);
    // printWindow.document.write("</body></html>");
    // printWindow.document.close();
    // printWindow.focus();
    // printWindow.print();
    // printWindow.close();
    window.print();
  };

  const handleSubjectExist = () => {
    const selectedSubject = JSON.parse(localStorage.getItem("selectSubject"));
    if (selectedSubject) {
      setSelectedSubject(selectedSubject);
    }
  };

  const handleCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(`the current user ${currentUser.role}`);

    if (currentUser) {
      const studentDetails = currentUser;
      console.log(studentDetails.program)
      setStudentName(
        `${studentDetails.last_name}, ${studentDetails.first_name} ${studentDetails.middle_name[0]}.`
      );
      setStudentId(studentDetails.student_id);
      setProgram(studentDetails.program);
      setProfile(`http://localhost:3000/${studentDetails.profile}`)
    } else {
      // console.log(currentUser)
      navigate("/student_login");
    }
  };


  const [selectedSubject, setSelectedSubject] = useState([]);

  const handleAddSubject = (subject) => {
    const isSubjectAlreadySelected = selectedSubject.some(
      (s) => s.id === subject.id
    );

    if (!isSubjectAlreadySelected) {
      // If subject id is not already in selectedSubject, add it
      setSelectedSubject(prev => {
        const updateSelectedSubject = [...prev, subject];
        localStorage.setItem("selectSubject", JSON.stringify(updateSelectedSubject));
        
        return updateSelectedSubject;
      });
      localStorage.setItem("semester", semester);
      localStorage.setItem("schoolYear", schoolYear);
      localStorage.setItem("yearLevel", yearLevel);
      console.log(selectedSubject);
    } else {
      alert(`Subject with id ${subject.id} is already selected`);
    }
  };

  const handleDeleteSubject = (subject) => {
    const newSelectedSubject = selectedSubject.filter(
      (s) => s.id !== subject.id
    );
    setSelectedSubject(newSelectedSubject);
  };

  useEffect(() => {
    handleCurrentUser();
    handleSubjectExist();
  }, []);

  return (
    <div>
      <StudentTopNav />
      <h3 className="text-center mt-3">Pre-Advising Form</h3>
      <div className="student__details">
        <div className="student___profile">
          {profile ? (
            <img src={profile} alt="Profile" />
          ) : (
            <img src={WmsuLogo} alt="WMSU Logo" />
          )}
          {/* <img src={WmsuLogo} alt="WMSU Logo" /> */}
        </div>
        <div className="student__info">
          <form>
            <div className="two_input">
              <div className="two_input-group">
                <label>Student ID</label>
                <input type="text" value={studentId} disabled />
              </div>
              <div className="two_input-group">
                <label>Semester</label>
                <input
                  type="text"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
            </div>
            <div className="two_input">
              <div className="two_input-group">
                <label>School Year</label>
                <input
                  type="text"
                  value={schoolYear}
                  onChange={(e) => setSchoolYear(e.target.value)}
                />
              </div>
              <div className="two_input-group">
                <label>Level</label>
                <input
                  type="text"
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                />
              </div>
            </div>
            <div className="one_input">
              <label>Student Name</label>
              <input type="text" value={studentName} disabled />
            </div>
            <div className="one_input">
              <label>Program</label>
              <input type="text" value={program} disabled />
            </div>
          </form>
        </div>
      </div>
      <h3 className="text-center mb-4">Subject to Pre-enroll</h3>
      <table className="student_table">
        <thead>
          <tr>
            <th>Subject ID</th>
            <th>Subject Code</th>
            <th>Subject Description</th>
            <th>Units</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedSubject.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.subject_code}</td>
              <td>{subject.subject_description}</td>
              <td>{subject.unit}</td>
              <td>
                <button
                  className="delete__btn"
                  onClick={() => handleDeleteSubject(subject)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons__subject">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Show Subjects
        </button>
        <Link
          to={`/print_advising/${semester}/${schoolYear}/${yearLevel}`}
          className={`btn btn-success ${
            (!yearLevel || !schoolYear || !semester) && "disabled"
          }`}
        >
          Preview
        </Link>
        {/* <Link to={`/print_advising/${semester}/${schoolYear}/${yearLevel}`}>Preview</Link> */}
        <SubjectModal onAddSubject={handleAddSubject} />
      </div>
    </div>
  );
}

export default PreAdvisingForm;
