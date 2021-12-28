import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      <p className="titleComponent">
        <i>ItemList component</i>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          backgroundColor: "#4acdde",
        }}
      >
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  product={product}
                  category={product.categoria}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.descripcion}
                  stock={product.stock}
                  image={product.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ItemList;
