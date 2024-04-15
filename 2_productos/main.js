/* Ejercicio 2 [0.5 puntos] */

/* Dado el siguiente array de objetos */

const productos = [
  {
    nombre: "Producto1",
    fecha: new Date("2021-06-15"),
  },
  {
    nombre: "Producto2",
    fecha: new Date("2021-05-02"),
  },
  {
    nombre: "Producto3",
    fecha: new Date("2020-05-17"),
  },
  {
    nombre: "Producto4",
    fecha: new Date("2021-07-01"),
  },
  {
    nombre: "Producto5",
    fecha: new Date("2023-02-10"),
  },
  {
    nombre: "Producto6",
    fecha: new Date("2022-09-16"),
  },
];

// [0.25] Mostrar por consola el array ordenado por fecha.

const productosOrdenados = productos.sort((a,b) => a.fecha - b.fecha);
console.log(productosOrdenados);

// [0.25] Mostrar por consola el array con los productos con menos de dos años de antigüedad.
const fechaActual = new Date();

const haceDos = new Date();
haceDos.setFullYear(haceDos.getFullYear() - 2);
console.log(haceDos);
const productosRecientes = productos.filter(producto => producto.fecha > haceDos);
console.log(productosRecientes);


let libros = ["Guardian", "libro3", "liro4", "laSoledadyElmar"];

let busqueda = "Guardian";

function buscarLibros(busqueda){
  return libros.filter(libro => libro.toLowerCase().includes(busqueda.toLowerCase()))
}
console.log(buscarLibros(busqueda));
