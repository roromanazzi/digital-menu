import Sections from "./Sections";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.id} className="category_container">
            <h2 className="category_title">{category.title}</h2>
            {category.description && (
              <h4 className="category_description">{category.description}</h4>
            )}
            <Sections sections={category.sections} color={category.type} />
          </div>
        );
      })}
    </>
  );
};

export default Categories;
