import { Carousel } from "react-bootstrap";

const MouvementLunaire3 = () => {
  return (
    <>
      <section
        className="section-slider"
        style={{ marginTop: 50, padding: 10 }}
      >
        <Carousel controls={false} indicators={false} pause={false}>
          <Carousel.Item interval={10000}>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  className="act-imag1"
                  src="/lune/actualite-img-lune2.png"
                  alt="."
                  style={{
                    borderRadius: 20,
                    width: 600,
                    height: 400,
                    marginRight: 10,
                  }}
                />
              </div>
              <div style={{ marginTop: 50 }}>
                <h2
                  className="act-title"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    marginLeft: 35,
                  }}
                >
                  Comment utiliser l’énergie de la lune?
                </h2>
                <p
                  className="act-para"
                  style={{
                    fontSize: 17,
                    textAlign: "justify",
                    marginRight: 5,
                    marginLeft: 5,
                  }}
                >
                  Dans les temps anciens, la lune était considérée comme une
                  énergie mystique sur laquelle les populations avaient très peu
                  de connaissances. C’est pour cette raison que les mythes et
                  les légendes ont été créés sur cette orbite nocturne. En tant
                  que corps céleste et astronomique le plus proche de la Terre,
                  la lune a une puissante influence sur nous en tant que corps
                  spirituels. La lune offre des énergies profondes et
                  puissantes. Il existe plusieurs façons d’exploiter et
                  d’utiliser l’énergie de la lune, ainsi que chaque phase
                  lunaire pour aider à définir nos intentions et à clarifier la
                  négativité. Une des façons de se connecter à la puissance
                  énergétique lunaire consiste à utiliser les rituels lunaires à
                  travers la méditation. La nouvelle lune et la pleine lune sont
                  les deux phases du cycle lunaire sur lesquelles tu dois te
                  baser si tu veux utiliser l’énergie de la lune sur ton esprit
                  et ton corps!
                </p>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex justify-content-between">
              <div style={{ marginTop: 50 }}>
                <h2
                  className="act-title"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    marginLeft: 35,
                  }}
                >
                  Les significations spirituelles des cycles lunaires
                </h2>
                <p
                  className="act-para"
                  style={{
                    fontSize: 17,
                    textAlign: "justify",
                    marginRight: 5,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  Les cycles lunaires désignent les portions illuminées de la
                  lune par le Soleil, vues à partir de la Terre. Les phases
                  lunaires changent durant la lunaison qui dure environ 29
                  jours, c’est exactement le temps que met la lune pour à la
                  fois tourner sur elle-même, et pour tourner autour de la
                  Terre. Alors que la lune tourne autour de la Terre, et que la
                  Terre tourne autour du Soleil, l’angle entre le Soleil, la
                  lune et la Terre change. En conséquence, la quantité de
                  lumière du soleil qui se reflète sur la Lune qui se déplace
                  change chaque jour. Mais savais-tu que la lune ne produisait
                  aucune lumière d’elle-même? Les phases lunaires, dans leur
                  côté spirituel, nous montrent à quel point la lune affecte les
                  cycles de notre vie, et une fois en connexion avec elle, elle
                  peut vous attribuer des énergies particulièrement puissantes.{" "}
                </p>
              </div>
              <div>
                <img
                  className="act-imag2"
                  src="/lune/actualite-img-lune3.png"
                  alt="."
                  style={{
                    borderRadius: 20,
                    width: 600,
                    height: 400,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                />
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  className="act-imag1"
                  src="/lune/actualite-img-lune4.png"
                  alt="."
                  style={{
                    borderRadius: 20,
                    width: 600,
                    height: 400,
                    marginRight: 10,
                  }}
                />
              </div>
              <div style={{ marginTop: 30 }}>
                <h2
                  className="act-title"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    marginLeft: 35,
                  }}
                >
                  La lune croissante et ses significations
                </h2>
                <p
                  className="act-para"
                  style={{
                    fontSize: 17,
                    textAlign: "justify",
                    marginRight: 5,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  La phase de la lune croissante contient quatre cycles : la
                  nouvelle lune, le premier croissant, le premier quartier et la
                  gibeuse ascendante. Pendant la phase croissante de la lune,
                  profite pour te laisser guider par tes désirs et tes nouveaux
                  projets. La nouvelle lune marque le début du mois lunaire de
                  29 jours. La nouvelle lune est également appelée «lune noire»,
                  car à ce moment du cycle lunaire, le Soleil éclaire la face
                  cachée de la lune, c’est-à-dire celle que nous ne voyons
                  jamais. La lune croissante signifie que la face de la lune
                  visible depuis la Terre commence progressivement à être
                  éclairée par le Soleil. Pendant ce cycle, l’énergie autour de
                  tes nouvelles intentions se développe. C’est pendant cette
                  phase qu’il est important de te libérer de tes peurs et de
                  faire en sorte que tes intentions se produisent. La nouvelle
                  lune est synonyme de renouveau et de nouveau départ, et c’est
                  le moment idéal pour définir de nouveaux projets, de nouvelles
                  intentions et rédiger de nouveaux objectifs. C’est également
                  le moment de te concentrer sur ton corps, sur ton esprit et
                  sur tes désirs. La lune croissante est également synonyme de
                  confiance en soi et d’assurance.
                </p>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex justify-content-between">
              <div style={{ marginTop: 30 }}>
                <h2
                  className="act-title"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    marginLeft: 35,
                  }}
                >
                  La lune décroissante et ses significations
                </h2>
                <p
                  className="act-para"
                  style={{
                    fontSize: 17,
                    textAlign: "justify",
                    marginRight: 5,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  La phase de la lune décroissante contient également quatre
                  cycles et après la pleine lune, la lune est dans sa phase
                  descendante : la gibeuse descendante, le dernier quartier, le
                  dernier croissant. Cette phase marque le temps de la réflexion
                  intérieure, en particulier sur tous les aspects de la vie tels
                  que les relations, le travail, la santé et le bien-être.
                  Pendant la lune décroissante, tu honoreras tes forces, tes
                  réalisations et ta croissance personnelle. Tu vas devoir
                  reconnaître et travailler sur tes pensées négatives, tes
                  mauvaises habitudes, et tes mauvais comportements avant la
                  nouvelle lune. Pense à tout ce qui peut te freiner dans la vie
                  et ce que tu pourrais faire pour améliorer ta situation, ta
                  santé et ton bien-être; mais surtout de quelle façon
                  pourrais-tu réaliser tes rêves et tes objectifs? Cette période
                  est parfaite pour prendre une profonde inspiration et
                  s’abandonner à tout ce qui s’est passé et à tout ce qui est
                  hors de ton contrôle. Si tu n’as pas atteint l’objectif que tu
                  t’es fixé au début du cycle, ce n’est pas grave! Ne t’en fais
                  pas, respire et abandonne-toi à la volonté de l’univers.
                </p>
              </div>
              <div>
                <img
                  className="act-imag2"
                  src="/lune/actualite-img-lune5.png"
                  alt="."
                  style={{
                    borderRadius: 20,
                    width: 600,
                    height: 400,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                />
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <div className="d-flex justify-content-between">
              <div style={{ marginTop: 30 }}>
                <h2
                  className="act-title"
                  style={{
                    color: "rgba(147, 147, 203, 0.866)",
                    fontStyle: "oblique",
                    marginLeft: 35,
                  }}
                >
                  {" "}
                  La pleine lune et ses significations spirituelles
                </h2>
                <p
                  className="act-para"
                  style={{
                    fontSize: 17,
                    textAlign: "justify",
                    marginRight: 5,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  La pleine lune marque le milieu du cycle lunaire, c’est à cet
                  instant précis qu’elle est entièrement éclairée par le Soleil.
                  C’est pour cette raison que pendant la pleine lune, des
                  phénomènes énergétiques intenses se produisent dans
                  l’équilibre naturel de la Terre, des Hommes et des animaux.
                  Pendant la pleine lune, certaines personnes ont un désir
                  brûlant d’exprimer leur créativité et de laisser leurs
                  vibrations intenses les guider. C’est enfin là que la lune est
                  à sa pleine puissance et nous pouvons puiser dans son énergie
                  pour nous aider à manifester ou à mieux comprendre nos
                  problèmes. Pour les personnes pratiquant des rituels
                  spirituelles, cette période est parfaite pour faire des
                  rituels et des sorts, car c’est la période la plus puissante
                  du mois. C’est aussi le moment idéal pour des choses comme la
                  libération ou le bannissement de rituels, des sorts de
                  manifestation et des méditations et un peu d’administration
                  comme le chargement de cristaux et le nettoyage des cartes de
                  tarot.
                </p>
              </div>
              <div>
                <img
                  className="act-imag2"
                  src="/lune/actualite-img-lune6.png"
                  alt="."
                  style={{
                    borderRadius: 20,
                    width: 600,
                    height: 400,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                />
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};
export default MouvementLunaire3;
