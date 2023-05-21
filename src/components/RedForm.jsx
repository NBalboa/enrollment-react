import React from "react";
import "../css/red_form.css"
import Logo from "../assets/wmsu_main.png"

function RedForm({copyOf, subject, studentName, studentId, studentDetails}) {


    const totalUnits = subject.reduce((acc, curr) => {
        return acc + curr.unit;
    }, 0)

    const iterateBlank = () => {
        const limit = 5;

        const remaining = limit - subject.length;

        if(remaining > 0){
          return remaining;
        }
        else {
          return 0;
        }
    }

    return (
      <div>
        <table className="red_form_table">
          <thead>
            <tr>
              <td colSpan="6">
                <h3>Enrollment Advising Form</h3>
                <p>
                  <span className="bold">Avoid Erasure!</span> Erasure will not
                  be validate by the computer
                </p>
              </td>
              <td colSpan="6">
                <div className="naay-logo">
                  <h6>Western Mindanao State University</h6>
                  <img src={Logo} />
                </div>
                <p>Normal Road, Zamboanga</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">
                Name <span style={{ color: "black" }}>{studentName}</span>
              </td>
              <td colSpan="3"></td>
              <td colSpan="3">
                College <span style={{ color: "black" }}>Pagadian</span>
              </td>
              <td colSpan="3">
                Student No. <span style={{ color: "black" }}>{studentId}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                Course{" "}
                <span style={{ color: "black" }}>
                  {studentDetails.program.split("MAJOR IN")[0]}
                </span>
              </td>
              <td colSpan="3">
                Major{" "}
                <span style={{color: "black"}}>
                  {studentDetails.program.split("MAJOR IN")[1] !== undefined
                    ? studentDetails.program.split("MAJOR IN")[1].trim()
                    : ""}
                </span>
              </td>
              <td colSpan="2">
                Year{" "}
                <span style={{ color: "black" }}>
                  {studentDetails.yearLevel}
                </span>
              </td>
              <td colSpan="1.5">
                Sem{" "}
                <span style={{ color: "black" }}>
                  {studentDetails.semester}
                </span>
              </td>
              <td colSpan="1"></td>
              <td colSpan="1">
                SY{" "}
                <span style={{ color: "black" }}>
                  {studentDetails.schoolYear}
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="1">Subject ID</td>
              <td colSpan="1">Subject Code</td>
              <td colSpan="4">Subject Description</td>
              <td colSpan=".5">Units</td>
              <td colSpan=".5">Time</td>
              <td>Days</td>
              <td>Room</td>
              <td>Remarks</td>
            </tr>
            {/* subject content here */}

            {subject.map((subject) => (
              <tr key={subject.id}>
                <td colSpan="1" style={{ textAlign: "center", color: "black" }}>
                  {subject.subject_id}
                </td>
                <td colSpan="1" style={{ textAlign: "center", color: "black" }}>
                  {subject.subject_code}
                </td>
                <td colSpan="4" style={{ textAlign: "center", color: "black" }}>
                  {subject.subject_description}
                </td>
                <td
                  colSpan=".5"
                  style={{ textAlign: "center", color: "black" }}
                >
                  {subject.unit}
                </td>
                <td colSpan=".5"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
            {iterateBlank() > 0 &&
              [...Array(iterateBlank())].map((e, i) => (
                <tr key={i}>
                  <td colSpan="1" style={{ color: "transparent" }}>
                    blank
                  </td>
                  <td colSpan="1"></td>
                  <td colSpan="4"></td>
                  <td colSpan=".5"></td>
                  <td colSpan=".5"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}

            {/* subject content here */}
            <tr>
              <td colSpan="1"></td>
              <td colSpan="1"></td>
              <td colSpan="4" style={{ textAlign: "end" }}>
                Total Units
              </td>
              <td colSpan=".5" style={{ textAlign: "center", color: "black" }}>
                {totalUnits}
              </td>
              <td colSpan=".5"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bottom">
              <td colSpan="3">Advised by:</td>
              <td colSpan="2" style={{ textAlign: "end" }}>
                Approved by:
              </td>
            </tr>
            <tr>
              <td colSpan="10" style={{ textAlign: "end" }}>
                COLLEGE REGISTRAR
              </td>
            </tr>
          </tfoot>
        </table>
        <h6
          style={{ color: "crimson", textAlign: "center", fontWeight: "bold" }}
        >
          {copyOf.toUpperCase()}'S COPY
        </h6>
        <h5
          style={{
            color: "crimson",
            textAlign: "end",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          WMSU- REG-FR-017.00
        </h5>
        <h5
          style={{
            color: "crimson",
            textAlign: "end",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Effective Date: 31-Oct-2016
        </h5>
      </div>
    );
}


export default RedForm