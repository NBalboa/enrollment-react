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


    const handleCount = async function() {
        const { data } = await axios.get(
            "http://localhost:3000/api/admission/counting"
        );
        const details = data[0]
        setTotal(details.total);
        setMale(details.male)
        setFemale(details.Female)
    }

    const handleData = async function() {
        const { data } = await axios.get(
            "http://localhost:3000/api/admission/recent_add"
        );
        console.log(data);
        setData(data);
    }

     const handleDelete = async function (id) {
       const { data } = await axios.delete(
         `http://localhost:3000/api/admission/delete/${id}`
       );
       console.log(data);
       handleData();
     };


    useEffect(() => {
        handleCount();
        handleData();
    }, [])

    return (
      <div id="menu__container">
        <SideMenu/>
        <div className="pages__container">
          <div className="pages__wrapper">
            <Header title={"Dashboard"} />
            <div className="page__container">
              <div className="page__row">
                <div className="cards__container">
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h3 className="m-b-20">Total No. Admitted</h3>
                      <h2 className="text-right">
                        <i className="fa-solid fa-globe">
                          <span className="ms-3">{male}</span>
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
                        {data.map(student => <Students key={student.id} data={student} handleDelete={handleDelete} />)}
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