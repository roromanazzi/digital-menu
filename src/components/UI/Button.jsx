import "./Button.css";

const Button = ({ variant, type, children }) => {
  return (
    <button className={variant} type={type}>
      {children}
    </button>
  );
};

export default Button;
