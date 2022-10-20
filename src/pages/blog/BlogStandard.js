import React, { useRef, useEffect } from "react";
import dataBlog from "../../data/Blog/blog-data.json";
import dataSocial from "../../data/Social/social-data.json";
import Loader from "../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import HeaderOne from "../../components/Header/HeaderOne";
import HeaderFour from "../../components/Header/HeaderFour";
import { useHistory } from "react-router-dom";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import SidebarForBlog from "../../components/Sidebar/SidebarForBlog";
import Icofont from "react-icofont";
import CommentsRespond from "../../components/Blog/CommentsRespond";

const BlogStandard = ({ sidebar }) => {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = dataBlog.find((post) => post.id === parseInt(postId));
  const featuredPost = dataBlog.find((post) => post.id === 1);

  useBodyClass("wrap-nav-sidebar");

  return (
    <Loader>
      <PageTitleBlog title={post.title} tagline={post.published} />
      <section className="post-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post">
                {/* <div className="post-img">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/" + featuredPost.image)}
                    alt=""
                  />
                </div> */}
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <h6>{post.published}</h6>
                  <p>{post.excerpt}</p>
                  {/* <a className="readmore white-color" href="!#">
                    <span>Read More</span>
                    <i className="icofont icofont-simple-right"></i>
                  </a> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Loader>
  );
};

export default BlogStandard;
