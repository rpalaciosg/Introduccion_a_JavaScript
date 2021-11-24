# día 2

## Try/catch

```js
try {
    monthName = getMonthName(myMonth);
}
catch (e) {
    monthName = "unknown";
    console.log(e);
}
```

- Una excepcion, es un imprevisto que hace que el programa, termine con su ejecución normal.
- Se lanza un error en caso de un error grande, en casos cuando hay que mostrarla y cortar la ejecución.

## Throw

Nos permite lanzar una excepción.
Puedes lanzar cualquier expresión:
    - String
    - Boolean
    - Number
    - Object
    - etc..

```js
throw "Error";
throw 42;
throw true;
```

Cuendo recibo una excepción en un backend, por la causa que sea.

## Finally

Se coloca despues de try y catch.
Lo que se devuelva en try o catch, se va a ignorar si es que hay un finally, ya que lo que devuelve el finally se antepone a las devoluciones anteriores.

```js
openMyFile();
try {
    writeMyFile(theData);
} catch (e) {
    handleError(e);
} finally {
    closeMyFile();
}
```

## Bucles

### For

### forEach
Es mas para array, se ejecuta una función para cada elemento del array.

### For...of
Crea un bucle sobre objetos iterables. (Array, objetos, Map, Set)
Es la forma moderna de un for.
funciona exactamente como un for Each, con la diferencia que este si es una sentencia y no una funcion.
```js
let myObject = ["2", "5"];
for (let value of myObject){
    console.log(value); // "2" en la primera iteracion y "5" en la segunda.
}
```
- Set: es un valor que se usa en python, es un array que permite almacenar valores únicos, quita los valores duplicados y obtiene solo valores únicos.
```js
let miArray = [1,1,1,2];
let newSet = new Set(myArray); //[1,2]
```
- Map: 

### For...in
Al contrario del for...of o forEach
HAce lo mismo que hace el in pero iterando.
Esta enfocado mas en índices y en propiedades.

### Do/While

### while

## Funciones
Cuando una funciona no tiene nombre se la conoce como función anónima.

* Arguments
  - Cuando no se sabe cuantos argumentos de entrada se van a pasar se puede usar arguments, cuando recibamos muchas cosas y queramos, concatenar todos los elementos, o sumar.
  - Queremos recibir muchas cosas y no sabemos cuantas.
  - arguments es el nombre por defecto que se refiere a los argumentos o parámetros
  - Se accede desde la posición 1 y no la 0, ya que en el cero está el separador que suele ser un espacio en blanco.

## Arrow functions
Son funciones anonimas que nos permiten declarar funciones de forma mas sencillas.
LAs funciones normales tienen su propio contexto y las arrow function al contexto entero.

##this

## Asincronía
Es mandar a otro hilo, para no parar la ejecución del programa.
- Para cargas pesadas, se mandan a segundo plano, para que no interfiera en el hilo principal.
- Peticiones http
- Peticiones e escritura de ficheros.
- Primero se usaba callbacks, luego se mejorro y se creo promesas, y al final se creo asyncaway para mejorar las promesas.

## Funciones asíncronas con callbacks

## Hoisting
Forma de referirse a como funcionan los contextos en javascript.
Se perdio en las nuevas versiones de javascript., solo funciona en las versines antiguas de javascript.
Se asigna memoria la declaración al usar una variable aun no declarada.

## Binding
Crear un binding es ejecutar una funcion 
Recuperar el contexto original de un objeto. 

```js
    let boundGetX = getX.bind(module);
```



## Programación Orientada a Objetos
CRear objetos de todo lo que vayamos a usar en nuestra aplicación
Usar la abstracción del mundo real.
Todo lo que se pueda abstraer o crear en objeto en la vida real, se debe crear un objeto.
Ejm:
- Tienda en una we, un ecommerce, primero que voy a tener son usuario, y creo un objeto usuario.

## Importación
Permite importar un objeto, una variable o funcion en otro ficero js.
Antes para importar algo se usaba la funcion require():
```js
    const fs = require('fs');
```
Esto impotaba un modulo entero, y todo lo que éste exporte.

La forma actual es usar `import`.
```js
    import * as foo from '/modules/my-module.js';
    foo.
```

## Importacion de uno o varios miembros de un modulo
Cada objeto es un archivo. ejm:
 - fichero date_utils
 - fichero para strings

## Importar un módulo para efectos secundarios.

Ejecuta el código del módulo a importar

```js
    import './utils'
```

## Importacion de elementos por defecto

```js
    import myDefault from '/modules/my-module.js';

    import myDefault, * as myModule from '/modules/my-module.js';
    import myDefault, {foo, bar} from '/modules/my-module.js';
```

## Exportación

LA sentencia export se usa al crear modulos en js para exportar funciones, objetos, etc.
- Export nombrados
- Exports por defecto.

```js
    export const foo = MAth.sqrt(2);
    export default function() {}
```