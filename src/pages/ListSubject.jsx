import React, {useEffect, useState} from 'react'
import SideMenu from '../components/SideMenu';
import TopMenu from '../components/TopMenu';
import Header from '../components/Header';
import '../css/list_subject.css'
import axios from 'axios';
import Subjects from '../components/Subjects';
import ReactPaginate from "react-paginate";

function ListSubject() {

  const [datas, setData] = useState([]);
  
  const [search, setSearch] = useState('');
  const [type , setType] = useState('subject_code');

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 10;
  const pageCount = Math.ceil(datas.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = datas.slice(startIndex, startIndex + itemsPerPage);
  const validPage = currentPage < pageCount ? currentPage : 0;

  // console.log(selectedItems);


  const handleSubjects = async () => {

    try{
      const { data } = await axios.get('http://localhost:3000/api/subject/list_subjects');
      // console.log(data);
      setData(data.data);
    }
    catch(e){
      console.log(e);
    }
  }

  const handleDelete = async (id) => {
    try{
      const { data } = await axios.delete(`http://localhost:3000/api/subject/delete_subject/${id}`);
      console.log(data);
      handleSubjects();
    }
    catch(e){
      console.log(e);
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    // console.log(search);
    // console.log(type);
    // localhost:3000/api/subject/search_subject/subject_code/

    const query = `http://localhost:3000/api/subject/search_subject/${type}/${search}`

    // console.log(query);
    if (type !== "all") {
      try{
        const { data } = await axios.get(query);
        // console.log(data.success);
        if(data.success === false){
          alert(data.data);
        }
        else{
          setData(data.data);
        }
        // setData(data.data);
      }
      catch(e){
        console.log(e);
      }
    }
    else{
      handleSubjects();
    }
    // else if (type === "description") {
    //   try{
    //     const { data } = await axios.get(`http://localhost:3000/api/subject/search_subject/subject_description/${search}`);
    //     if (data.success === false) {
    //       alert(data.data);
    //     } else {
    //       setData(data.data);
    //     }
    //   }
    //   catch(e){
    //     console.log(e);
    //   }
    // }
    // else if(type === 'all'){
    //   handleSubjects();
    // }
  }

  useEffect(() => {
    handleSubjects();
  }, [])

  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h1>List of Subjects</h1>
              <div className="row mb-3">
                <div className="col">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                      className="form-select"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="subject_code">Subject Code</option>
                      <option value="subject_description">
                        Subject Description
                      </option>
                      <option value="all">Show All</option>
                    </select>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <table className="subject_table">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Subject Description</th>
                    <th>Unit</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map((subject) => (
                    <Subjects
                      key={subject.id}
                      data={subject}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  forcePage={validPage}
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
  );
}

export default ListSubject