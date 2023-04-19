import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function StudentTopNav() {

    const [fullName, setFullname] = useState("");


    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem('currentUser')
        localStorage.clear()
        navigate('/student_login')
    }

    const handleCurrentUser = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // console.log(`the current user ${currentUser.role}`)

        if (currentUser) {
            const studentDetails = currentUser;
            setFullname(
                `${studentDetails.first_name} ${studentDetails.middle_name[0]} ${studentDetails.last_name}`
            );
        } else {
            navigate("/student_login");

            // console.log(currentUser)
            // navigate("/student_login");
        }
    }

    useEffect(() => {
        handleCurrentUser();
    }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <!-- Brand name --> */}
        <Link className="navbar-brand" to='/pre_advising'>
          Hi, {fullName}
        </Link>

        {/* <!-- Logout button --> */}

        {/* <!-- Mobile toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navigation items --> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary" type="button" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
            {/* <!-- Navigation items go here --> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default StudentTopNav