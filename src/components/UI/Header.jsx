import categories from "../../placeholder/data";
import Button from "./Button";
import logo from "../../img/logo-negro.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <div className="restaurant_info_container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="nav_bar">
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
      </div>
    </header>
  );
};

export default Header;
