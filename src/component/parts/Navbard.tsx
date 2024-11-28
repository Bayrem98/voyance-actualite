import { useEffect, useState } from "react";
import { Navbar } from "reactstrap";

const Navbard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("fr-FR");
  return (
    <>
      <div className="d-flex justify-content-center">
        <Navbar color="dark" style={{ borderRadius: 30 }}>
          <p
            style={{
              textAlign: "center",
              color: "yellow",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Actualité du jour <br />
            <span style={{ color: "white" }}>{formattedDate}</span>
          </p>
        </Navbar>
      </div>
    </>
  );
};
export default Navbard;
