import React from "react";
import { Link } from "react-router-dom";

function ArtisteCard({ artiste }) {
  const { id, nom, image } = artiste;

  return (
    <div className="container flex flex-col items-center">
      <div className="header" />
      <div className="imginfo">
        <div className="overflow-hidden">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
            alt={nom}
            className="w-80 h-80 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="info mt-2">
        <Link to={`/artistes/${id}`}>
          <input type="button" value="More Info" className="text-gray" />
        </Link>
      </div>
    </div>
  );
}

export default ArtisteCard;
