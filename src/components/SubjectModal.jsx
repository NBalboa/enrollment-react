import React,{useEffect, useState} from 'react'
import axios from 'axios';
import SubjectStudent from './SubjectStudent';
import ReactPaginate from 'react-paginate';


function SubjectModal({onAddSubject}) {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [type , setType] = useState('subject_code');

    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };

    const itemsPerPage = 5;
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

    console.log(selectedItems);

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
}

      const handleSubjects = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:3000/api/subject/list_subjects"
          );
          console.log(data.data);
          setData(data.data);
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        handleSubjects();
        }, []);

  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Subjects
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
                {selectedItems.map((data) => (
                  <SubjectStudent
                    key={data.id}
                    data={data}
                    onAddSubject={onAddSubject}
                  />
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-5">
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectModal