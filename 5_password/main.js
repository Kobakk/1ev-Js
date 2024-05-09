/* Ejercicio 5 [3 puntos] */
/* Dados los siguientes array de letras, números y caracteres especiales */
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracteresEspeciales = ["!", "#", "$", "&", "@", "_", "-", "(", "=", "?"];

/* Nota: los passwords se mostrarán por consola */
/* [1] Crea una función para generar un password débil:
  - Compuesta por 5 letras y 3 números.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
*/
// Manera facil de hacerlo
function pwdFacil() {
  let pwd = "";
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * letras.length);
    pwd += letras[randomIndex];
  }
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * numeros.length);
    pwd += numeros[randomIndex];
  }
  return pwd;
}

const valorRandom = (array) => {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
};
let pwd = [];
let aux = new Set();
let index = 0;
const easyPwd = (pwd, aux, index, letras) => {
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
//console.log(easyPwd(pwd,aux,index,letras, numeros));
const passwordHard = (pwd, aux, index, letras, numeros, especiales) => {
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
console.log(
  passwordHard(pwd, aux, index, letras, numeros, caracteresEspeciales)
);
/* [1.5] Crea una función para generar un password fuerte: 
  - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
  - En la primera posición aparecerá un carácter especial, 
    la primera letra generada debe ser obligatoriamente mayúscula,
    el resto minúsculas 
    y ningún valor se podrá repetir.
*/
function pwdDificil() {
  let pwd = "";
  //especial
  let randomIndexEspecial = Math.floor(
    Math.random() * caracteresEspeciales.length
  );
  pwd += caracteresEspeciales[randomIndexEspecial];
  //mayuscula
  let iMayuscula = Math.floor(Math.random() * letras.length);
  let mayus = letras[iMayuscula].toLocaleUpperCase();
  pwd += mayus;
  //5 minusculas aleatorias
  let minus = letras.filter((letra) => letra !== mayus.toLowerCase());
  for (let i = 0; i < 5; i++) {
    let rI = Math.floor(Math.random() * minus.length);
    pwd += minus[rI].toLowerCase();
    minus.splice(rI, 1);
  }
  for (let i = 0; i < 4; i++) {
    let rI = Math.floor(Math.random() * numeros.length);
    pwd += numeros[rI];
  }
  for (let i = 0; i < 3; i++) {
    let rIS = Math.floor(Math.random() * caracteresEspeciales.length);
    pwd += caracteresEspeciales[rIS];
  }
  return pwd;
}
//console.log(pwdDificil());
/* [0.5] Pedir al usuario la que elija una opción,
   comprobar que la opción es correcta y si no lo es advertirle,
   repetir hasta que elija terminar */
function ComprobarRespuesta(respuesta) {
  //if(isNaN(numeroCartones)) throw new Error(`${numeroCartones} debe ser un numero, y es ${typeof numeroCartones}.`);
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
        console.log(` Contraseña creada: ${pwdFacil()}`);
      if (respuesta == "dificil")
        console.log(`Contraseña creada: ${pwdDificil()}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
});
