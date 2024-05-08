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
const barajar = (array) =>{
  let aux = array.length;
  let resultado = [];
  let randomIndex =  0;
  while(resultado.length < aux){
    randomIndex = Math.floor(Math.random() * array.length);
    let valorExtraido = array.splice(randomIndex, 1)[0];
    resultado.push(valorExtraido);
  }
  return resultado;
}

function pwdFacil() {
  let pwd = [];

  while(pwd.length < 5){
    let randomIndex = Math.floor(Math.random() * letras.length);
    pwd += letras[randomIndex];
  }
  while(pwd.length < 9){
    let randomIndex = Math.floor(Math.random() * numeros.length);
    pwd += numeros[randomIndex];    
  }
  let resultadoPwd  = barajar(pwd);
  return resultadoPwd;
}

//console.log(pwdFacil());
/* [1.5] Crea una función para generar un password fuerte: 

  - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
  - En la primera posición aparecerá un carácter especial, 
    la primera letra generada debe ser obligatoriamente mayúscula,
    el resto minúsculas 
    y ningún valor se podrá repetir.
*/
// function mezlcarArray(array){
//   for (let i = (array.length -1) ; i > 0; i-- ){
//     const j = Math.floor(Math.random() * (i+1));
//     [array[i], array[j] ] = [ array[i], array[j] ] ;
//   }
//   return array;
// }

function pwdDificil() {
  let pwd = '';
  //especial
  let randomIndexEspecial = Math.floor(Math.random() * caracteresEspeciales.length);
  pwd += caracteresEspeciales[randomIndexEspecial];
  //mayuscula
  let iMayuscula = Math.floor(Math.random() * letras.length);
  let mayus = letras[iMayuscula].toLocaleUpperCase();
  pwd += mayus;
  //5 minusculas aleatorias
  let minus = letras.filter(letra => letra !== mayus.toLowerCase());
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
const contraseñaDificil = (letras) => {
  let pwd = [];

  let randomIndex = 0;
  let aux = 0;
  while( !pwd.includes( letras[randomIndex].match(/[A-Z]/) ) || aux < 5){
    console.log(`${letras[randomIndex]}, ${aux}`)
    aux++;
    randomIndex = Math.floor(Math.random() * letras.length);
    console.log(`Intento numero ${aux}} : ${letras[randomIndex]}`);
    if(letras[randomIndex].match( /[A-Z]/ )) pwd.push(letras[randomIndex]);
  }

  while(pwd.length < 6){
    randomIndex = Math.floor(Math.random() * letras.length);
    if(letras[randomIndex].match( /[a-z]/ ) && !letras[randomIndex].includes(pwd) ) pwd.push(letras[randomIndex]); 
  }

}
contraseñaDificil(letras);
//console.log(pwdDificil());
/* [0.5] Pedir al usuario la que elija una opción,
   comprobar que la opción es correcta y si no lo es advertirle,
   repetir hasta que elija terminar */
/*
function ComprobarRespuesta(respuesta) {

  if (respuesta === null) throw new Error(`${respuesta} es nulo.`);
  if (respuesta === "") throw new Error(`${respuesta} esta vacio.`);
  if (respuesta !== "facil" && respuesta !== "dificil") throw new Error(`${respuesta} debe ser facil o dificil.`);
  return true;
}
document.addEventListener('DOMContentLoaded', function () {
  let respuestaCorrecta = false;
  while (!respuestaCorrecta) {
    try {
      let respuesta = prompt("¿Quieres una contraseña (facil) o (dificil)?: ");
      respuestaCorrecta = ComprobarRespuesta(respuesta);
      if (respuesta == "facil") console.log(` Contraseña creada: ${pwdFacil()}`);
      if (respuesta == "dificil") console.log(`Contraseña creada: ${pwdDificil()}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
});
*/

//Otra manera
const letraAleatoria = (letras) =>{
  let random = Math.floor(Math.random()*letras.length);
  return letras[random];
}

let pwd = [];
let aux = new Set();
let index = 0;
let flag  = 0; let letrasFlag = 0;

const easyPwd = (pwd, aux, index,letras) =>{

  while(flag < 8){
    index = Math.floor(Math.random()*8);
    if(!aux.has(index)){
      aux.add(index);
      if(letrasFlag<5){
        pwd[index] = letraAleatoria(letras);
        letrasFlag++;
      } else{
        pwd[index] = flag;
      }
      flag++;
    }    
  }
  return pwd;
  
}

console.log(easyPwd(pwd,aux,index,letras));
