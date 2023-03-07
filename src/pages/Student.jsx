import React, { useEffect, useState } from 'react'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import axios from 'axios'
import "../Styles.css"
import "../css/student.css"

function Student() {

    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("ID");
    const [data, setData] = useState([]);

    const handleData = async function() {
        const { data } = await axios.get(
          "http://localhost:3000/api/admission/students"
        );
        console.log(data);
        setData(data);
    }



    useEffect(() => {
        handleData();
    }, [])

    if(!search) {
        console.log("Show all")
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);

        if(!search){
            console.log("Show all")
        }
        else{
            console.log("Show specific data")
        }
        console.log(searchBy);
    }

    const handleDelete = async function (id) {
        const { data } = await axios.delete(
            `http://localhost:3000/api/admission/delete/${id}`
        );
        console.log(data);
        handleData();
    };


    return (
        <div id='menu__container'>
            <SideMenu />
            <div className='pages__container'>
                <div className='pages__wrapper'>
                    <Header title={"Student"} />
                    <div className='page__container'>
                        <div className='page__row'>
                            <h3 className='search__title'>Search a Student</h3>
                            <div className='search__student'>
                                <div className='search__wrapper'>
                                    <input type='text' id='search' onChange={handleSearch} />
                                    <div className='search__by'>
                                        <label>Search by: </label>
                                        <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                                            <option value='ID'>Student I.D.</option>
                                            <option value='name'>Student Name</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='student__wrappper'>
                                <table className='student__table'>
                                    <thead>
                                        <tr className='student__row--header'>
                                            <th className='student__cell'>Student I.D</th>
                                            <th className='student__cell'>Student Name</th>
                                            <th className='student__cell'>Enrollment Status</th>
                                            <th className='student__cell'>Admission</th>
                                            <th className='student__cell'>Program</th>
                                            <th className='student__cell'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(student => 
                                        <tr className='student__row'>
                                            <td className='student_cell'>{student.student_id}</td>
                                            <td className='student_cell'>{student.last_name}, {student.first_name} {student.middle_name[0]}</td>
                                            <td className='student_cell'>{student.enrollment_status}</td>
                                            <td className='student_cell'>{student.type_of_admission}</td>
                                            <td className='student_cell'>{student.program}</td>
                                             <td className='student__cell'>
                                                <ul className='student__action'>
                                                    <li><a href='#' className='see__profile'>See Profile</a></li>
                                                    <li><a href='#' className='update__profile'>Update Profile</a></li>
                                                    <li><a type='button' onClick={ () => handleDelete(student.id) } className='delete__student'>Delete Student</a></li>
                                                </ul>
                                            </td>

                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student