const MouvementLunaire1 = () => {
  return (
    <>
      <div className="container">
        <section>
          <h2 className="titre-lunaire">Mouvement Lunaire</h2>
          <br />
          <div className="d-flex justify-content-between">
            <div className="img-container">
              <img className="lune-active" src="/home-lune.gif" alt="." />
            </div>
            <div>
              <p className="lune-active-para">
                <span className="lune-active-para1">La lune</span> est depuis
                des siècles considérée comme une force de la nature et fascine
                toutes les cultures à travers le monde. À la fois responsable
                des marées océaniques et de la stabilité de l’axe de notre
                Terre, elle a aussi une grande influence sur notre corps. Mais
                comment peut-elle avoir une influence sur notre bien-être et
                notre santé alors qu’elle se trouve à des milliers de kilomètres
                de la Terre? Comme tu le sais certainement déjà, la lune est une
                partie essentielle de notre système solaire et maintient
                l’équilibre de la Terre sous contrôle, et a aussi une attraction
                sur nos mers et océans, à travers des marées montantes et
                descendantes. Sa force gravitationnelle a une influence sur la
                hauteur du niveau des mers. Si nous partons de ce principe,
                l’être humain est composé à 90 % d’eau : donc pourquoi la lune
                n’aurait-elle pas une influence sur nous également? Dans un sens
                plus spirituel, le cycle lunaire est la relation entre le soleil
                et la lune, la déesse et le dieu. Une pleine lune, par exemple,
                est considérée comme plus puissante parce que la pleine lumière
                du dieu illumine la déesse et brille sur nous. C’est une
                combinaison de deux des forces les plus puissantes de notre
                monde. Au fur et à mesure que la lumière s’estompe, son
                attraction intense disparaît également, jusqu’à ce que la
                nouvelle lune se déroule et que nous nous reposions, nous
                rechargions et recommencions.
                <br />
                <span className="plein-para2">*Nouvelle Lune :</span> La Lune
                est située entre la Terre et le Soleil, de sorte que la face
                éclairée de la Lune n'est pas visible depuis la Terre.
                <br />
                <span className="plein-para2">*Premier quartier :</span> La
                moitié droite de la Lune est visible, tandis que l'autre moitié
                est obscurcie.
                <br />
                <span className="plein-para2">*Pleine Lune :</span> La face
                entière de la Lune est illuminée, apparaissant comme un disque
                complet.
                <br />
                <span className="plein-para2">*Dernier quartier :</span> La
                moitié gauche de la Lune est visible, tandis que l'autre moitié
                est obscurcie.
              </p>
            </div>
          </div>
        </section>
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
      </div>
    </>
  );
};

export default MouvementLunaire1;
