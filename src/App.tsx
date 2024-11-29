import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbard from "./component/parts/Navbard";
import Footer from "./component/parts/Footer";
import MouvementLunaire1 from "./component/pages/MouvementLunaire1";
import Home from "./component/pages/Home";
import MouvementLunaire2 from "./component/pages/MouvementLunaire2";
import MouvementLunaire3 from "./component/pages/MouvementLunaire3";

function App() {
  const navigate = useNavigate();
  const pages = ["/", "/1", "/2", "/3"]; // Liste des chemins
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const interval = 40000; // 40 secondes

    const intervalId = setInterval(() => {
      // Calculer la prochaine page
      const nextIndex = (currentPageIndex + 1) % pages.length;

      // Mettre à jour l'état et naviguer
      setCurrentPageIndex(nextIndex);
      navigate(pages[nextIndex]);
      // console.log("Navigating to:", pages[nextIndex]);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentPageIndex, navigate]); // Ajouter currentPageIndex comme dépendance

  return (
    <div>
      <Navbard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<MouvementLunaire1 />} />
        <Route path="/2" element={<MouvementLunaire2 />} />
        <Route path="/3" element={<MouvementLunaire3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*useEffect(() => {
    // Liste des pages en fonction des jours de la semaine (0 = Dimanche, 6 = Samedi)
    const pages = ["/", "/about", "/contact"]; // Ajouter d'autres pages si nécessaire
    const today = new Date().getDay(); // Obtenir le jour actuel (0 à 6)
    const pageToShow = pages[today % pages.length]; // Utiliser modulo pour éviter les erreurs si plus de 7 jours

    // Naviguer vers la page correspondant au jour
    navigate(pageToShow);
  }, [navigate]); */
