import React, { useState, useEffect,useRef } from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";
import axios from "axios";

function AddProgam() {
  const programNameRef = useRef("");
  const majorRef = useRef("");

  const [progams, setPrograms] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const programName = programNameRef.current.value;
    const major = majorRef.current.value;

    const data = {
      program_name: programName.toUpperCase(),
      major: major.toUpperCase(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/program/add_program",
        data
      );
      alert(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPrograms = async () => {

    try {
      const response = await axios.get(
        "http://localhost:3000/api/program/get_programs"
      );
      setPrograms(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }

  };

  const updateProgramOpen = async (program_id, open) => {

    if (open == 1) {
      open = 0;
    }
    else {
      open = 1;
    }

    console.log(program_id, open);

    const data = {
      program_id: program_id,
      open: open,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/program/update_program_open",

        data
      );
      alert(response.data.data);

      getPrograms();
    } catch (err) {
      console.log(err);

    }
  };

  const deleteProgram = async (program_id) => {

    const data = {
      program_id: program_id,
    };

    try {
      const response = await axios.delete(
        "http://localhost:3000/api/program/delete_program",
        { data }
      );
      alert(response.data.data);

      getPrograms();
    } catch (err) {
      console.log(err);

    }
  };


  useEffect(() => {
    getPrograms();
  }, []);


  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings: Add Program"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h2>Add Program</h2>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="progam-name" className="form-label">
                    Program Name
                  </label>
                  <input
                    ref={programNameRef}
                    type="text"
                    className="form-control"
                    id="progam-name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="major" className="form-label">
                    Major
                  </label>
                  <input
                    ref={majorRef}
                    type="text"
                    className="form-control"
                    id="major"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="Add Program"
                    className="btn btn-success"
                  />
                </div>
              </form>
              <table className="table table-striped table-light table-hover mt-3">
                <thead>
                  <tr>
                    <th scope="col">Program Name</th>
                    <th scope="col">Major</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody >
                {progams.map((program) => (
                  <tr key={program.id}>
                    <td>{program.program_name}</td>
                    <td>{program.major}</td>
                    <td>{program.open === 1 ? "Open" : "Close" }</td>
                    <td>
                      <button 
                        className={program.open === 1 ? "btn btn-warning me-2" : "btn btn-success me-2"}
                        onClick={() => updateProgramOpen(program.id, program.open)}
                      >
                      {program.open === 1 ? "Close Program": "Open Program"}
                      </button>

                      <button className="btn btn-danger"
                        onClick={() => deleteProgram(program.id)}
                      >
                      Delete
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProgam;
