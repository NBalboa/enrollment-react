import React, {useState, useEffect} from "react";
import "../Styles.css";
import ProfilePic from "../assets/react.svg";
import { Link, useLocation } from "react-router-dom";
import "../css/topmenu.css"

function TopMenu() {

  const currentUrl = useLocation().pathname;

  const isActive = (path) => {

    return currentUrl=== path ? "navigation--active" : "";
  }

  const isSubjectActive = (path) => {
    return currentUrl.includes(path) ? "drop navigation--active" : "drop";
  }

  const isSubjectSelectedActive = (path) => {
    return currentUrl === path ? "drop-content--active" : "";
  }

  const isProgramActive = (path) => {
    return currentUrl.includes(path) ? "drop navigation--active" : "drop";
  }

  const isProgramSelectedActive = (path) => {
    return currentUrl === path ? "drop-content--active" : "";
  }

  return (
    <nav>
      <div className="navigation">
        <Link to="/settings" className={isActive("/settings")}>
          Create an Account
        </Link>
        <div className={isSubjectActive("subject")}>
          <button className="dropbtn">
            Subjects
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="drop-content">
            <Link
              to="/settings/list_subject"
              className={isSubjectSelectedActive("/settings/list_subject")}
            >
              List of Subjects
            </Link>
            <Link
              to="/settings/add_subject"
              className={isSubjectSelectedActive("/settings/add_subject")}
            >
              Add Subjects
            </Link>
          </div>
        </div>
        <div className={isProgramActive("program")}>
            <Link
              to="/settings/add_program"
            >
              Program
            </Link>
        </div>
        {/* <div className={isProgramActive("program")}>
          <button className="dropbtn">
            Programs
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="drop-content">
            <Link
              to="/settings/list_program"
              className={isProgramSelectedActive("/settings/list_program")}
            >
              List of Program
            </Link>
            <Link
              to="/settings/add_program"
              className={isSubjectSelectedActive("/settings/add_program")}
            >
              Add Program
            </Link>
          </div>
        </div> */}
        <Link
          to="/settings/about_developer"
          className={isActive("/settings/about_developer")}
        >
          About the Developer
        </Link>
        <Link
          to="/settings/about_company"
          className={isActive("/settings/about_company")}
        >
          About the Company
        </Link>
        <Link
          to={"/settings/enrollment"}
          className={isActive("/settings/enrollment")}
        >
          Enrollment
        </Link>
      </div>
    </nav>
  );
}

export default TopMenu;
