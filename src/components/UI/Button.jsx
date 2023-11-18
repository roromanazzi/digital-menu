import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ variant, path, children }) => {
  return (
    <Link to={`/${path}`} className={variant}>
      {children}
    </Link>
  );
};

export default Button;
