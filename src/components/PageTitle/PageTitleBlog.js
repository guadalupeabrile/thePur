import React, { forwardRef } from "react";

const PageTitleBlog = forwardRef(
  ({ title, tagline }, ref) => (
    <section
      className="title-hero-bg blog-cover-bg"
      data-stellar-background-ratio="0.2"
      id="blog"
      ref={ref}
    >
      <div className="container">
        <div className="page-title text-center">
          <h1>{title}</h1>
          <h4 className="text-uppercase mt-30 white-color">{tagline}</h4>
        </div>
      </div>
    </section>
  )
);

export default PageTitleBlog;
