import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import "./Welcome.css";
import Card from "./Card";
import Content from "./Content";

const Welcome = () => {
  const content = [
    {
      id: 1,
      title: "No te pierdas ninguna novedad",
      subtitle: "Seguinos en nuestras redes sociales",
      linkURL: "https://www.instagram.com/lebelle.rest/",
      buttonContent: <CiInstagram size={"18px"} />,
    },
    {
      id: 2,
      title: "Tu opinión nos importa",
      subtitle: "Respondé la siguiente encuesta",
      linkURL: "https://forms.gle/Tz6f7Jp5g2ufRTcU9",
      buttonContent: "Encuesta de satisfacción",
    },
  ];

  return (
    <div className="welcome_container">
      <h2 className="main_title">Se parte de esta experiencia</h2>
      {content.map((info) => {
        return (
          <Card type="primary">
            <Content
              title={info.title}
              subtitle={info.subtitle}
              linkURL={info.linkURL}
              buttonContent={info.buttonContent}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Welcome;
