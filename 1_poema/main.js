/* Ejercicio 1 [0.5 puntos] */

/* Dado el siguiente texto */

let poema = `Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña.
Con la sombra en la cintura,
ella sueña en su baranda,
verde carne, pelo verde,
con los ojos de fría plata.
Verde que te quiero verde.
Bajo la luna gitana,
las cosas la están mirando
y ella no puede mirarlas.`;

let poemaII = `Ola que tal como estas.`;
let aux = "Ola me llamo sebas";
/* [0.5] Mostrar en consola las palabras en minúscula, separadas por comas y al final terminado en punto. */

function ejercicio1(poema) {
  poema = poema.toLowerCase();
  let lineas = poema.split("\n");
  let palabras = [];
  lineas.forEach((linea) => {
    let palabrasLinea = linea.split(" ");
    palabras = palabras.concat(palabrasLinea);
  });
  poema = palabras.join(",");
  return poema;
}

function arrowFunction(array) {
  array.forEach((palabra) => {
    console.log(palabra);
  });
}

let resultado = ejercicio1(poema);
console.log(resultado);
// arrowFunction("esto es un error"); // Daria error
arrowFunction(["esto", "es", "un", "error"]);

function partirFrases(string) {
  console.log(`partidorFrase: ${typeof string}`);
  let palabras = string.split(" ");
  console.log(palabras);
  palabras.forEach((palabra) => {
    console.log(palabra);
  });
  // string.forEach(palabras =>{
  //     let palabra = palabras.split('');
  //     console.log(palabra);
  // })
  string = palabras;
  let aux = "Me llamo sebastian.";
  console.log(`El valor de la variable es : ${typeof aux}`);
  console.log(typeof string);
  return string;
}
partirFrases(poemaII);

function cambiarContenido(string) {
  document.addEventListener("DOMContentLoaded", () => {
    const poema = document.querySelector("pre");
    poema.textContent = string;
  });
}

function cambiarContenidoDos(string) {
  document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementsByTagName("h1");
    titulo[0].addEventListener(
      "mouseover",
      () => (titulo[0].textContent = string)
    );
    titulo[0].addEventListener(
      "mouseleave",
      () => (titulo[0].textContent = "Ejercicio1")
    );
  });
}
function textoCreado(){
    const elemento = document.createElement('p');
    elemento.innerHTML = 'Hola como estas';
    return elemento;
}
function cambiarTexto2(string) {
  document.addEventListener("DOMContentLoaded", () => {
    const elementoDom = document.getElementsByTagName("h3");
    if (elementoDom[0].textContent.includes("s")) {
        console.log((elementoDom[0].textContent.includes("s")));
      elementoDom[0].addEventListener(
        "mouseover",
        () => (elementoDom[0].textContent = string)
      );
      elementoDom[0].addEventListener(
        "mouseleave",
        () => (elementoDom[0].textContent = "Resultados")
      );
      elementoDom[0].appendChild(textoCreado());
    } else {
    }
  });
}

let arra = 'Me gustan los chocobollos';
let lineas = arra.split(',');
console.log(lineas);
solucion = [];
let arrayEjemplo = 'Me gustan los chocobollos';
arrayEjemplo.forEach((linea) => {
   let letras =  lineas.split('');
});
console.log(solucion);
console.log(amongas);

function rompedorDeStrings(string){
    let resultado = [];
    for(let i=0; i< string.length; i++){
        resultado.push(string[i]);
        resultado.push('i');
    }
    return resultado;
}