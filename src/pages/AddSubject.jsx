import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";

function AddSubject() {
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <h1>Add Subjects</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubject;
