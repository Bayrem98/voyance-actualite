const Home = () => {
  return (
    <>
      <div className="" style={{ marginTop: -60 }}>
        <section>
          <h2
            style={{
              color: "rgba(147, 147, 203, 0.866)",
              fontStyle: "oblique",
              marginLeft: 35,
            }}
          >
            Mouvement Lunaire
          </h2>
          <br />
          <div className="d-flex justify-content-between">
            <div className="" style={{ marginLeft: 5 }}>
              <img
                className="lune-active"
                src="/home-lune.gif"
                alt="."
                style={{ borderRadius: 20, width: 440 }}
              />
            </div>
            <div className="">
              <p
                className="lune-active-para"
                style={{
                  fontSize: 13,
                  textAlign: "justify",
                  marginRight: 5,
                  marginLeft: 5,
                }}
              >
                {" "}
                <span
                  className="lune-active-para1"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    fontSize: 18,
                  }}
                >
                  La lune
                </span>{" "}
                est depuis des siècles considérée comme une force de la nature
                et fascine toutes les cultures à travers le monde. À la fois
                responsable des marées océaniques et de la stabilité de l’axe de
                notre Terre, elle a aussi une grande influence sur notre corps.
                Mais comment peut-elle avoir une influence sur notre bien-être
                et notre santé alors qu’elle se trouve à des milliers de
                kilomètres de la Terre? Comme tu le sais certainement déjà, la
                lune est une partie essentielle de notre système solaire et
                maintient l’équilibre de la Terre sous contrôle, et a aussi une
                attraction sur nos mers et océans, à travers des marées
                montantes et descendantes. Sa force gravitationnelle a une
                influence sur la hauteur du niveau des mers. Si nous partons de
                ce principe, l’être humain est composé à 90 % d’eau : donc
                pourquoi la lune n’aurait-elle pas une influence sur nous
                également? Dans un sens plus spirituel, le cycle lunaire est la
                relation entre le soleil et la lune, la déesse et le dieu. Une
                pleine lune, par exemple, est considérée comme plus puissante
                parce que la pleine lumière du dieu illumine la déesse et brille
                sur nous. C’est une combinaison de deux des forces les plus
                puissantes de notre monde. Au fur et à mesure que la lumière
                s’estompe, son attraction intense disparaît également, jusqu’à
                ce que la nouvelle lune se déroule et que nous nous reposions,
                nous rechargions et recommençons.
                <br />
                <span
                  className="plein-para2"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    fontSize: 16,
                  }}
                >
                  *Nouvelle Lune :
                </span>{" "}
                La Lune est située entre la Terre et le Soleil, de sorte que la
                face éclairée de la Lune n'est pas visible depuis la Terre.
                <br />
                <span
                  className="plein-para2"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    fontSize: 16,
                  }}
                >
                  *Premier quartier :
                </span>{" "}
                La moitié droite de la Lune est visible, tandis que l'autre
                moitié est obscurcie.
                <br />
                <span
                  className="plein-para2"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    fontSize: 16,
                  }}
                >
                  *Pleine Lune :
                </span>{" "}
                La face entière de la Lune est illuminée, apparaissant comme un
                disque complet.
                <br />
                <span
                  className="plein-para2"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    fontSize: 16,
                  }}
                >
                  *Dernier quartier :
                </span>{" "}
                La moitié gauche de la Lune est visible, tandis que l'autre
                moitié est obscurcie.
              </p>
            </div>
          </div>
        </section>
        <section style={{ marginLeft: 50, marginRight: 50, marginTop: -20 }}>
          <div className="carte-lune d-flex justify-content-between">
            <div>
              <h5
                style={{
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                  textAlign: "center",
                }}
              >
                Nouvelle-Lune
              </h5>
              <img
                className="nouvelle-lune-img"
                src="/nouvelle-lune.jpg"
                alt="."
                style={{ width: 390, borderRadius: 20 }}
              />
            </div>
            <div>
              <h5
                style={{
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                  textAlign: "center",
                }}
              >
                Pleine-Lune
              </h5>
              <img
                className="plein-lune-img"
                src="/plein-lune.jpg"
                alt="."
                style={{ width: 390, borderRadius: 20 }}
              />
            </div>
          </div>
          <br />
        </section>
      </div>
    </>
  );
};
export default Home;
