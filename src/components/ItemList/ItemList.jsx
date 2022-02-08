import Item from "../Item/Item";
import { memo } from "react";

const ItemList = memo( ({ products }) => {
    return (
      <div className="itemList">
        <div className="list-container">
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
