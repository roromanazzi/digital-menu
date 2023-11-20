import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome_container">
      <h2 className="title">Se parte de esta experiencia</h2>
      <div className="info_container">
        <h3 className="subtitle">No te pierdas ninguna novedad</h3>
        <p className="parr">Seguinos en nuestras redes sociales</p>
        <Link to={"https://www.instagram.com/lebelle.rest/"} className="link">
          <CiInstagram size={"18px"} />
        </Link>
      </div>
      <div className="info_container">
        <h3 className="subtitle">Tu opinión nos importa</h3>
        <p className="parr">Respondé la siguiente encuesta</p>

        <Link to={"https://forms.gle/Tz6f7Jp5g2ufRTcU9"} className="link">
          Encuesta de satisfacción
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
