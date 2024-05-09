//Arrays a usar
const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const especiales = ["!", "#", "$", "&", "@", "_", "-", "(", "=", "?"];
//Funciones creadas para resolver el ejercicio 
//Da un valor random de un array
const valorRandom = (array) => {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
};

//Contraseña simple
let pwd = [];
let aux = new Set();
let index = 0;

const easyPwd = (pwd, aux, index) => {
  while (aux.size < 8) {
    index = Math.floor(Math.random() * 8);
    if (!aux.has(index)) {
      let nuevoElemento;
      if (aux.size <= 5) {
        nuevoElemento = valorRandom(letras);
      } else {
        nuevoElemento = valorRandom(numeros);
      }
      while (pwd.includes(nuevoElemento)) {
        if (aux.size <= 5) {
          nuevoElemento = valorRandom(letras);
        } else {
          nuevoElemento = valorRandom(numeros);
        }
      }
      aux.add(index);
      pwd[index] = nuevoElemento;
    }
  }
  return pwd;
};
//Contraseña dificil
const hardPwd = (pwd, aux, index) => {
  pwd[0] = valorRandom(especiales);
  aux.add(0);
  while (aux.size < 13) {
    index = Math.floor(Math.random() * 13);
    if (!aux.has(index)) {
      let nuevoElemento;
      if (aux.size === 1) {
        nuevoElemento = valorRandom(letras);
        console.log(nuevoElemento);
        while (!nuevoElemento.match(/[A-Z]/)) {
          nuevoElemento = valorRandom(letras);
          console.log(nuevoElemento);
        }
      } else if (aux.size <= 6) {
        nuevoElemento = valorRandom(letras);
        while (!nuevoElemento.match(/[a-z]/)) {
          nuevoElemento = valorRandom(letras);
        }
      } else if (aux.size <= 10) {
        nuevoElemento = valorRandom(numeros);
        while (pwd.includes(nuevoElemento)) {
          nuevoElemento = valorRandom(numeros);
        }
      } else {
        nuevoElemento = valorRandom(especiales);
        while (pwd.includes(nuevoElemento)) {
          nuevoElemento = valorRandom(especiales);
        }
      }
      aux.add(index);
      pwd[index] = nuevoElemento;
    }
  }
  return pwd;
};

//Pedir por consola
function ComprobarRespuesta(respuesta) {
  if (respuesta === null) throw new Error(`${respuesta} es nulo.`);
  if (respuesta === "") throw new Error(`${respuesta} esta vacio.`);
  if (respuesta !== "facil" && respuesta !== "dificil")
    throw new Error(`${respuesta} debe ser facil o dificil.`);
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  let respuestaCorrecta = false;
  while (!respuestaCorrecta) {
    try {
      let respuesta = prompt("¿Quieres una contraseña (facil) o (dificil)?: ");
      respuestaCorrecta = ComprobarRespuesta(respuesta);
      if (respuesta == "facil")
        console.log(` Contraseña creada: ${easyPwd(pwd,aux,index)}`);
      if (respuesta == "dificil")
        console.log(`Contraseña creada: ${hardPwd(pwd,aux,index)}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
});
