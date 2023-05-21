import React, {useState} from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import axios from "axios";

function AddSubject() {

  const [subjectCode, setSubjectCode] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [subjectID, setSubjectID] = useState("");
  // const [hour, setHour] = useState("");
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("Lecture");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subject = {
      subject_id: subjectID,
      subject_code: subjectCode,
      subject_description:subjectDescription,
      type: type,
      unit:unit,
    };

    try{
      const res = await axios.post("http://localhost:3000/api/subject/add_subject", subject);
      if(res.data.errors){
        let errorString = "";
        res.data.errors.forEach((error) => {
          errorString += error.msg + "\n";
        });
        alert(errorString);
      }
      else{
        alert(res.data.data);
      }
    }
    catch(err){
      console.log(err);
    }
  };


  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <div className="container">
                <h3 className="text-center mt-5 mb-4">Add Subject</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="subject-code" className="form-label">
                      Subject ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject-code"
                      value={subjectID}
                      onChange={(e) => setSubjectID(e.target.value)}
                    />
                  </div>
                  <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="subject-code" className="form-label">
                        Subject Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject-code"
                        value={subjectCode}
                        onChange={(e) => setSubjectCode(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="subject-type">
                        Subject Type
                      </label>
                      <select className="form-select mt-2" id="subject-type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="Lecture">Lecture</option>
                        <option value="Lab and Lecture">Lecture and Lab</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject-description" className="form-label">
                      Subject Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject-description"
                      value={subjectDescription}
                      onChange={(e) => setSubjectDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="unit" className="form-label">
                      Unit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="unit"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Subject"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubject;
