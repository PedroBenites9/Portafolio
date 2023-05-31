import "./css/footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer__contenedor">
        <div className="footer__PB">
          <p>Pedro Benites</p>
        </div>
        <div className="footer__contactos">
          <div className="footer__links">
            <h1>Links</h1>
            <a href="/link2">Github</a>
            <a href="/link3">Linkeding</a>
            <a href="/link4">Instagram</a>
          </div>
          <div>
            <h1>Contactos</h1>
            <p>
              celular: <b>1123344940</b>
            </p>
            <p>
              Email:
              <b>
                <a href="correo"> pedro.benites99@hotmail.com</a>
              </b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
