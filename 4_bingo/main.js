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
    constructor(numeroBolas){
        this.numeroBolas = numeroBolas;
        this.bolasExtraidas = new Set();
        this.arrayBolas = this.inicializarBombo();
        //this.bolas = [...conjunto]; Utilizar Spread Operator 
    }
    inicializarBombo(){
        const arrayBolas = new Set();
        while(arrayBolas.size < this.numeroBolas){
            let aleatorio = Math.floor(Math.random() * 99) + 1;
            arrayBolas.add(aleatorio);
        }
        return arrayBolas;
    }
    extraerBolas(bolasaExtraer){//No hace  falta tanto codigo 😃
        const arrayBolas = Array.from(this.arrayBolas);//Usar nombres de var diferentes.
        while(this.bolasExtraidas.size < bolasaExtraer){
            const aleatorio = Math.floor(Math.random() * arrayBolas.length);
            const bolaExtraida = arrayBolas[aleatorio];
            this.bolasExtraidas.add(bolaExtraida);
        }
        //this.bolasExtriadas.push(this.bolas.pop());
    }
    getBolas(){
        return this.arrayBolas;
    }
    getBolasExtraidas(){
        return this.bolasExtraidas;
    }
    getBolasCantidad(){
        return this.arrayBolas.size;
    }
    getBolasExtraidasCantidad(){
        return this.bolasExtraidas.size;
    }
}

const ComprobarNumero = (numeroCartones) => {
    if(isNaN(numeroCartones)) throw new Error(`${numeroCartones} debe ser un numero, y es ${typeof numeroCartones}.`);
    if (numeroCartones === null) throw new Error(`${numeroCartones} es nulo.`);
    if (numeroCartones === "") throw new Error(`${numeroCartones} esta vacio.`);
    if (numeroCartones < 1 || numeroCartones > 90) throw new Error(`${numeroCartones} menor que 1 o mayor que 90.`)
    return true;
}

const  mostrarContenidoBombo = (numeroBolas,arrayBolas, bolasExtraidas, arrayBolasExtraidas) =>{
    const $body =  document.body; /*document.getElementsByTagName('body');*/
    const div = document.createElement("div");
    div.innerHTML = `
        <p>Cantidad bolas del bombo: ${numeroBolas}</p>
        <p>Bolas del bombo: ${arrayBolas}</p>
        <p>Cantidad bolas extraidas: ${bolasExtraidas}</p>
        <p>Bolas extraidas: ${arrayBolasExtraidas}</p>
    `;
    $body.appendChild(div);
}
document.addEventListener('DOMContentLoaded', function(){
    const bombo1 = new Bombo(90);
    try{
        let bolasAExtraer = prompt('¿Cuatas bolas quieres extraer?');
        ComprobarNumero(bolasAExtraer);
        //console.log(bolasAExtraer);
        bombo1.extraerBolas(bolasAExtraer);
        const arrayBolasExtraidas = Array.from(bombo1.getBolasExtraidas());
        const arrayBolas = Array.from(bombo1.getBolas());
        const numeroBolasExtraidas = bombo1.getBolasExtraidasCantidad();
        const numeroBolas = bombo1.getBolasCantidad();
        console.log(arrayBolasExtraidas);
        console.log(`numero extraidas: ${numeroBolasExtraidas}, numero bolas: ${numeroBolas}`);
        console.log(`Array bolas: ${arrayBolas}, Array bolasExtraidas: ${arrayBolasExtraidas}`);

        mostrarContenidoBombo(numeroBolas, arrayBolas, numeroBolasExtraidas, arrayBolasExtraidas);

    }catch(error){
        console.log(`Error: ${error.message}`);
    }

});