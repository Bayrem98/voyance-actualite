const MouvementLunaire2 = () => {
  return (
    <>
      <div className="" style={{ marginTop: -70 }}>
        <div className="d-flex justify-content-between">
          <div>
            {" "}
            <img
              className="calend-plein"
              src="/lune/calendrier.jpg"
              alt="."
              style={{
                borderRadius: 50,
                width: 670,
                height: 650,
                marginLeft: 10,
              }}
            />
          </div>
          <div>
            <img
              className="calend-nouvelle"
              src="/lune/calendrier-2.jpg"
              alt="."
              style={{
                borderRadius: 50,
                width: 670,
                height: 650,
                marginRight: 10,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MouvementLunaire2;
