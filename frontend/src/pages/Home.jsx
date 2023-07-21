import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex flex-col w-full pt-60 text-white items-start justify-center mx-auto">
        <div className="scroll-left animate-fade-in">
          <p className="text-center text-4xl mb-4">SHZ RECORDS</p>
          <p className="text-center text-2xl mb-4 pt-10">
            SHZ RECORDS is an independent label founded 8 years ago in the south
            of France. It gathers young, talented artists passionate about
            cutting-edge underground styles. Evolving with time, the label
            embraces new captivating musical vibes.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-90 pt-10 text-white items-end justify-center mx-auto">
        <p className="text-center text-2xl animate-fade-inn">
          At the helm of this venture is Proksima, its founder, who also excels
          as a sound engineer, handling mastering through his own venture, Black
          Hole Studio. With a unique artistic vision, SHZ RECORDS continues to
          make its mark on the music scene by pushing the boundaries of
          creativity and propelling young talents towards promising horizons.
        </p>
      </div>
      <div className="flex justify-center mt-8 animate-fade-innn">
        <Link
          to="/artistes"
          className="text-white hover:text-purple font-bold py-3 px-6 rounded-lg"
        >
          Découvrez nos artistes
        </Link>
      </div>
    </div>
  );
}

export default Home;
