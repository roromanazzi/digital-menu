import "./Card.css";

const Card = ({ type, children }) => {
  return <div className={type}>{children}</div>;
};

export default Card;
