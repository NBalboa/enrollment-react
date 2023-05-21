import React, { useState, useEffect, useRef } from "react";
import "../css/pre_advising.css";
import WmsuLogo from "../assets/wmsu_logo.jpg";
import SubjectModal from "../components/SubjectModal";
import StudentTopNav from "../components/StudentTopNav";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function PreAdvisingForm() {
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("1");
  const [schoolYear, setSchoolYear] = useState("");
  const [yearLevel, setYearLevel] = useState("1");
  const [studentName, setStudentName] = useState("");
  const [program, setProgram] = useState("");
  const [profile, setProfile] = useState(null);
  const [history, setHistory] = useState([]);
  const [keys, setKeys] = useState([]);

  const navigate = useNavigate();

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
      // console.log(studentDetails.program)
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


  const getSubjectHistory = async () => {
    const current = JSON.parse(localStorage.getItem("currentUser"));

    if(current) {
      const id = current.id;
  
      try {
  
        const { data } = await axios.get(
          `http://localhost:3000/api/subject/get_subjects_history/${id}`
        );
  
          const separatedByDate = data.data.reduce((result, item) => {
            const date = item.created_at; // Extracting date from created_at field
  
            if (!result[date]) {
              result[date] = [];
            }
  
            result[date].push(item);
            return result;
          }, {});
  
  
        Object.entries(separatedByDate).forEach(([key, value]) => {
          // console.log("keys", key)
          // if(!keys.includes(key)){
           setKeys((prev) => {
             if (!prev.includes(key)) {
               const updateKeys = [...prev, key];
               return updateKeys;
             }
             return prev;
           });
          // }
        });
        setHistory(separatedByDate);
        // console.log(separatedByDate);
        // console.log(keys)
      }
      catch (err) {
        console.log(err)
      }
    }
  }

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
    } else {
      alert(`Subject is already selected`);
    }
  };

  const handleDeleteSubject = (subject) => {
    const subs = JSON.parse(localStorage.getItem("selectSubject"));
    const newSelectedSubject = subs.filter(
      (s) => s.id !== subject.id
    );
    setSelectedSubject(prev => {
      const updateSelectedSubject = [...newSelectedSubject];
      localStorage.setItem("selectSubject", JSON.stringify(updateSelectedSubject));
      return updateSelectedSubject;
    });
  };

  useEffect(() => {
    handleCurrentUser();
    handleSubjectExist();
    getSubjectHistory();
  }, []);


  return (
    <div>
      <StudentTopNav />
      <h3 className="text-center mt-3">Pre-Advising Form</h3>
      <div className="student__details">
        <div className="student___profile">
          {profile !== "http://localhost:3000/" && profile ? (
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
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                {/* <input
                  type="text"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                /> */}
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
                <select
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                {/* <input
                  type="text"
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                /> */}
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
            <th>Subject Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedSubject.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.subject_id}</td>
              <td>{subject.subject_code}</td>
              <td>{subject.subject_description}</td>
              <td>{subject.unit}</td>
              <td>{subject.type}</td>
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
            (!yearLevel ||
              !schoolYear ||
              !semester ||
              selectedSubject.length < 1) &&
            "disabled"
          }`}
        >
          Preview
        </Link>
        {/* <Link to={`/print_advising/${semester}/${schoolYear}/${yearLevel}`}>Preview</Link> */}
        <SubjectModal onAddSubject={handleAddSubject} />
      </div>
      <div className="buttons__subject-left">
        <h2>History</h2>
        {/* {subjectTable()} */}
        {/* {history[keys[0]][0].created_at} */}

        <div className="history">
          {keys.map((key, index) => (
            <div key={index}>
                <p> Academic Year: {history[key][0].ay}</p>
                <p> Semester: {history[key][0].sem}</p>
                <p> Year Level: {history[key][0].level}</p>
                <table className="student_table">
                  <thead>
                    <tr>
                      <th>Subject ID</th>
                      <th>Subject Code</th>
                      <th>Subject Description</th>
                      <th>Units</th>
                      <th>Subject Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history[key].map((subject) => (
                      <tr key={subject.id}>
                        <td>{subject.subject_id}</td>
                        <td>{subject.subject_code}</td>
                        <td>{subject.subject_description}</td>
                        <td>{subject.unit}</td>
                        <td>{subject.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreAdvisingForm;
