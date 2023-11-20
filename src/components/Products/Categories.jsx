import Sections from "./Sections";
import "./Categories.css";
import categories from "../../placeholder/data";

const Categories = ({ categoryName }) => {
  // console.log(categoryName);

  const matchedCategory = Object.values(categories).find((category) => {
    return categoryName === category.pathName;
  });

  console.log("Matched Category:", matchedCategory);

  return (
    <>
      <div key={matchedCategory.id} className="category_container">
        <h2 className="category_title">{matchedCategory.title}</h2>
        {matchedCategory.description && (
          <h4 className="category_description">
            {matchedCategory.description}
          </h4>
        )}
        <Sections
          sections={matchedCategory.sections}
          color={matchedCategory.type}
        />
      </div>
    </>
  );
};

export default Categories;
