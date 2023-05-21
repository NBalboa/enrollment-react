import React, {useState, useEffect}from 'react'
import "../css/pre_advising.css";
import { useNavigate, useParams } from "react-router-dom";
import StudentTopNav from '../components/StudentTopNav';
import { Link } from 'react-router-dom';
import RedForm  from '../components/RedForm';
import axios from 'axios';

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

    const saveSubjectEnrolled = async () => {

        const date = new Date().toISOString().slice(0, 19).replace("T", " ");

        // date_now = date = new Date().toISOString().slice(0, 19).replace("T", " ");
        const subject = JSON.parse(localStorage.getItem("selectSubject"));
        const current = JSON.parse(localStorage.getItem("currentUser"));


        const saveSubject = subject.map((item) => {
          return [
              item.id,
              current.id,
              sem,
              sy,
              yl,
              date,
              date
          ]
        })

        const save = {
          test_values : saveSubject
        }

        try {
          const { data }  = await axios.post(
            "http://localhost:3000/api/subject/add_subjects_history",
            save
          );
          alert(data.data)
        }catch(err){
          console.log(err)
        }
    }

    // alert(sy)

    const studentDetails  = {
      semester: sem,
      schoolYear: sy,
      yearLevel: yl,
      program: program
    }

    const handlePrint = () => {
        window.print();
    }

    const handleSelectedSubject = () => {
        const selectedSubject = JSON.parse(localStorage.getItem("selectSubject"));
        if(!selectedSubject) {
            alert("Please select a subject first")
            navigate("/pre_advising");
        }
        // console.log(selectedSubject)
        setSelectedSubject(selectedSubject);
    }
    const handleCurrentUser = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      // console.log(`the current user ${currentUser.role}`);

      if (currentUser) {
        const studentDetails = currentUser;
        // console.log(studentDetails.program);
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
        <div className="column-twice" style={{ marginTop: "20px" }}>
          <RedForm
            copyOf={"Student"}
            subject={selectedSubject}
            studentName={studentName}
            studentId={studentId}
            studentDetails={studentDetails}
          />
          <p className="liner"></p>
          <RedForm
            copyOf={"Dean"}
            subject={selectedSubject}
            studentName={studentName}
            studentId={studentId}
            studentDetails={studentDetails}
          />
        </div>
        <button
          className="btn btn-primary print_button mt-4 me-2"
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          className="btn btn-primary print_button mt-4 me-2"
          onClick={saveSubjectEnrolled}
        >
          Save
        </button>
        <Link to="/pre_advising" className="btn btn-primary print_button mt-4">
          Home
        </Link>
      </div>
    </div>
  );
}

export default PrintPreAdivsing