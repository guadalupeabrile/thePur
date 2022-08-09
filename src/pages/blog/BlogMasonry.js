import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";

const BlogMasonry = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog title="The Pur Blog" tagline="Posts para tu bienestar" />
    <BlogContent type="masonry" />
  </Loader>
);

export default BlogMasonry;
