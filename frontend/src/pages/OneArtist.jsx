import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";
import Soundcloud from "../components/Soundcoud";
import Navbar from "../components/Navbar";
import absbg from "../assets/absbg.jpg";

function OneArtist() {
  const { id } = useParams();
  const [oneArtist, setOneArtist] = useState({});
  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent), url(${absbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

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
    <div style={bgStyle} className="bg-cover">
      <Navbar />
      <div className="header">
        <Helmet>
          <title>Booking SHZ</title>
        </Helmet>
        <div className="pt-60" />
        {oneArtist.image && (
          <div className="imginfo flex items-start">
            <div className="h-full w-full">
              <ImageCard
                cls="max-h-m content-center rounded-full pb-10"
                src={oneArtist.image}
                alt={oneArtist.name}
              />
            </div>
            <div className="ml-8 pt-20 pb-20">
              <div className="flex items-center ml-10">
                <h2 className="text-white mr-10 ml-10">{oneArtist.nom}</h2>
                <h3 className="text-purple mr-10">{oneArtist.nom_style}</h3>
                <Link to={oneArtist.url} className="text-grey">
                  Soundcloud Profile
                </Link>
                <Link
                  to="/bookingform"
                  className="text-white hover:text-purple font-bold py-3 px-6 rounded-lg ml-5"
                >
                  Book
                </Link>
              </div>
              <br />
              <p className="text-white text-center">{oneArtist.biographie}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col ">
          <Soundcloud artistId={id} />
        </div>
        <div />
      </div>
    </div>
  );
}

export default OneArtist;
