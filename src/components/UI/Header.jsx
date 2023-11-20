import categories from "../../placeholder/data";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container">
      {categories.map((category) => {
        return (
          <Button
            key={category.id}
            variant="header_button"
            path={category.pathName}
          >
            {category.title}
          </Button>
        );
      })}
    </header>
  );
};

export default Header;
