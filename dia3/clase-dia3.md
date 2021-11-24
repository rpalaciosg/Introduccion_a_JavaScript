# Clase día 3
## Correr import y exports
Primero los ficheros deben tener la extensión `.mjs`, ambos el que hace el export y el archivo desde donde se hace import.
La sintanxis para correr desde la terminal es, usar en el comando node la siguiente propiedad `--experimental.modules`, ejemplo:

```shell
    node --experimental-modules index.mjs 
```

- Otra forma, para que reconozca si o sí., para una version anterios de ECMAScript2015

```js
let import = require('path')
```

## Modo estricto
El modo estricto de ECMAScript5 Es una forma de elegir una variante restringida de JavaScript.
- elimina errores silenciosos de javascript
- permite hacer mas facil hacer optimizaciones en los navegadores.
- prohibe cierta sintaxis.

Se usa esta intanxis al inicio del script:
```js
    'use strict';
```

O se puede usar a nivel de funciones.
```js
function miFuncion(){
    'use strict';
}
```

## Metodos mas usados en strings

En js se puede concatenar métodos.
- si usas las comillas simples invertidas, las puedes usar una sintaxis `${}`
- ejemplo:
```language
    `Hola, ${name}`
```

- split(separador) 
  - divide un string en un array.
  
- trim()
  - Elimina los espacios en blanco en ambos extremos de un string.


- join(union)
  - Une todos los objetos de una lista en una cadena. Esta unión la realiza con el parámetros especificado en la función.


- concat(string1, string2, string3, ...)
  - Encadena dos o varias strings en una sola string

- includes(search)
  - Indica si una cadena de texto se encuentra dentro de otra cadena de texto

- replace(replaceString)
  - Sustituir, busca unos caracteres en una cadena y los sustituyes por los especidicados.

## Métodos mas usados en Numbers

- toFixed(valor)
  - Formatea un numeros de forma que lo devuelve con el número de decimales que hayamos espcificado como parámetro de entrada de la funcion, devuelve una string, a la salida, hay que pasarle el parse.

- isNaN()
  - Especificasi el número es NaN

- isFinite()
  - Determina si el valor es finito.

## Métodos mas usados en Arrays.

- filter(function)
  - Sirve para filtrar los `elementos` de un `array` y creará un nuevo `array`, con los items 
  - Este métodos nos permite filtrar en una rray, reciebe parameteo de entrada una función
  - Ejemplo: Veamos como conseguir esto por el método tradicional. En este caso crearemos un nuevo Array con los items cuyo valor sea mayor que 3:
  ```js
    let numbers = [1, 2, 3, 4, 5, 6]
    let numFiltered = []

    for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 3) {
        numFiltered[i] = numbers[i]
    }
    }
    // [4, 5, 6]
  ```
  - Ahora con el método filter:
  ```js
    let numbers = [1, 2, 3, 4, 5, 6]
    let numFiltered = numbers.filter(function (number) {
    return number > 3
    })
    // [4, 5, 6]
  ```
  - Ahora usando una arrow function en la funcion:
  ```js
    let numbers = [1, 2, 3, 4, 5, 6]
    let numFiltered = numbers.filter(number => number > 3)
    // [4, 5, 6]
  ```

- splice()
  - Cambia el contenido de un array eliminando un elmento, añadiendolo o modificándolo.

- slice()
  - Devuelve una copia de nuestro array, pudiendo especificar desde que posicion queremos empezar a realizar la copia y donde queremos deterla. Esto ya que cuando quiero hacer una copi creandome un let array = array_a_copiar, en realidad estoy haciendo una referencia a ese array, y si modifico la copia en realidad estoy modificando ese objeto, en ese caso usamos slice.

- reverse()
  - Devuelve el array del revéz.

- sort(function)
  - ordamiento

- reduce(function):
  - Reduce el array a un solo elemento. 
  - Aplica funcion a cada valor de un array para reducir el array a un único valor.
  - Recibe 4 parámetros:
    - valorAnterior
    - valorActual
    - index
    - array
  - Ejemplo, que suma todos los números de un array:
  ```js
    let numbers = [1, 2, 3, 4, 5, 6]
    let total = 0

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    // devuelve 21
  ```
  - Ahora usando la funcion reduce();
  ```js
    let numbers = [1,2,3,4,5,6];
    let total = numbers.reduce((prev, current) => prev + current, 0);
    // devuelve los 21
  ```

```js
    let myArr = [1,2,3,4];
    myArr.reduce((a,b) => a + b)
    //devuelve 10
```

- map(function)
  - Devuelve un nuevo array con los valores resultantes de la ejecución de la función que recibe un elemento del array en cada iteración.
  - ejemplo obtener los numeros cuadrados de los items de un array sin map.
    ```js
        let numbers = [1, 2, 3, 4, 5, 6]
        let numSqrt = []

        for (let i = 0; i < numbers.length; i++) {
        numSqrt[i] = numbers[i] * numbers[i]
        }
        // devuelve [1, 4, 9, 16, 25, 36]
    ```
   - ahora un ejemplo usando la función map
    ```js
        let numbers = [1, 2, 3, 4, 5, 6]
        let numSqrt = numbers.map( function (number) {
        return number * number
        })
        // devuelve [1, 4, 9, 16, 25, 36]
    ```
   - Esta es una forma mas abrebiada en el arrow function.
    ```js
        let numbers = [1, 2, 3, 4, 5, 6];
        let numSqrt = numbers.map( number => number * number );
        // devuelve [1, 4, 9, 16, 25, 36]
    ```

 # Nota importante
 =================

>> Nota importante, es bueno conocer de **`jsx`**, o `programación reactiva` que es un paradigma de programación mas avanzado.

## Encadenando Funciones

Mostraremos un ejemplo de un array que continene objetos:

```js
    var developers = [
        { name: 'Tano', type: 'mobile', age: 4 },
        { name: 'Inma', type: 'mobile', age: 31 },
        { name: 'Edgar', type: 'web', age: 35 },
        { name: 'Fernando', type: 'mobile', age: 33 }
    ]
```
- Ahora pongamos como caso que necesitamos sacar el total de las edades de los desarrolladores mobile. Antes de seguir, ¿Se os ocurre como hacerlo?

```js
    let sumYearsMobileDev = developers
        .filter(developer => developer.type === 'mobile')
        .map(developer => developer.age)
        .reduce((prev,cur) => prev + cur, 0);
    //Esto devuelve 68
```

## Métodos más usados en Dates

* now ()
* parse()
* getDate()
* getFullYear()
* getDay
* getUTCMonth()

## PROGRAMACIÓN ORIENTADA A OBJETOS

- Es una función que funciona como constructor.
- Es mejor crear la primera letra del nombre de la funciṕn en mayuscula para diferenciar que es un objeto.

```js
function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

let person = new Persona('Pedro');
person.primerNombre; // "Pedro"
```

-  A partir de EC2015 podemos defirnir las clases con la palabra class.
-  La asignación de propiedades se haría en el interior de la sentencia:

```js
    class Polygon {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    let myPolygon = new Polygon(5,10);
    myPolygon.x; //devuelve 5
```

Otro ejemplo:

```js
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
```

Ejemplo con class:

```JS
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
```

### Métodos de clase

- La programacion orientada a objetos tratan de simular un objeto en la vida releaseEvents.

- Antes de ECMAScript2015 lo que se hacia era usar prototype:

```js
    Person.prototype.walk = function() {
        alert("Estoy caminando!");
    };
    Person.prototype.sayHi = function(){
        alert("Hola, Soy" + this.name);
    };
```

- A partir de EcmaScript2015, basta con añadir una funcion con el nombre dle método sin usar prototype;

```js
// Ejemplo método de clase después de ECMASscript2015
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
```

### Herencia

- Heredar propiedades de la clase.
- Forma a partir de ECMAScript2015
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' hace un ruido.');
    }
}

class Dog extends Animal {
    speak() {
        //sobreescribe el método del padre
        console.log(this.name + 'ladra.');
    }
}
```

- Forma antes de ECMAScript2015, es basado en prototypos.
```js

```

## Extras

### NVM

### Awesome NodeJS

### TypeScript
- Recomendado para despues de aprender javascript


## Importación

En versiones antes de ECS2015

## Exportación

## NPM

- Se usó para instalar browser sync.
- cuando se hace `npm install` lo que hace es instalar una dependencia.
- Son herramientas de consola.
- Al instalar se crea un `package.json`, es como un fichero de configuración de node y del proyecto. Se incluye el nombre dle proyecto, la version, el repositorio de github, palabras clave para el proyecto para que sea indexable, se declaran las dependencias, y las dependencias de desarrollo.
- PAra que una dependencia se guarde en el `package.json` se debe usar la siguiente sintaxis `npm install --save ora`, si se lo hace así `npm install ora` no se guarda en el `package.json`.
- Se puede usar una forma abreviada `npm i -s ora`, al usar el save, lo que hará es guardarnos esta dependencia en una carpeta que se llama `node_modules`.

- Diferencia entre 
- El fichero `package-lock.json` lo creará siempre. Aqui se guarda las versiones que se descargaron en mi proyecto 

## refactorización
