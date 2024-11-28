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
      <div>
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              color: #333;
              overflow-x: hidden;
            }

            .bande-info {
              position: fixed;
              bottom: 0;
              width: 100%;
              background-color: #000;
              color: #fff;
              padding: 10px 20px;
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              animation: fade-in-out 10s linear infinite;
            }

            @keyframes fade-in-out {
              0% { opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}
        </style>
        {astroData && currentKey && (
          <div className="bande-info">
            <span style={{ fontSize: 15, color: "yellow" }}>
              {currentKey.charAt(0).toUpperCase() + currentKey.slice(1)}
            </span>{" "}
            <br /> <span style={{fontSize: 14}}>{currentPrediction}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
