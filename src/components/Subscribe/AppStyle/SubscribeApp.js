import React, { useState, forwardRef } from "react";
import Icofont from "react-icofont";

const SubscribeApp = forwardRef((props, ref) => {

  const [email, setEmail] = useState("");

  return (
    <section className="grey-bg full-screen-bg" ref={ref} id="suscribe">
      <div className="container py-5"  >
        <div className="row">
          <div className="col-md-6 section-heading">
            <h2 className="font-600 pt-5" >
              Suscribite a The Pur
            </h2>
            <div className="mt-30">
              <p>
                Informamos, probamos, creamos, desarrollamos productos & expericencias para tu bienestar y el nuestro.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-8 offset-md-2">
            <form
              className="subscribe-form"
              action="assets/php/subscribe.php"
              method="post"
              acceptCharset="UTF-8"
              encType="application/x-www-form-urlencoded"
              autoComplete="off"
              noValidate
            >
              <div className="form-coupon">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-color btn-animate"
                      type="submit"
                      value="Subscribe"
                    >
                      <span>
                        Subscribe <Icofont icon="check" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section >
  )
});

export default SubscribeApp;
