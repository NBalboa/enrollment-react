import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateSubject() {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [subjectID, setSubjectID] = useState("");

  const {id} = useParams();


  const getSubject = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/subject/get_subject/${id}`);
        const subject = res.data.data
        
        setSubjectCode(subject.subject_code);
        setSubjectDescription(subject.subject_description);
        setUnit(subject.unit);
        setSubjectID(subject.subject_id);

    } catch (err) {
        console.log(err);
    }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const subject = {
            subject_id: subjectID,
            subject_code: subjectCode,
            subject_description: subjectDescription,
            unit: unit,
        };

        try {
            const res = await axios.put(`http://localhost:3000/api/subject/update_subject/${id}`, subject);
            console.log(res.data);
            alert("Subject Updated Successfully")
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSubject();
    }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const subject = {
//       subject_code: subjectCode,
//       subject_description: subjectDescription,
//       unit: unit,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/subject/add_subject",
//         subject
//       );
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <div className="container">
                <h3 className="text-center mt-5 mb-4">Update Subject</h3>
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
                  <div className="mb-3">
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
                    value="Update Subject"
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

export default UpdateSubject;
