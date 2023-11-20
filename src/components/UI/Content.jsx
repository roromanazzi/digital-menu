import { Link } from "react-router-dom";
import "./Content.css";

const Content = ({ title, subtitle, linkURL, buttonContent }) => {
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <Link to={linkURL} className="link">
        {buttonContent}
      </Link>
    </div>
  );
};

export default Content;
