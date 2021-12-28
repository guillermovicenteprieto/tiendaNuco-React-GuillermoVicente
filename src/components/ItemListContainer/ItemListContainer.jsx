//import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ user, greeting }) => {

 return (
    <div className="itemListContainerClass">
      <p className="titleComponent">
        <i>ItemListContainer Component</i>
      </p>
      <h2>
        hola {user}, {greeting}
      </h2>
      <ItemCount title={"Taza"} description={"Taza cerámica pintada"} initial={1} stock={10} price={100}/>
    </div>
  );

};
export default ItemListContainer;
