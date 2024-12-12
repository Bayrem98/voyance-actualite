import React, { useEffect, useState } from "react";

interface AstroData {
  [key: string]: string; // Clef : signe ; Valeur : prédiction
}

const Footer = () => {
  const [astroData, setAstroData] = useState<AstroData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kayoo123.github.io/astroo-api/jour.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch astrological data");
        }

        const data = await response.json();

        if ("date" in data) {
          setAstroData(data);
        } else {
          console.error("Invalid astrological data structure:", data);
          throw new Error("Invalid astrological data structure");
        }
      } catch (error) {
        console.error("Error fetching astrological data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (astroData) {
      const keys = Object.keys(astroData).slice(1); // Ignorer la clé "date"
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
      }, 8000); // Changer d'info toutes les 8 secondes

      return () => clearInterval(intervalId);
    }
  }, [astroData]);

  const keys = astroData ? Object.keys(astroData).slice(1) : [];
  const currentKey = keys[currentIndex];
  const currentPrediction = astroData ? astroData[currentKey] : "";

  return (
    <>
      <div className="footer-info">
        {astroData && currentKey && (
          <div className="bande-info">
            <span className="bande-info-text1">
              {currentKey.charAt(0).toUpperCase() + currentKey.slice(1)}
            </span>{" "}
            <br /> <span className="bande-info-text2">{currentPrediction}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
