import "./css/contentMain.css";
import foto_portafolio from "../../assets/foto_perfil_portafolio.jpg";
import CarouselComponent from "./Carousel/CarouselComponent";
import Cards from "./Cards/Cards";
import CardsEnDesarrollo from "./Cards/CardsEnDesarrollo";

export const Content = () => {
  return (
    <>
      <main>
        <section className="sobre_mi section__content">
          <article
            className="article__aboutme"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <img
              className="article__aboutme-foto"
              src={foto_portafolio}
              alt="fotos"
            />
            <div className=" article__aboutme-info">
              <div className="article__aboutme-content">
                <div className="article__aboutme-me">
                  <h3>¿Quien soy?</h3>
                  <p className="text">
                    Mi nombre es Pedro Benites soy desarrollador Front-end,
                    radico en la Ciudad de Buenos Aires. Soy muy apasionado al
                    momento de charlar sobre diseño y desarrollo web. Descubri
                    esta vocacion del Front-end en plena pandemia, hasta el dia
                    de hoy sigo estudiando, conociendo nuevas tecnicas y
                    desarrollo para el diseño web. Mi objetivo es poder difundir
                    la estetica, lo atractivo, lo llamativo y simpleza de un
                    proyecto.
                  </p>
                </div>

                <div className="article__aboutme-box">
                  <div className="article__aboutme-nombre">
                    <b>Nombre: </b>
                    <p>Pedro Benites</p>
                  </div>
                  <div className="article__aboutme-nacionalidad">
                    <b>Nacionalidad: </b>
                    <p>Argentino</p>
                  </div>
                  <div className="article__aboutme-cel">
                    <b>Celular:</b> <p>+54 1123344940</p>
                  </div>
                  <div className="article__aboutme-direccion">
                    <b>Direccion:</b> <p>Chacarita, Fraga 922 </p>
                  </div>
                  <div className="article__aboutme-experiencia">
                    <b>Experiencia:</b> <p>1 año</p>
                  </div>
                  <div className="article__aboutme-linkedin">
                    <b>Linkedin:</b>
                    <a href="https://www.linkedin.com/in/pedro-benites99/">
                      <p>https://www.linkedin.com/in/pedro-benites99/</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className="article__carousel">
            <h2 className="article__title-technology">
              Tecnologias en las que me destaco
            </h2>
            <CarouselComponent />
          </article>
        </section>
        <section>
          <article className="article__card">
            <h2 className="h2__title-card">Proyectos terminados</h2>
            <Cards />
          </article>
          <article className="article__card ">
            <h2 className="h2__title-card">Proyectos en desarrollo</h2>
            <CardsEnDesarrollo />
          </article>
        </section>
      </main>
    </>
  );
};
