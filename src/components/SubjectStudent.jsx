import React from 'react'

function SubjectStudent({data, onAddSubject}) {
  return (
    <tr>
        <td>{data.subject_id}</td>
        <td>{data.subject_code}</td>
        <td>{data.subject_description}</td>
        <td>{data.type}</td>
        <td>{data.unit}</td>
        <td>
            <button className="add_btn" onClick={() => onAddSubject(data)}>Add</button>
        </td>
    </tr>
  )
}

export default SubjectStudent