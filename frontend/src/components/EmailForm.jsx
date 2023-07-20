import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const serviceId = "service_uxn08f7";
  const templateId = "template_shz";
  const userId = "U9P3r5Sja0wmCPm3r";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then(() => {
        toast.success(`Merci ${name}, l'e-mail a été envoyé avec succès !`);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail:", error);
        toast.error("Une erreur est survenue lors de l'envoi de l'e-mail.");
      });
  };

  return (
    <div className="contactForm" data-theme="light">
      <div className="formContainer">
        <h3>Contactez-nous</h3>
        <form className="ContactForm" ref={form} onSubmit={handleSubmit}>
          <div className="userNameEmail">
            <div className="userInfo">
              <input
                className="inputFieldName"
                type="text"
                name="name"
                value={name}
                placeholder="Nom"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="userInfo">
              <input
                className="inputFieldEmail"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="userInfo">
            <textarea
              className="inputField"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="divSubmitButton">
            <button type="submit" className="submitButton">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default EmailForm;
