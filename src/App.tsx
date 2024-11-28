import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbard from "./component/parts/Navbard";
import Footer from "./component/parts/Footer";
import Home from "./component/pages/Home";
import Referentiel from "./component/pages/Referentiel";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Temps pour changer de page (en millisecondes)
    const interval = 9000; // 9 secondes

    // Logique pour changer automatiquement de page
    const pages = ["/1", "/2"]; // Liste des chemins
    let currentPageIndex = 0;

    const intervalId = setInterval(() => {
      currentPageIndex = (currentPageIndex + 1) % pages.length;
      navigate(pages[currentPageIndex]);
    }, interval);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [navigate]);

  /*useEffect(() => {
    // Liste des pages en fonction des jours de la semaine (0 = Dimanche, 6 = Samedi)
    const pages = ["/", "/about", "/contact"]; // Ajouter d'autres pages si nécessaire
    const today = new Date().getDay(); // Obtenir le jour actuel (0 à 6)
    const pageToShow = pages[today % pages.length]; // Utiliser modulo pour éviter les erreurs si plus de 7 jours

    // Naviguer vers la page correspondant au jour
    navigate(pageToShow);
  }, [navigate]); */

  return (
    <div className="app">
      <Navbard />
      <Routes>
        <Route path="/1" element={<Home />} />
        <Route path="/2" element={<Referentiel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
