Este es un proyecto realizado como parte del cursada de React.js en Coderhouse. Se trata de una tienda e-commerce simil MercadoLibre, realizada mediante distintos componentes que renderizan productos provenientes de una API. Los mismos se presentan en conjunto o filtrados por categorias, pudiendo modificar sus cantidades y ser ampliados a vista de detalle antes de ser ingresados al carrito.  

Se utiliza Bootstrap para darle estilos.

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
