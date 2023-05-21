import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import ProfilePic from "../assets/react.svg";
import "../css/AboutCompany.css";
import CompanyLogo from "../assets/company_logo.png"

function AboutCompany() {
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <div className="company">
                <div className="company__img">
                  <img src={CompanyLogo} />
                </div>
                <div className="company__desc">
                  <h2 className="company__title">Mission</h2>
                  <p className="company__desc-h">
                    Code Red Company aims to create and develop effective
                    software systems that satisfy the wants and needs of the
                    clients.
                  </p>
                </div>
                <div className="company__desc">
                  <h2 className="company__title">Vision</h2>
                  <p className="company__desc-h">
                    Code Red Company envisions to become a prime performer in
                    providing quality software systems in the competitive global
                    marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
