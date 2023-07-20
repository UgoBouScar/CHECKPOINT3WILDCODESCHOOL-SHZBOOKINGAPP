import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ArtisteCard from "../components/ArtisteCard";
import connexion from "../services/connexion";
import Navbar from "../components/Navbar";
import absbg3 from "../assets/absbg3.jpg";

function Artistes() {
  const [artistes, setArtistes] = useState([]);

  const getArtistes = async () => {
    try {
      const art = await connexion.get("/artistes");
      setArtistes(art);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArtistes();
  }, []);

  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent), url(${absbg3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <section style={bgStyle} className="bg-cover">
      <Helmet>
        <title> Tous les Artistes SHZ</title>
        <meta name="description" content="Liste de tous les artistes" />
      </Helmet>
      <div>
        <Navbar />
        <div className="grid grid-cols-2 gap-60 pt-60 ">
          {artistes.map((artiste, index) => (
            <div
              key={artiste.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-white text-lg font-bold mb-2">
                  {artiste.nom}
                </h2>
                <ArtisteCard
                  artiste={artiste}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artistes;
