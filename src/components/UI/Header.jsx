import categories from "../../placeholder/data";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container">
      {categories.map((category) => {
        return (
          <Button variant="header_button" path={category.path}>
            {category.title}
          </Button>
        );
      })}
    </header>
  );
};

export default Header;
