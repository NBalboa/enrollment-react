import React from 'react'
import "../Styles.css"
import ProfilePic from "../assets/react.svg"

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
                    <li><a className='side-menu__link' href="#">Dashboard</a></li>
                    <li><a className='side-menu__link' href="#">Admission</a></li>
                    <li><a className='side-menu__link' href="#">Enlistment</a></li>
                    <li><a className='side-menu__link' href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu