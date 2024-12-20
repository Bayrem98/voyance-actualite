const MouvementLunaire1_4 = () => {
  return (
    <>
      <div className="container">
        <section className="carte-lune-section">
          <div className="carte-lune d-flex justify-content-between">
            <div>
              <h5 className="h5-lunaire">Nouvelle-Lune</h5>
              <img
                className="nouvelle-lune-img"
                src="/nouvelle-lune.jpg"
                alt="."
              />
            </div>
            <div>
              <h5 className="h5-lunaire">Pleine-Lune</h5>
              <img className="plein-lune-img" src="/plein-lune.jpg" alt="." />
            </div>
          </div>
          <br />
        </section>
        <p className="para2">
          <span className="plein-para2">*Nouvelle Lune :</span> La Lune est
          située entre la Terre et le Soleil, de sorte que la face éclairée de
          la Lune n'est pas visible depuis la Terre.
          <br />
          <span className="plein-para2">*Premier quartier :</span> La moitié
          droite de la Lune est visible, tandis que l'autre moitié est
          obscurcie.
          <br />
          <span className="plein-para2">*Pleine Lune :</span> La face entière de
          la Lune est illuminée, apparaissant comme un disque complet.
          <br />
          <span className="plein-para2">*Dernier quartier :</span> La moitié
          gauche de la Lune est visible, tandis que l'autre moitié est
          obscurcie.
        </p>
      </div>
    </>
  );
};
export default MouvementLunaire1_4;
