import React, { useState } from "react";

const ContactFormTwo = ({ title }) => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      name="contact-form"
      className="contact-me"
      id="contact-form"
      action="php/contact.php"
      method="POST"
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
      <p className="text-center">
        <button
          type="submit"
          name="submit"
          className="btn btn-color btn-circle"
        >
          Enviar Mensaje
        </button>
      </p>
    </form>
  );
};

export default ContactFormTwo;
