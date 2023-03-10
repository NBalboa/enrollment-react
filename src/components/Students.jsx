import React from "react";


function Students({data, onDelete}) {
    return (
        <tr className='student__row'>
            <td className='student_cell'>{data.student_id}</td>
            <td className='student_cell'>{data.last_name}, {data.first_name} {data.middle_name[0]}</td>
            <td className='student_cell'>{data.enrollment_status}</td>
            <td className='student_cell'>{data.type_of_admission}</td>
            <td className='student_cell'>{data.program}</td>
                <td className='student__cell'>
                <ul className='student__action'>
                    <li><a href='#' className='see__profile'>See Profile</a></li>
                    <li><a href='#' className='update__profile'>Update Profile</a></li>
                    <li><a type='button' onClick={ () => onDelete(data.id) } className='delete__student'>Delete Student</a></li>
                </ul>
            </td>
        </tr>
    )
}

export default Students;