import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import ProfilePic from "../assets/react.svg";
import "../css/AboutCompany.css";

function AboutCompany() {
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row--company">
              <div className="text__container">
                <h1 style={{ textAlign: "center" }}>About Our Company</h1>
                <p>
                  <div className="page__row">
                    <div className="image__container">
                      <img src={ProfilePic} alt="Company" />
                    </div>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget enim justo. Sed ac nulla sit amet odio eleifend
                  dignissim. Fusce laoreet felis ac tellus tristique, at
                  pharetra urna suscipit. Praesent ac ipsum nisl. Donec aliquet
                  bibendum orci id dictum. Fusce at faucibus urna. Maecenas
                  gravida ut quam eget dignissim. Aenean eget nunc ac eros
                  bibendum sodales a vel mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
