const MouvementLunaire2 = () => {
  return (
    <>
      <div className="" style={{ marginTop: 3 }}>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 50 }}
        >
          <div className="">
            <img
              className="calend-plein"
              src="/lune/image-pleine-lune2024.jpg"
              alt="."
              style={{
                borderRadius: 15,
                width: 750,
                height: 530,
              }}
            />
          </div>
          <div className="" style={{ marginRight: 80, marginTop: 50 }}>
            <p>
              <span
                style={{ fontSize: 30, color: "rgba(147, 147, 203, 0.866)" }}
              >
                Phases de la Lune pour décembre 2024
              </span>
              <br />
              <br />
              <br />
              <span style={{ fontSize: 22 }}>
                Nouvelle Lune : 1er décembre, 06:21 GMT{" "}
              </span>
              <br />
              <br />
              <span style={{ fontSize: 22 }}>
                Premier Quartier : 8 décembre, 15:27 GMT
              </span>
              <br />
              <br />
              <span style={{ fontSize: 22 }}>
                Pleine Lune : 15 décembre, 09:02 GMT
              </span>
              <br />
              <br />
              <span style={{ fontSize: 22 }}>
                Dernier Quartier : 22 décembre, 22:18 GMT
              </span>
              <br />
              <br />
              <span style={{ fontSize: 22 }}>
                Nouvelle Lune : 30 décembre, 22:27 GMT
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MouvementLunaire2;
