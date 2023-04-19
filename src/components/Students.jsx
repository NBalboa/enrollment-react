import React from "react";
import { Link } from "react-router-dom";


function Students({data, onDelete}) {
    return (
      <tr className="student__row">
        <td className="student_cell">{data.student_id}</td>
        <td className="student_cell">
          {data.last_name}, {data.first_name} {data.middle_name[0]}
        </td>
        <td className="student_cell">{data.enrollment_status}</td>
        <td className="student_cell">{data.type_of_admission}</td>
        <td className="student_cell">{data.program}</td>
        <td className="student__cell">
          <ul className="student__action">
            <li>
              <Link to={`/student/${data.id}`} className="see__profile">
                <i className="fa-solid fa-id-card"></i>
              </Link>
            </li>
            <li>
              <Link to={`/update/${data.id}`} className="update__profile">
                <i className="fa-solid fa-wrench"></i>
              </Link>
            </li>
            <li>
              <a
                type="button"
                onClick={() => onDelete(data.id)}
                className="delete__student"
              >
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </li>
          </ul>
        </td>
      </tr>
    );
}

export default Students;