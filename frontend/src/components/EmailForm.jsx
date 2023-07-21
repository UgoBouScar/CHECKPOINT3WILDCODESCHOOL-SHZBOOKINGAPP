import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fest from "../assets/fest.jpg";

function EmailForm() {
  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent), url(${fest})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

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
        toast.success(
          `Thank you, ${name}! The email has been sent successfully.`
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("An error occurred while sending the email.");
      });
  };

  return (
    <div style={bgStyle} className="bg-cover">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4">Book an Artist</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border rounded"
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border rounded"
                type="email"
                name="email"
                placeholder="Your Tekn'Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full px-4 py-2 border rounded"
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Present us the project and specify which artist interests you"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-hover:white text-black rounded hover:bg-purple"
              >
                Send
              </button>
            </div>
            <p className="text-center text-purple">
              Thanks for the support 🥷{" "}
            </p>
            <p className="text-center text-grey">
              {" "}
              Catharso's EP out next monday !
            </p>
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
    </div>
  );
}

export default EmailForm;
