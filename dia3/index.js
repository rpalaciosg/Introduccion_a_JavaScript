//ejemplo de filter

let myArr = ['Enero','Febrero','Marzo'];
myArr.filter( element => element === 'Enero' );
//devuelve [ 'Enero' ]

/**
 * Programación Orientada a Objetos
 */

 // Primera forma
 function Person(name, surname, age) {
     this.age = age;
     this.name = name;
     this.surname = surname;
     this.isAdult = age >= 18 ? true : false;
 }

 let person = new Person('Richard', 'Palacios', '28');
 person.name;
 person.age;
 person.isAdult;


 // Segunda forma con class
 class Persona {
     constructor(name, surname){
         this.name = name;
         this.surname = surname;
     }
 }

 let persona1 = new Person('Richard', 'Parker');
 persona1.name;
 persona1.surname;

// Ejemplo método de clase despues de ECMASscript2015
class Person {
    constructor(name){
        this.name = name;
    }
    sayHi() {
        console.log("Hola me llamo " + this.name);
    }
}

let person = new Person("Richard");
person.sayHi();

// Ejemplo de Herencia
class Student extends Person, Profesor {
    
}