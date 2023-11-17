import Product from "./Product";
import "./Sections.css";

const Sections = ({ sections }) => {
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
            <div className="section_info">
              <h3 className="section_title">{section.title}</h3>
              {section.description && (
                <h4 className="section_description">{section.description}</h4>
              )}
              <Product products={section.products} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Sections;
