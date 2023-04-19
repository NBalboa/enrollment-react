import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import ProfilePic from "../assets/react.svg";
import "../css/AboutDeveloper.css";

function AboutDeveloper() {
  return (
    <div id="menu__container">
      <SideMenu />
      <div className="pages__container">
        <div className="pages__wrapper">
          <Header title={"Dashboard"} />

          <TopMenu />

          <div className="page__container">
            <div className="page__row">
              <div className="text__container0">
                <h1>Project Manager/Training Head</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget enim justo. Sed ac nulla sit amet odio eleifend
                  dignissim. Fusce laoreet felis ac tellus tristique, at
                  pharetra urna suscipit. Praesent ac ipsum nisl. Donec aliquet
                  bibendum orci id dictum. Fusce at faucibus urna. Maecenas
                  gravida ut quam eget dignissim. Aenean eget nunc ac eros
                  bibendum sodales a vel mi.
                </p>
              </div>
              <div className="image__container0">
                <img src={ProfilePic} alt="Developer" />
              </div>
            </div>
          </div>
          <div className="page__container">
            <div className="page__row">
              <div className="image__container0">
                <img src={ProfilePic} alt="Developer" />
              </div>
              <div className="text__container0">
                <h1>Analyst</h1>
                <p>
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
          <div className="page__container">
            <div className="page__row">
              <div className="text__container0">
                <h1>Archivist</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget enim justo. Sed ac nulla sit amet odio eleifend
                  dignissim. Fusce laoreet felis ac tellus tristique, at
                  pharetra urna suscipit. Praesent ac ipsum nisl. Donec aliquet
                  bibendum orci id dictum. Fusce at faucibus urna. Maecenas
                  gravida ut quam eget dignissim. Aenean eget nunc ac eros
                  bibendum sodales a vel mi.
                </p>
              </div>
              <div className="image__container0">
                <img src={ProfilePic} alt="Developer" />
              </div>
            </div>
          </div>
          <div className="page__container">
            <div className="page__row">
              <div className="image__container0">
                <img src={ProfilePic} alt="Developer" />
              </div>
              <div className="text__container0">
                <h1>Programmer</h1>
                <p>
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
          <div className="page__container">
            <div className="page__row--developer">
              <div className="text__container0">
                <h1>Tester</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget enim justo. Sed ac nulla sit amet odio eleifend
                  dignissim. Fusce laoreet felis ac tellus tristique, at
                  pharetra urna suscipit. Praesent ac ipsum nisl. Donec aliquet
                  bibendum orci id dictum. Fusce at faucibus urna. Maecenas
                  gravida ut quam eget dignissim. Aenean eget nunc ac eros
                  bibendum sodales a vel mi.
                </p>
              </div>
              <div className="image__container0">
                <img src={ProfilePic} alt="Developer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDeveloper;
