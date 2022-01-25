import Item from "../Item/Item";
import "./ItemList.css";
import { memo } from "react";

// dos casos de uso
//1. memo (()=>{})
//2. memo(()=>{}, función comparadora)

const ItemList = memo(
  ({ products }) => {

    return (
      <div className="itemList">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
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
  },
  (prevProps, nextProps) => prevProps.products.length === nextProps.products.length
);

export default ItemList;

