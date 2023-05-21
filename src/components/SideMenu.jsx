import React, {useState, useEffect, useContext, createContext} from 'react'
// import mainStyle from "../Styles.css"
import "../Styles.css"
import ProfilePic from "../assets/react.svg"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { CurrentUserContext } from '../CreateContext.js'
import WmsuLogo from "../assets/wmsu_logo.jpg";



function SideMenu() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [adminProfile, setAdminProfile] = useState("");

    const handleProfile = () => {

      if(adminProfile){
        return (
          <img
            src={`http://localhost:3000/${adminProfile}`}
            alt="Employee's Profile Pic"
            className="profile__img"
          />
        )
        }
        else {
          return (
            <img
                src={WmsuLogo}
                alt="Employee's Profile Pic"
                className="profile__img"
              />
          )
      }

    }

      const handleCurrentUser = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // console.log(currentUser.profile)
        if(!currentUser){
          navigate("/admin_login");
        }
        else if(currentUser.role !== "admin"){
          navigate("/student_login");
        }
        else{
          const adminDetails = currentUser;
          setAdminProfile(currentUser.profile)
          setFullname(
            `${adminDetails.first_name} ${adminDetails.middle_name[0]} ${adminDetails.last_name}`
          );
        }
        // console.log(`the current user ${currentUser.role}`)

        // if (currentUser.role === "admin") {
          
        // } 
      };

      useEffect(() => {
        handleCurrentUser();
      }, []);


    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      localStorage.clear();
      navigate('/admin_login')
    }

    const currentUrl = `${window.location.pathname}`;

    const isActive = (path) => {
      return currentUrl === path
        ? "side-menu__link side-menu__link--active"
        : "side-menu__link";
    };

    const isActiveSettings = (path) => {
      return currentUrl.includes(path)
        ? "side-menu__link side-menu__link--active"
        : "side-menu__link";
    };

    return (
      <div className="side-menu__container">
        <div className="side-menu__wrapper">
          <div className="profile__wrapper">
            <div className="profile">
              {/* <img
                src={ProfilePic}
                alt="Employee's Profile Pic"
                className="profile__img"
              /> */}

              {handleProfile()}

            </div>
            <h1 className="profile__title">{fullname}</h1>
          </div>
          <ul className="side-menu__links">
            <li><Link className={isActive('/')} to="/">Dashboard</Link></li>
            <li><Link className={isActive('/admission')} to="/admission">Admission</Link></li>
            <li><Link className={isActive('/students')} to='/students'>Student</Link></li>
            <li><Link className={isActiveSettings('/settings')} to='/settings'>Settings</Link></li>
            <li><a className='side-menu__link' onClick={handleLogout} to=''>Logout</a></li>
          </ul>
        </div>
      </div>
    );
}

export default SideMenu