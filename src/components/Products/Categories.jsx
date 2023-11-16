import Sections from "./Sections";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.id} className="category_container">
            <h2 className="category_title">{category.title}</h2>
            <Sections sections={category.sections} />
          </div>
        );
      })}
    </>
  );
};

export default Categories;
