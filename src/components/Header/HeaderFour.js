import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Icofont from "react-icofont";
import Scrollspy from "react-scrollspy";
import useWindowSize from "../../helpers/GetWindowSize";
import dataNavbar from "../../data/Navbar/navbar-resume.json";
import dataSocial from "../../data/Social/social-data.json";
import MainLogoTwo from "../../elements/Logo/MainLogoTwo";
import SocialItem from "../../elements/SocialItem";

const HeaderFour = ({ scrollToSection }) => {
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
            <MainLogoTwo /> {/*.logo img en master para dimensiones */}
          </div>
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["home", "sobreMi", "products", "blog", "testimonials", "contact"]} // Agregar a futuro "login", "suscribe"
              currentClassName="active"
              className="nav navbar-nav navbar-right"
              data-in="fadeInLeft"
            >
              {dataNavbar.map((item, i) => (
                <li key={item.id} >
                  <a
                    href={process.env.PUBLIC_URL + item.link}
                    onClick={(e) => {
                      scrollToSection(e, item.link);
                      showMenu()
                    }}
                  >
                    <i className="fa fa-home"></i> {item.title}
                  </a>
                </li>
              ))}
            </Scrollspy>
            <ul className="social-media-dark">
              <a
                href={'https://www.instagram.com/thepurlife_/?hl=es-la'} target="_blank">
                <i class="icofont-instagram icofont-lg"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default HeaderFour;
