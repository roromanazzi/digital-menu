import Product from "./Product";
import "./Sections.css";
import doradoImage from "../../img/dorado.png";

const Sections = ({ sections }) => {
  let sectionClassName = "section_container";

  return (
    <>
      {sections.map((section) => {
        return (
          <div
            key={section.id}
            className={
              section.type === "special"
                ? "section_container_special"
                : "section_container"
            }
          >
            {section.type === "common" && (
              <img src={doradoImage} className="side_img" />
            )}
            <div className="section_info">
              <h3 className="section_title">{section.title}</h3>
              <Product products={section.products} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sections;
