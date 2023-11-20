import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import "./Welcome.css";
import Card from "./Card";
import Content from "./Content";

const Welcome = () => {
  const content = [
    {
      id: 1,
      title: "No te pierdas ninguna novedad",
      subtitle: "Seguinos en nuestras redes sociales",
      links: [
        {
          content: <CiInstagram size={"18px"} />,
          URL: "https://www.instagram.com/lebelle.rest/",
        },
        {
          content: <CiFacebook size={"18px"} />,
          URL: "https://www.instagram.com/lebelle.rest/",
        },
      ],
    },
    {
      id: 2,
      title: "Tu opinión nos importa",
      subtitle: "Respondé la siguiente encuesta",
      links: [
        {
          content: "Encuesta de satisfacción",
          URL: "https://forms.gle/Tz6f7Jp5g2ufRTcU9",
        },
      ],
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
              links={info.links}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Welcome;
