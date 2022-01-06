const data = [
  {
    id: "1",
    image: "../../assets/img/TazasGr.jpeg",
    title: "Taza Grande",
    description:
      "Simples y hermosos tazones grandes de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "800",
    stock: "10",
  },
  {
    id: "2",
    image: "../../assets/img/TazasCh.jpg",
    title: "Taza Chica",
    description:
      "Simples y hermosas tazas chicas de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "800",
    stock: "10",
  },
  {
    id: "3",
    image: "../../assets/img/bowlGr.jpg",
    title: "Bowl Grande",
    description:
      "Simples y hermosos bowls grandes de cerámica creados para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1000",
    stock: "10",
  },
  {
    id: "4",
    image: "../../assets/img/bowlCh.jpg",
    title: "Bowl Chico",
    description:
      "Simples y hermosos bowls chicos de cerámica creados para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1000",
    stock: "10",
  },
  {
    id: "5",
    image: "../../assets/img/platoGr.jpg",
    title: "Plato Grande",
    description:
      "Simples y hermosos platos grandes de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1200",
    stock: "10",
  },
  {
    id: "6",
    image: "../../assets/img/platoCh.jpeg",
    title: "Plato Chico",
    description:
      "Simples y hermosos platos chicos de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1200",
    stock: "10",
  },
  {
    id: "7",
    image: "../../assets/img/ensaladera.jpg",
    title: "Ensaladera",
    description:
      "Simples y hermosas ensaladeras de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1400",
    stock: "10",
  },
  {
    id: "8",
    image: "../../assets/img/fuente.jpg",
    title: "Fuente",
    description:
      "Simples y hermosas fuentes de cerámica creadas para sus rituales cotidianos. Hecho a mano en cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1600",
    stock: "10",
  },
  {
    id: "9",
    image: "../../assets/img/exprimidor.jpeg",
    title: "Exprimidor",
    description:
      "Simples y hermosos exprimidores de cerámica creadas para sus rituales cotidianos. Hecho a mano en  cerámica, pintada con colores vivos y acabado con esmalte mate.",
    dimensions: "5 x 2.5 aproximadamente",
    category: "Cerámica",
    price: "1800",
    stock: "10",
  },
];

//función de tipo flecha para resolver la promesa, con un setTimeout de 2 segundos luego del bloque de ejecución
const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
    reject(new Error("Error"));
  }, 2000);
});

export default getProducts;
