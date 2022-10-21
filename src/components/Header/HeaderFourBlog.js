import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Icofont from "react-icofont";
import Scrollspy from "react-scrollspy";
import useWindowSize from "../../helpers/GetWindowSize";
import dataNavbarBlog from "../../data/Navbar/navbar-resume-blog.json";
import dataSocial from "../../data/Social/social-data.json";
import MainLogoTwo from "../../elements/Logo/MainLogoTwo";
import SocialItem from "../../elements/SocialItem";

const HeaderFourBlog = () => {
  const size = useWindowSize();
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  return (
    <nav
      className="navbar navbar-four fixed-top navbar-light navbar-expand-lg navbar-sidebar navbar-scrollspy bootsnav no-full"
      data-minus-value-desktop="0"
      data-minus-value-mobile="0"
      data-speed="1000"
    >
      <div className="scroller" style={{ height: window.innerWidth > 991 ? size.height : "auto" }}>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className={"navbar-toggler " + (collapse ? "collapsed" : "")}
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-expanded="false"
              onClick={() => showMenu()}
            >
              <Icofont icon="navigation-menu" />
            </button>
            <MainLogoTwo />
          </div>
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["home"]}
              currentClassName="active"
              className="nav navbar-nav navbar-right"
              data-in="fadeInLeft"
            >
              {dataNavbarBlog.map((item, i) => (
                <li key={item.id} >
                  <a
                    href={`${process.env.PUBLIC_URL}` + '/'}
                  >
                    <i className="fa fa-home"></i> {item.title}
                  </a>
                </li>
              ))}
            </Scrollspy>

          </div>
        </div>
      </div>
    </nav >
  );
};

export default HeaderFourBlog;
