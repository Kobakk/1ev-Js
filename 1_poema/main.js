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

let array = [0, 0, 0];
let solucion = [];
let stringArray = array.join('|');
console.log(stringArray);
/**
 * quitar todos los saltos de linea
 * quitar todas las comas
 * quitar todos los puntos
 * a minusculas
 * y sustituir todos los espacios por comas
 * añadir un . al final
 */
let poemaF = poema.replaceAll("\n"," ");
poemaF = poemaF.replaceAll(",", "");
poemaF = poemaF.replaceAll(".", "");
poemaF = poemaF.toLowerCase();
poemaF = poemaF.replaceAll(" ", ",");
poemaF += ".";
//poemaF = poemaF.replace(/[,.v]/gi, "");
console.log(poemaF);    


/* [0.5] Mostrar en consola las palabras en minúscula, separadas por comas y al final terminado en punto. */
//minisculas
let textoMinuscula = poema.toLocaleLowerCase();
//comas
//terminar en punto
let nuevoPoema = ``;
nuevoPoema = poema.split(' ');
poema.forEach(element => {
  
});