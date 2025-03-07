import { useEffect, useState } from "react";
import { Navbar } from "reactstrap";

const Navbard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isFlashing, setIsFlashing] = useState(false); // Contrôle de l'animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000);

    // Activer le clignotement après le chargement
    setTimeout(() => setIsFlashing(true), 500);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("fr-FR");

  return (
    <>
      <div
        className={`d-flex justify-content-center ${isFlashing ? "flash" : ""}`}
      >
        <Navbar color="dark" style={{ borderRadius: 30 }}>
          <p className="nav-text">
            Actualité du jour <br />
            <span className="nav-date">{formattedDate}</span>
          </p>
        </Navbar>
      </div>
    </>
  );
};

export default Navbard;
