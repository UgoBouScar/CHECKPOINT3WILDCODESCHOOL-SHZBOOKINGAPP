import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";
import Soundcloud from "../components/Soundcoud";
import EmailForm from "../components/EmailForm";
import Navbar from "../components/Navbar";

function OneArtist() {
  const { id } = useParams();
  const [oneArtist, setOneArtist] = useState({});

  const getOneArtist = async () => {
    try {
      const response = await connexion.get(`/artistes/${id}`);
      setOneArtist(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneArtist();
  }, []);

  return (
    <div>
      <div className="header">
        <Helmet>
          <title>Booking SHZ</title>
        </Helmet>
        <h2>{oneArtist.nom}</h2>
        <h3>{oneArtist.style}</h3>
      </div>

      {oneArtist.image && (
        <div className="imginfo">
          <Navbar />
          <ImageCard
            cls="max-h-m max-w-m content-center"
            src={oneArtist.image}
            alt={oneArtist.name}
          />
          <p>{oneArtist.biographie}</p>
          {/* Utilisez Soundcloud pour afficher le widget SoundCloud */}
          <Soundcloud artistId={id} />
          <div>
            <EmailForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default OneArtist;
