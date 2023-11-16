import "./Product.css";

const Product = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="product_container">
            <div className="product_info">
              <h3 className="product_title">{product.title}</h3>
              {product.description && (
                <h3 className="product_description">{product.description}</h3>
              )}
            </div>
            {product.price && (
              <h3 className="product_price">$ {product.price}</h3>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Product;
