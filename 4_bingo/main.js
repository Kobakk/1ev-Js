/* Ejercicio 4 [3 puntos] */

/*
Crear un objeto bombo que tendrá las bolas del bombo y las bolas extraidas en un bingo.
El número de bolas es 90.
Implementar los métodos:
- inicializar: Rellena el bombo con 90 bolas (no están ordenadas)
- extraerBola: Saca una bola del bombo y la pone en bolas extraidas.
- mostrarBolas: Muestra en la web las bolas en el bombo.
- mostrarBolasExtraidas: Muestra en la web las bolas extraidas.
- cantidadBolasEnBombo: Devuelve la cantidad de bolas en el bombo.
- cantidadBolasExtraidas: Devuelve la cantidad de bolas extraidas.

Se le pedirá al usuario que introduzca el número de bolas a extraer.
Se mostrará en pantalla la cantidad de bolas en el bombo.
Se mostrará en pantalla las bolas en el bombo.
Se mostrará en pantalla la cantidad de bolas extraídas.
Se mostrará en pantalla las bolas extraídas.
*/

/* [0,25] Crear una función que compruebe que el número de bolas a extraer que quiere el usuario.
Se comprobará que ha introducido un valor, 
que el valor introducido es del tipo correcto,
el número mínimo de bolas es 1 y el máximo 90. */

/* Crear el objeto bombo con sus atributos y métodos.
- [1] inicializar: Rellena el bombo con 90 bolas (no están ordenadas)
- [0.5] extraerBola: Saca una bola del bombo y la pone en bolas extraidas.
- [0.25] mostrarBolas: Muestra en la web las bolas en el bombo.
- [0.25] mostrarBolasExtraidas: Muestra en la web las bolas extraidas.
- [0.25] cantidadBolasEnBombo: Devuelve la cantidad de bolas en el bombo.
- [0.25] cantidadBolasExtraidas: Devuelve la cantidad de bolas extraidas.
 */

// [0.25] Pedir al usuario que introduzca el número de bolas a extraer.
// Mostrar en pantalla la cantidad de bolas en el bombo.
// Mostrar en pantalla las bolas en el bombo.
// Mostrar en pantalla la cantidad de bolas extraídas.
// Mostrar en pantalla las bolas extraídas.
/*
const bombo = {
    bolas: [],
    bolasExtraidas: [],

    inicializar: function(){
        for(let i=1; i<=90; i++){
            this.bolas.push(i);
        }
    },
    extraerBola: function(){
        if(this.bolas.length === 0){
            console.log('¡No hay mas bolas en el bombo!');
            return;
        }
        const iA = Math.floor(Math.random() * this.bolas.length);
        const bolaExtraida = this.bolas.splice(iA, 1)[0];
        this.bolasExtraidas.push(bolaExtraida);
    },
    mostrarBolas: function (){
        console.log('Bolas en el Bombo: ', this.bolas.join(", "));
    }
}
*/

class Bombo{
    constructor(bolas, bolasExtraidas){
        this.bolas = bolas;
        this.bolasExtraidas = bolasExtraidas;
        this.arrayBolas = new Set();
    }
    getBolas(){
        return this.bolas;
    }
    inicializarBombo(){
        const arrayBolas = new Set();
        while(arrayBolas.size < this.bolas){
            let aleatorio = Math.floor(Math.random() * 99) + 1;
            arrayBolas.add(aleatorio);
        }
        this.arrayBolas = arrayBolas;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const bombo1 = new Bombo(90, 0);
    console.log(bombo1.getBolas())
    
});