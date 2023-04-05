import React from 'react'
import TopMenu from '../components/TopMenu'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
function Settings() {
  return (
    <div id="menu__container">
        <SideMenu />
        <div className="pages__container">
          <div className="pages__wrapper">
            <Header title={"Dashboard"} />
            <TopMenu/>
            <div className="page__container">
              <div className="page__row">
                <h1>Create an Account</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings