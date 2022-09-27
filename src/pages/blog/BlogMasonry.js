import React, { useRef, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";
import HeaderFour from "../../components/Header/HeaderFour";
import { useHistory } from "react-router-dom";


const BlogMasonry = () => {
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
        history.push('/home');
        break;
      case "products":
        history.push('/home/products');
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
      <PageTitleBlog title="The Pur Blog" tagline="Posts para tu bienestar" />
      <BlogContent type="masonry" />
    </Loader>
  );
};


export default BlogMasonry;
