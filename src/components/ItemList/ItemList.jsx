import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {

  return (
    <div className="itemList">
      {/* <p className="itemListTitle">
        <i>ItemList Component</i>
      </p> */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products &&
          products.map((product) => (
            <Item
              key={product.id}
              category={product.category}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              stock={product.stock}
              image={product.image}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};
export default ItemList;
