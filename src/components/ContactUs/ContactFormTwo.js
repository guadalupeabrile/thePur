import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from 'reactjs-popup';

const ContactFormTwo = ({ title }) => {

  const form = useRef();
  const [inputs, setInputs] = useState({});
  const [statusMessage, setStatusMessage] = useState("Sending...");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ey18hlh', 'template_7t834mq', e.target, 'gH8gPEVte3skgnXsY')
      .then((result) => {
        console.log(result.text);
        if (inputs.name != "" && inputs.email != "" && inputs.message != "") {
          setStatusMessage("Gracias por contactarte!");
        }
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        console.log(error.text);
        setStatusMessage(`${error.text} happened`);
      });

  };

  return (
    <form
      name="contact-form"
      id="contact-form"
      ref={form}
      className="app-form"
      onSubmit={sendEmail}
    >
      <div className="messages"></div>
      <div className="form-floating">
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Tu Name"
          data-error="Requerimos tu nombre"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Nombre</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Tu Email"
          required="required"
          data-error="Por favor ingresa un Email válido"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows="7"
          placeholder="Tu Mensaje"
          required
          data-error="Por favor, déjanos un mensaje"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="message">Mensaje</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div
        className="text-center"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={700}
      >
        <Popup
          trigger={
            <button
              type="submit"
              name="submit"
              className="btn btn-color btn-circle"
              value="Send"
            >
              Enviar Mensaje
            </button>
          }
        >
          <div position="center">
            {statusMessage}
          </div>
        </Popup>
      </div>
    </form>
  );
};

export default ContactFormTwo;
