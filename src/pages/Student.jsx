import React, { useEffect, useState } from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import axios from 'axios'
import "../Styles.css"
import "../css/student.css"
import Students from '../components/Students'
import ReactPaginate from "react-paginate";

function Student() {
    const [searchBy, setSearchBy] = useState("ID");
    const [studentID, setStudentID] = useState("");
    const [name, setName] = useState();
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };

    const itemsPerPage = 5;
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

    console.log(selectedItems);

    const handleData = async function() {
        const { data } = await axios.get(
          "http://localhost:3000/api/admission/students"
        );
        console.log(data);
        setData(data);
    }





    const handleSearch = async (e) => {
        let checkLength = e.target.value;
        if(checkLength.length <= 1) {
            setName("");
            setStudentID("");
        }
        else{
            if (searchBy == "ID") {
                setStudentID(e.target.value);
                setName("");
            } else {
                setName(e.target.value);
                setStudentID("");
            }
        }
        

        const search = {
            student_id: studentID,
            name: name
        }

        const {data} = await axios.post("http://localhost:3000/api/admission/search", search, {responseType: "json"})
        if(data.result.length > 0) {
            setData(data.result)
            console.log(data.result)
        }
        else{
            setData(data.result);
            console.log("Student Not Found")
        }
    }

    const handleDelete = async function (id) {
        const { data } = await axios.delete(
            `http://localhost:3000/api/admission/delete/${id}`
        );
        console.log(data);
        handleData();
    };

    useEffect(() => {
        handleData();
    }, []);


    return (
      <div id="menu__container">
        <SideMenu />
        <div className="pages__container">
          <div className="pages__wrapper">
            <Header title={"Student"} />
            <div className="page__container">
              <div className="page__row">
                <h3 className="search__title">Search a Student</h3>
                <div className="search__student">
                  <div className="search__wrapper">
                    <input type="text" id="search" onChange={handleSearch} />
                    <div className="search__by">
                      <label>Search by: </label>
                      <select
                        value={searchBy}
                        onChange={(e) => setSearchBy(e.target.value)}
                      >
                        <option value="ID">Student I.D.</option>
                        <option value="name">Student Name</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                      {selectedItems.map((student) => (
                        <Students
                          key={student.id}
                          data={student}
                          onDelete={handleDelete}
                        />
                      ))}
                      {/* {data.map((student) => (
                        <Students
                          key={student.id}
                          data={student}
                          onDelete={handleDelete}
                        />
                      ))} */}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center">
                    <ReactPaginate
                      pageCount={pageCount}
                      onPageChange={handlePageChange}
                      forcePage={currentPage < pageCount ? currentPage : 0}
                      containerClassName="pagination"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      activeClassName="active"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Student