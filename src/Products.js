const items = [
  {
    id: "1",
    type: "Suplementos nacionales",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/11/Camu-camu-en-polvo-ecoandino-368x383.jpg",
    name: "Camu Camu en polvo 100gr",
    description: "descripcion del producto elegido",
    price: 300,
    stock: 3,
  },
  {
    id: "2",
    type: "Suplementos nacionales",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/02/Algas-Marinas-Bio-center-500mg-100-c%C3%A1psulas.jpg",
    name: "Algas marinas en cápsulas x100 unidades Bio Center 500mg",
    description: "descripcion del producto elegido",
    price: 200,
    stock: 5,
  },
  {
    id: "3",
    type: "Suplementos nacionales",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2020/12/Capsulas-Ashwagandha-Herbals-and-health.jpg",
    name: "Ashwagandha Herbals & Health 60 caps",
    description: "descripcion del producto elegido",
    price: 250,
    stock: 5,
  },
  {
    id: "4",
    type: "Suplementos nacionales",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/05/Cloruro-de-Magnesio-100-c%C3%A1psulas-Dinoa.jpg",
    name: "Cloruro de Magnesio x30 cápsulas Dinoa",
    description: "descripcion del producto elegido",
    price: 400,
    stock: 10,
  },
  {
    id: "5",
    type: "Suplementos importados",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/05/Cloruro-de-Magnesio-100-c%C3%A1psulas-Dinoa.jpg",
    name: "Cloruro de Magnesio cápsulas 100mg",
    description: "descripcion del producto elegido",
    price: 600,
    stock: 8,
  },
  {
    id: "6",
    type: "Suplementos importados",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/10/Aceite-de-pescado-Carlson-Kids-200ml.jpg",
    name: "Aceite de pescado Carlson Kids 200ml",
    description: "descripcion del producto elegido",
    price: 800,
    stock: 6,
  },
  {
    id: "7",
    type: "Suplementos importados",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/11/Calcio-con-Vitamina-D-3-en-polvo-Kirkman-227g.jpg",
    name: "Calcio con Vitamina D-3 en polvo Kirkman 227g",
    description: "descripcion del producto elegido",
    price: 1000,
    stock: 4,
  },
  {
    id: "8",
    type: "Suplementos importados",
    image:
      "https://www.ecotienda.pe/wp-content/uploads/2021/10/Goldenseal-Herb-Pharm-30ml.jpg",
    name: "Goldenseal Herb Pharm 30ml",
    description: "descripcion del producto elegido",
    price: 850,
    stock: 3,
  },
];

export const loadItems = new Promise((res, rej) => {
  let uno = "1";
  if (uno === "1") {
    setTimeout(() => {
      res(items);
    }, 2000);
  } else {
    rej("incoveniente al cargar");
  }
});

const Agua = {
    name: "Goldenseal Herb Pharm 30ml",
    price: 850
}

export const getDetail = new Promise((res) => {
  setTimeout(() => {
    res(Agua);
  }, 2000);
});
