/* Ejemplo de Error */
// try {
//     throw new Error("Error en el modulo de JS");
// } catch (e) {
//     console.log(e);
//     console.log(e.name);
//     console.log(e.message);
//     console.log(Error.lineNumber);
// }

/* Ejemplo de bucle For */
// let myArray = [1,2,3,4,5];
// console.log("longitud: " + myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(i);
//     console.log(myArray[i]);
//     myArray[i] = myArray[i].toString();
// }

// console.log(typeof myArray[1]);
// console.log(myArray);

/* Ejemplo forEach */

// let myArray = ["Hola ", "soy ", "un ", "Keepcoder"];

// let result = "";

// myArray.forEach( function(){
//     result += element;
// });

/* ejemplo Funciones */
// let myArray = [1,2,3,4,5,6];
// myArray.forEach( function (element, index, myArray){
//     myArray[index] = myArray[index].toString();
// });
// console.log(myArray);

// function plus(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// let total = plus(6,5);
// console.log(total);

/* Ejemplo de funcion con numero parametros no definidos o arguments */

// let concat = function (separator) {
//     let result = "";
//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }
//     return result;
// }

// console.log(concat(" ", "Hola", "Keepcoder!"));


// function totalPlus() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// console.log(totalPlus(1,5,6,7,8));

// setTimeout( function () {

// }, 100)

// setInterval(function(){

// }, 1000);

/* Ejemplo de arrow function */

// let concat = (separator, firtsString, secondString) => {
//     return firtsString + separator + secondString;
// }


// let myArray = [1,2,3,4,5];

// myArray.forEach( (element) => {
//     console.log(element);
// })

/* Ejemplo de callbacks */
readFile('doc.docx', function (err){

});

/* Ejemplo de promesa */

readFile('doc.docx').then((ok) => {
    
}).catch((err) => {
    console.log(e);
});

/* Ejemplo Async away */

async function f() {
    return await readFile('doc.docx');
}