import React from 'react'
import "../Styles.css"
import ProfilePic from "../assets/react.svg"
import { Link } from "react-router-dom"

function SideMenu() {
    return (
        <div className='side-menu__container'>
            <div className='side-menu__wrapper'>
                <div className='profile__wrapper'>
                    <div className='profile'>
                        <img src={ProfilePic} alt="Employee's Profile Pic" className='profile__img' />
                    </div>
                    <h1 className='profile__title'>Admin</h1>
                </div>
                <ul className='side-menu__links'>
                    <li><Link className='side-menu__link' to="/">Dashboard</Link></li>
                    <li><Link className='side-menu__link' to="/admission">Admission</Link></li>
                    <li><Link className='side-menu__link' to="/enlistment">Student</Link></li>
                    <li><Link className='side-menu__link' to="#">Menu</Link></li>
                    <li><a className='side-menu__link' href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu