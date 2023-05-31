import React, { useState } from "react";
import Card from "./Card/Card";
import foto_eo from "./Card/assets/eo-proyect.png";
import "./cards.css";
const Cards = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      name: "Rediseño Pagina Estacion Oceanica",
      description:
        "Una pagina web rediseñada desde 0 incluyendo mas dinamismo en ciertos articulos, haciendo que sea mas vistoso para el publico general.",
      img: `${foto_eo}`,
      link: "https://github.com/PedroBenites9/estacionOceanica-pedroBenites",
      nameLink: "Estacion Oceanica",
    },
  ]);

  return (
    <div className="cards__contenedor">
      {card.map((tarjetas) => {
        return (
          <Card
            name={tarjetas.name}
            img={tarjetas.img}
            description={tarjetas.description}
            link={tarjetas.link}
            nameLink={tarjetas.nameLink}
          />
        );
      })}
    </div>
  );
};

export default Cards;
