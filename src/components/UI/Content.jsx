import { Link } from "react-router-dom";
import "./Content.css";

const Content = ({ title, subtitle, links }) => {
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <div className="links">
        {links.map((link) => {
          return (
            <Link to={link.URL} className="link">
              {link.content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
