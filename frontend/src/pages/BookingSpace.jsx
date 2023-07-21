import React from "react";
import EmailForm from "../components/EmailForm";
import NavBar from "../components/Navbar";

function BookingSpace() {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <EmailForm />
      </div>
    </div>
  );
}

export default BookingSpace;
