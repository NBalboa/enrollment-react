import React, {useState, useEffect} from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import "../Styles.css"
import "../css/card.css"
import axios from 'axios'
import Students from "../components/Students";
import "../css/student.css";

function Dashboard() {

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [male, setMale] = useState(0);
    const [female, setFemale] = useState(0);
    const [academic, setAcademic] = useState([]);
    const [sy, setSy] = useState("all");

    const handleCount = async function() {
        const { data } = await axios.get(
            "http://localhost:3000/api/admission/counting"
        );
        const details = data[0]
        // console.log(details);
        setTotal(details.total);
        setMale(details.male)
        setFemale(details.Female)
    }

    const handleData = async function() {
        const { data } = await axios.get(
            "http://localhost:3000/api/admission/recent_add"
        );
        // console.log(data);
        setData(data);
    }

    const academicYear = async function() {
      try {

        const { data } = await axios.get(
          "http://localhost:3000/api/student/academic_year"
        );
        console.log(data.data)
        setAcademic(data.data);

      }catch(err){
        console.log(err)
      }
    }

    const handleStudentFilterByYear = async function (e) {
      e.preventDefault();
      setSy(e.target.value)
      const value = e.target.value.split(",")

      if (e.target.value === "all") {
        handleData();
        handleCount();
        return;
      }
      const { data } = await axios.get(
        `http://localhost:3000/api/student/filter_by_year/${value[0]}/${value[1]}`
      );

      // const value = e.target.value.split(",")
      filterCount(value[0], value[1])
      setData(data.data);
    };

    const filterCount = async (year, sem) => {
      const { data } = await axios.get(
        `http://localhost:3000/api/student/count/${year}/${sem}`
      );

      console.log(data.data)

      const details = data.data[0]
      //   console.log(details);
      setTotal(details.total);
      setMale(details.male);
      setFemale(details.Female);

    }

    const handleDelete = async function (id) {
      const userChoice = window.confirm(
        "Are you sure you want to delete this student?"
      );

      if (userChoice) {
        const { data } = await axios.delete(
          `http://localhost:3000/api/admission/delete/${id}`
        );
      }

      // console.log(data);
      handleData();
    };


    useEffect(() => {
        handleCount();
        handleData();
        academicYear();
    }, [])

    return (
      <div id="menu__container">
        <SideMenu />
        <div className="pages__container">
          <div className="pages__wrapper">
            <Header title={"Dashboard"} />
            <div className="page__container">
              <div className="page__row">
                <h3>Select Academic Year</h3>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  value={sy}
                  onChange={handleStudentFilterByYear}
                >
                  <option value="all">All</option>
                  {academic.map((academic) => (
                    <option key={academic.id} value={`${academic.sy},${academic.semester}`}>
                      {academic.sy}, {academic.semester}{academic.semester === "1" ? "st": "nd"} Semester
                    </option>
                  ))}
                </select>
                <div className="cards__container">
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h3 className="m-b-20">Total No. Admitted</h3>
                      <h2 className="text-right">
                        <i className="fa-solid fa-globe">
                          <span className="ms-3">{total}</span>
                        </i>
                      </h2>
                    </div>
                  </div>
                  <div className="card bg-c-blue order-card">
                    <div className="card-block">
                      <h3 className="m-b-20">No. of Male Admitted</h3>
                      <h2 className="text-right">
                        <i className="fa-solid fa-person">
                          <span className="ms-3">{male}</span>
                        </i>
                      </h2>
                    </div>
                  </div>
                  <div className="card bg-c-pink order-card">
                    <div className="card-block">
                      <h3 className="m-b-20">No. of Female Admitted</h3>
                      <h2 className="text-right">
                        <i className="fa-solid fa-person-dress">
                          <span className="ms-3">{female}</span>
                        </i>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="recent__added">
                  <h2>Recent Added</h2>
                  <div className="student__wrappper">
                    <table className="student__table">
                      <thead>
                        <tr className="student__row--header">
                          <th className="student__cell">Student I.D</th>
                          <th className="student__cell">Student Name</th>
                          <th className="student__cell">Enrollment Status</th>
                          <th className="student__cell">Admission</th>
                          <th className="student__cell">Program</th>
                          <th className="student__cell">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((student) => (
                          <Students
                            key={student.id}
                            data={student}
                            handleDelete={handleDelete}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard