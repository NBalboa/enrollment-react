import React from 'react'
import { Link } from 'react-router-dom';

function Subjects({data, onDelete}) {
  return (
    <tr>
      <td>{data.subject_id}</td>
      <td>{data.subject_code}</td>
      <td>{data.subject_description}</td>
      <td>{data.unit}</td>
      <td>{data.type}</td>
      <td>
        <Link
          to={`/settings/update_subject/${data.id}`}
          type="button"
          className="btn btn-outline-secondary me-2"
        >
          Update
        </Link>
        <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Subjects