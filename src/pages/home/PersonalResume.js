import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import HeaderFour from "../../components/Header/HeaderFour";
import HeroSliderOne from "../../components/Hero/HeroSliderOne";
import WhoWeAreFour from "../../components/WhoWeAre/WhoWeAreFour";
import Resume from "../../components/Resume/Resume";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterTwo from "../../components/Footer/FooterTwo";
import Portfolio from "../../components/Portfolio/Portfolio";
import SubscribeApp from "../../components/Subscribe/AppStyle/SubscribeApp";
import { useHistory } from "react-router-dom";


const PersonalResume = () => {
  useBodyClass("wrap-nav-sidebar");
  const home = useRef();
  const products = useRef();
  // const contact = useRef();
  // const suscribe = useRef();
  const history = useHistory();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "products":
        products.current.scrollIntoView({ behavior: "smooth" });
        break;
      // case "contact":
      //   contact.current.scrollIntoView({ behavior: "smooth" });
      //   break;
      // case "suscribe":
      //   suscribe.current.scrollIntoView({ behavior: "smooth" });
      //   break;
      case "blog":
        history.push('/blog');
        break;
      // case "login":
      //   history.push('/login');
      //   break;
      default:
    }
  };

  return (
    <Loader>
      <HeaderFour scrollToSection={scrollToSection} />
      <HeroSliderOne ref={home} scrollToSection={scrollToSection} />
      <Portfolio
        columns="3"
        layout="wide"
        filter="true"
        items="6"
        classAppend="pt-0"
        ref={products}
      />
      {/* <ContactTwo ref={contact} classAppend="mt-0" />
      <SubscribeApp ref={suscribe} /> */}

    </Loader>
  );
};

export default PersonalResume;
