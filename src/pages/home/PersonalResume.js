import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import BlogStandard from "../blog/BlogStandard";
import FsLightbox from "fslightbox-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import HeaderFour from "../../components/Header/HeaderFour";
import HeroSliderOne from "../../components/Hero/HeroSliderOne";
import Welcome from "../../components/WelcomeSection/Welcome";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import WhoWeAreFour from "../../components/WhoWeAre/WhoWeAreFour";
import OurServicesTwo from "../../components/OurServices/OurServicesTwo";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import Resume from "../../components/Resume/Resume";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterTwo from "../../components/Footer/FooterTwo";
import Portfolio from "../../components/Portfolio/Portfolio";
import SubscribeApp from "../../components/Subscribe/AppStyle/SubscribeApp";
import BlogSlider from "../../components/Blog/BlogSlider";
import BlogCarousel from "../blog/BlogCarousel";


const PersonalResume = () => {
  useBodyClass("wrap-nav-sidebar");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const home = useRef();
  const products = useRef();
  const sobreMi = useRef();
  const testimonials = useRef();
  const blog = useRef();
  // const contact = useRef();
  // const suscribe = useRef();
  const history = useHistory();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sobreMi":
        sobreMi.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "products":
        products.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonials.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "blog":
        blog.current.scrollIntoView({ behavior: "smooth" });
        break;
      // case "contact":
      //   contact.current.scrollIntoView({ behavior: "smooth" });
      //   break;
      // case "suscribe":
      //   suscribe.current.scrollIntoView({ behavior: "smooth" });
      //   break;
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
      <Welcome
        title="Soy Felicitas Ruiz"
        tagline="Experimenta un poco sobre mi"
        scrollToSection={scrollToSection}
        ref={sobreMi}
      ></Welcome>
      <OurServicesTwo />
      <Portfolio
        columns="3"
        layout="wide"
        filter="true"
        items="6"
        classAppend="pt-0"
        ref={products}
      />

      <BlogSlider
        ref={blog}
      />

      <TestimonialsOne
        title="Testimonials"
        tagline="Happy clients"
        ref={testimonials}
      />
      {/* <ContactTwo ref={contact} classAppend="mt-0" />
          <SubscribeApp ref={suscribe} /> */}

    </Loader >
  );
};

export default PersonalResume;
