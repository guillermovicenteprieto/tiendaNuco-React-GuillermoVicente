const data = [
  {
    id: "1",
    image:
      "https://i.etsystatic.com/23850237/r/il/d0c860/3465579373/il_1140xN.3465579373_g5bt.jpg",
    title: "Taza",
    descripcion:
      "Simples y hermosas tazas de cerámica creadas para sus rituales cotidianos. Perfecto para espresso. Hecho a mano en cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "800",
    stock: "10",
  },
  {
    id: "2",
    image:
      "https://i.etsystatic.com/23850237/r/il/c13940/3436751236/il_794xN.3436751236_47ny.jpg",
    title: "Bowl",
    descripcion:
      "Simples y hermosos bowls de cerámica creados para sus rituales cotidianos. Hecho a mano en cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "1000",
    stock: "10",
  },
  {
    id: "3",
    image:
      "https://i.etsystatic.com/23850237/r/il/0de050/3430110541/il_1140xN.3430110541_sv8u.jpg",
    title: "Plato",
    descripcion:
      "Simples y hermosos platos de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "1200",
    stock: "10",
  },
  {
    id: "4",
    image:
      "https://i.etsystatic.com/23850237/r/il/d0c860/3465579373/il_1140xN.3465579373_g5bt.jpg",
    title: "Ensaladera",
    descripcion:
      "Simples y hermosas ensaladeras de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "1400",
    stock: "10",
  },
  {
    id: "5",
    image:
      "https://i.etsystatic.com/23850237/r/il/c13940/3436751236/il_794xN.3436751236_47ny.jpg",
    title: "Tetera",
    descripcion:
      "Simples y hermosas teteras de cerámica creadas para sus rituales cotidianos. Hecho a mano cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "1600",
    stock: "10",
  },
  {
    id: "6",
    image:
      "https://i.etsystatic.com/23850237/r/il/0de050/3430110541/il_1140xN.3430110541_sv8u.jpg",
    title: "Pie de Torta",
    descripcion:
      "Simples y hermosos pies de torta de cerámica creadas para sus eventos especiales. Hecho a mano en  cerámica de gres negro, pincel pintado con porcelana blanca y acabado con esmalte mate. Colores muy cálidos y terrosos que mantienen los hermosos tonos de la arcilla.",
    dimensions: "5 x 2.5 aproximadamente",
    categoria: "Cerámica",
    price: "1800",
    stock: "10",
  },
];

//empleo una función de tipo flecha para resolver la promesa, con un setTimeout de 2 segundos luego del bloque de ejecución
const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
    reject(new Error("Error"));
  }, 2000);
});

export default getProducts;
