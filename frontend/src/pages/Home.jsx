import React from "react";
import Navbar from "../components/Navbar";
import absbg from "../assets/absbg.jpg";

function Home() {
  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent), url(${absbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div style={bgStyle} className="bg-cover">
      <Navbar />
    </div>
  );
}

export default Home;
