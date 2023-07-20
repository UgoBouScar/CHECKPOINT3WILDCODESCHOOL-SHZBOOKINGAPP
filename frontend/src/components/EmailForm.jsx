import React, { useState } from "react";
import { sendEmail } from "mailjet-sendemail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailForm() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailjetConfig = {
      apiKey: "wéwé",
      apiSecret: "wéwé",
    };

    const emailData = {
      From: "Votre adresse e-mail",
      To: recipient,
      Subject: subject,
      TextPart: body,
    };

    try {
      await sendEmail(emailData, mailjetConfig);
      toast.success("E-mail envoyé avec succès");
      setRecipient("");
      setSubject("");
      setBody("");
    } catch (error) {
      toast.error("Erreur lors de l'envoi de l'e-mail");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Votre mail:
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>

      <label>
        Artiste concerné:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>

      <label>
        Description de l'événement:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>

      <button type="submit">Envoyer</button>
      <ToastContainer />
    </form>
  );
}

export default EmailForm;
