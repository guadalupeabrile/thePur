import React from "react";
// import ReactWow from "react-wow";
import Icofont from "react-icofont";

const PortfolioItem = ({
  title,
  category,
  image,
  links,
  space,
  groups,
  type,
  columns,
  openLightbox,
}) => {
  return (
    // <ReactWow animation="fadeIn">
    <div
      className={
        "portfolio-item col-md-" + 12 / columns +
        (type === "product" ? " portfolio-masonry-item " : " ") +
        (space === "true" ? "gutter-space" : "no-gutter")
      }
      data-wow-delay="0.2s"
      data-groups={
        groups ? "[" + groups.map((val) => `"${val}"`) + "]" : null
      }
    >
      {/* <ReactWow animation="fadeIn"> */}
      <div
        className={
          "portfolio gallery-image-hover " +
          (type === "masonry" ? "portfolio-masonry-item" : "")
        }
      >
        <div className="dark-overlay"></div>
        <img src={require("../../assets/images/" + image)} alt="" />
        <div className="portfolio-wrap">
          <div className="portfolio-description">
            <h3 className="portfolio-title">{title}</h3>
            <p className="links">{category}</p>
          </div>
          <ul className="portfolio-details">
            <li id="shop-now">
              <a href={links} target="_blank">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </ReactWow> */}
    </div >
    // </ReactWow>
  );
};

export default PortfolioItem;
