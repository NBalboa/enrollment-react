import React, {useState, useEffect, useContext, createContext} from 'react'
import "../Styles.css"
import ProfilePic from "../assets/react.svg"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { CurrentUserContext } from '../CreateContext.js'



function SideMenu() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");


      const handleCurrentUser = () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log(`the current user ${currentUser.role}`)

        if (currentUser.role === "admin") {
          const adminDetails = currentUser;
          setFullname(
            `${adminDetails.first_name} ${adminDetails.middle_name[0]} ${adminDetails.last_name}`
          );
        } else {
          // console.log(currentUser)
          navigate("/admin_login");
        }
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
              <img
                src={ProfilePic}
                alt="Employee's Profile Pic"
                className="profile__img"
              />
            </div>
            <h1 className="profile__title">{fullname}</h1>
          </div>
          <ul className="side-menu__links">
            {/* {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={
                    link.url === currentUrl
                      ? "side-menu__link side-menu__link--active"
                      : 'side-menu__link'
                  }
                  to={link.url}
                >
                  {link.text}
                </Link>
              </li>
            ))} */}
            {/* <li>
              <Link className='side-menu__link' onClick={handleLogout}>Logout</Link>
            </li> */}
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