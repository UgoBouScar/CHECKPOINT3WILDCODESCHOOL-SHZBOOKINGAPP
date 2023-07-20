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
      const response = await connexion.get(`/artistes/${id}?_expand=styles`);
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
      <Navbar />
      <div className="header">
        <Helmet>
          <title>Booking SHZ</title>
        </Helmet>
        <h2>{oneArtist.nom}</h2>
        <h3>{oneArtist.nom_style}</h3>
      </div>
      {oneArtist.image && (
        <div className="imginfo flex items-start">
          <ImageCard
            cls="max-h-m max-w-m content-center"
            src={oneArtist.image}
            alt={oneArtist.name}
          />
          <div className="ml-8">
            <p>{oneArtist.biographie}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col ml-8">
        <Soundcloud artistId={id} />
        <EmailForm />
      </div>
    </div>
  );
}

export default OneArtist;
