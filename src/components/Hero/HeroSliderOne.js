import React, { forwardRef } from "react";
import TextLoop from "react-text-loop";
import bgImg from "../../assets/images/background/pagina-bg-1.png"; //tamano imagen 1680x980
import Scrollspy from "react-scrollspy";

const HeroSliderOne = forwardRef((props, ref) => {

  const tags = ["HELLO", "WE'RE", "THE", "PUR", "LIFE"];

  return (
    <section className="pt-0 pb-0" id="home" ref={ref}>
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{ background: `url(${bgImg})` }}
        ></div>
        <div className="hero-text-wrap">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h1 className="white-color font-700">The Pur</h1>
              <div className="animate-caption">
                <h2 className="white-color mt-30">
                  <TextLoop mask={true}>
                    {tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </TextLoop>
                </h2>
              </div>
              <Scrollspy
                items={["products", "suscribe"]}
                currentClassName="active"
                data-in="fadeInLeft"
              >

                <p className="text-center mt-30">
                  <a
                    onClick={(e) => props.scrollToSection(e, "products")}
                    className="btn btn-outline-white btn-circle">Productos & Servicios</a>
                  <a
                    onClick={(e) => props.scrollToSection(e, "blog")}
                    className="btn btn-login btn-circle">Nuestro Blog</a>
                </p>

              </Scrollspy>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSliderOne;
