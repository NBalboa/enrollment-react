import React from 'react'
import "../Styles.css"
import ProfilePic from "../assets/react.svg"
import { Link } from "react-router-dom"

function SideMenu() {
    const links = [ 
      { text: "Dashboard", url: '/'},
      { text: "Admission", url: '/admission'},
      { text: "Student", url: '/students'},
      { text: "Settings", url: '/settings'},
      { text: "Logout", url: '#'}
    ] 

    const currentUrl = `/${window.location.pathname.split('/')[1]}`;
    console.log(currentUrl)


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
            <h1 className="profile__title">Admin</h1>
          </div>
          <ul className="side-menu__links">
            {links.map((link, index) => (
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
            ))}
            {/* <li><Link className='side-menu__link' to="/">Dashboard</Link></li>
                    <li><Link className='side-menu__link' to="/admission">Admission</Link></li>
                    <li><Link className='side-menu__link' to="/students">Student</Link></li>
                    <li><Link className='side-menu__link' to="#">Menu</Link></li>
                    <li><a className='side-menu__link' href="#">Logout</a></li> */}
          </ul>
        </div>
      </div>
    );
}

export default SideMenu