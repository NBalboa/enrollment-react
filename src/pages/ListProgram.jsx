import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";

function ListProgram() {
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings: List Program"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProgram;
