import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import ProfilePic from "../assets/react.svg";
import "../css/AboutDeveloper.css";
import charlie from "../assets/charlie.jpg";
import nicko from "../assets/nicko.jpg";
import jhovan from "../assets/jhovan.jpg";
import piedad from "../assets/piedad.jpg"
import zoren from "../assets/zoren.jpg"

function AboutDeveloper() {

  const devDetails = [
    {
      name: "Charles John C. Halasan",
      role: "Project Manager/Training Head",
      desc: "Responsible for planning and monitoring the project. In addition, I am also the one who will provide user instruction and user guides.",
      profile: charlie,
    },
    {
      name: "Nicko M. Balboa",
      role: "Programmer",
      desc: "Responsible  for coding, debugging and maintaing the system run as expected to meet the user or client's requirements.",
      profile: nicko,
    },
    {
      name: "Jhovan V. Ahig",
      role: "System Analyst",
      desc: "Responsible for maintaining user report programs , supports, and upgrades applicable system infrastructures.",
      profile: jhovan,
    },
    {
      name: "Zoren Panilagao",
      role: "Tester",
      desc: "Responsibility is to ensure the quality of the system being developed. This involves testing the software thoroughly and promptly reporting any bugs or problems encountered to the development team.",
      profile: zoren
    },
    {
      name: "Angelito S. Piedad",
      role: "Archivist",
      desc: "Responsible who collects, preserves, and makes available important records and other valuable materials, ensuring that these materials are properly cataloged, stored, and maintained for future generations",
      profile: piedad,
    }
  ];

  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Settings"} />
          <TopMenu />
          <div className="page__container">
            <div className="page__row">
              <div className="developers">
                {devDetails.map((dev, index) => (
                  <div className="developer" key={index}> 
                    <div className="developer__img">
                      <img src={dev.profile} />
                    </div>
                    <div className="developer__details">
                      <h2 className="developer__details--name">
                        {dev.name}
                      </h2>
                      <p className="developer__details--role">{dev.role}</p>
                      <p className="developer__details--desc">
                        {dev.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDeveloper;
