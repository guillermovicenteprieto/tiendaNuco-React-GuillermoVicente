const ItemListContainer = ({ greeting }) => {
  let user = "coders";

  let stylesTitle = {
    with: "100%",
    border: "3px solid orange",
    padding: "5px",
    backgroundColor: "green",
    borderRadius: "20px",
    color: "white",
    margin: "10px",
    minHeight: "70vh",
  };

  let stylesDescription = {
    with: "100%",
    padding: "5px",
    backgroundColor: "green",
    color: "violet",
    margin: "10px",
  };

  return (
      <div style={stylesTitle}>
        <p><i>Este es el ItemListContainer</i></p>
        <h1>hola {user}, {greeting}</h1>
        <h2 style={stylesDescription}>En preparación, aquí podrán apreciarse nuestros productos</h2>
      </div>
  );
};
export default ItemListContainer;
