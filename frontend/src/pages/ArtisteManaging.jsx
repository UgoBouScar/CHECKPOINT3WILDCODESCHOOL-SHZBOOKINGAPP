import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../components/Navbar";
import connexion from "../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function ArtisteManaging() {
  const [artistes, setArtistes] = useState([]);
  const [artisteInfo, setArtisteInfo] = useState({
    id: "",
    nom: "",
    nom_style: "",
    biographie: "",
    image: "",
    url: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtisteInfo({ ...artisteInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (artisteInfo.id) {
        // Mise à jour de l'artiste
        await connexion.put(`/artistes/${artisteInfo.id}`, artisteInfo);
        toast.success(
          "Les données de l'artiste ont été mises à jour avec succès."
        );
      } else {
        await connexion.post("/artistes", artisteInfo);
        toast.success("Nouvel artiste ajouté avec succès.");
      }

      setArtisteInfo({
        id: "",
        nom: "",
        nom_style: "",
        biographie: "",
        image: "",
        url: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la soumission des données.");
    }
  };

  useEffect(() => {
    const loadArtistes = async () => {
      try {
        const response = await connexion.get("/artistes");
        setArtistes(response);
      } catch (error) {
        console.error(error);
      }
    };
    loadArtistes();
  }, []);

  useEffect(() => {
    const loadArtisteData = async () => {
      try {
        if (artisteInfo.id) {
          const response = await connexion.get(`/artistes/${artisteInfo.id}`);
          setArtisteInfo(response);
        } else {
          setArtisteInfo({
            id: "",
            nom: "",
            nom_style: "",
            biographie: "",
            image: "",
            url: "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadArtisteData();
  }, [artisteInfo.id]);

  return (
    <div className="bg-black2 flex flex-col items-center justify-center h-full">
      <NavBar />
      <div className="pt-60">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Choisir un artiste:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              value={artisteInfo.id}
              onChange={handleInputChange}
            >
              <option value="">Sélectionner un artiste</option>
              {artistes.map((artiste) => (
                <option key={artiste.id} value={artiste.id}>
                  {artiste.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom d'artiste:
            </label>
            <input
              id="nom"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nom"
              value={artisteInfo.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nom_style"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom de style:
            </label>
            <input
              id="nom_style"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nom_style"
              value={artisteInfo.nom_style}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="biographie"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Biographie:
            </label>
            <textarea
              id="biographie"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="biographie"
              value={artisteInfo.biographie}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photo:
            </label>
            <input
              id="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              URL:
            </label>
            <input
              id="url"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="url"
              value={artisteInfo.url}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black hover:bg-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enregistrer
            </button>
          </div>
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
  );
}

export default ArtisteManaging;
