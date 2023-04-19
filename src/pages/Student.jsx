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
    // const [studentID, setStudentID] = useState("");
    // const [name, setName] = useState();
    const [data, setData] = useState([]);
    const [type, setType] = useState("student_id");
    const [keyword, setKeyword] = useState("");

    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };

    const itemsPerPage = 5;
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

    // console.log(selectedItems);

    const handleData = async function() {
        const { data } = await axios.get(
          "http://localhost:3000/api/admission/students"
        );
        // console.log(data);
        setData(data);
    }


    // const handleDownload = async function() {
    //     e.preventDefault();
    //     const { data } = await axios.get(
    //       "http://localhost:3000/api/studen/data"
    //     );
    //     console.log(data);
    //     // setData(data);
    // }




    const handleSearch = async (e) => {

        e.preventDefault();

        if(type === "all"){
          handleData()
          return
        }

        if(keyword === ""){
          alert("Please enter a search keyword")
          return
        }

        const {data} = await axios.post(`http://localhost:3000/api/admission/search/${type}/${keyword}`)

        if(data.result.length > 0){
          setData(data.result)
        }
        else{
          alert("No result found")
        }
        // console.log(data.result)
       
    }

    const handleDelete = async function (id) {

        const userChoice = window.confirm("Are you sure you want to delete this student?")

        if(userChoice){
          const { data } = await axios.delete(
            `http://localhost:3000/api/admission/delete/${id}`
          );
        }
        
        // console.log(data);
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
                    <input
                      type="text"
                      id="search"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <div className="search__by">
                      <label>Search by: </label>
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="student_id">Student I.D.</option>
                        <option value="name">Student Name</option>
                        <option value="all">Show All</option>
                      </select>
                    </div>
                    <button
                      className="btn btn-small btn-success"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
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
                    </tbody>
                  </table>
                  <a
                    className="btn btn-success"
                    href="http://localhost:3000/api/student/data"
                    target='_blank'
                  >
                    Download
                  </a>
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