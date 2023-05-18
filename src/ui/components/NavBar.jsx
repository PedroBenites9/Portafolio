import "./css/styleNav.css";
import img from "../../assets/foto__perfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export const NavBar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setisNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setisNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setisNavbarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="header__router">
          <a href="/home">
            <h3>Inicio</h3>
          </a>

          <a href="/sobre_mi">
            <h3>Sobre mi</h3>
          </a>

          <a href="/portafolio">
            <h3>Portafolio</h3>
          </a>
        </div>
        <div
          className="header__content-img"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <img className="header__img" src={img} alt="foto_perfil" />
        </div>
        <div className="header__presentacion">
          <h1
            className="h1__titulo h1__titulo-1 "
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1900"
          >
            Hola, soy Pedro...
          </h1>
          <h1
            className="h1__titulo h1__titulo-2"
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-duration="2000"
          >
            y bienvenidos a mi portafolio
          </h1>
        </div>
        <div className="header__flecha">
          <FontAwesomeIcon
            icon={faArrowDown}
            bounce
            size="6x"
            style={{ color: "antiquewhite" }}
          />
        </div>
      </header>
    </>
  );
};
