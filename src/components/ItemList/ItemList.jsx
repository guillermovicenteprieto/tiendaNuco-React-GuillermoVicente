import Item from "../Item/Item";
import "./ItemList.css";
import { memo } from "react";

const ItemList = memo(
  ({ products }) => {
    return (
      <div className="itemList list-container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products &&
            products.map((product) => (
              <Item key={product.id} product={product} />
            ))}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.products.length === nextProps.products.length
);

export default ItemList;
