¿Qué es una variable y para qué sirve?
son cajitas (spacios en memoria ) donde podemos guardar imformacion (dependiendo ) de los tipos  y estructuras  de datos que soporte nuetro lenguaje

¿Cuál es la diferencia entre declarar e inicializar una variable?
declara es cuando le decimos a javascript que vamos a crear una variable con el nombre tal . mientras que inicializar es aseginarle valor a esa variable 

¿Cuál es la diferencia entre sumar números y concatenar strings?
¿Cuál operador me permite sumar o concatenar?

el operador que nos permite sumar o concatenar es + . este operador nos permite sumar numeros cuando lo usamos con numeros . pero cuando los strings  lo que hace es unir ( concatenar , asi se dice) ambos strings




Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre: string 
Apellido:string
Nombre de usuario en Platzi: string
Edad: number
Correo electrónico : string
Mayor de edad : booleano
Dinero ahorrado: number
Deudas: number 



3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "juan"
let apellido = "dias"
let username = "juandc"
let edad = 19
let correo= "juan@gmail.com"
let mayorEdad = true
let dineroAhorrado = 100000
let deudas = 500000





4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

let nombrecompleto  = nombre + " " +  apellido
let dineroReal = dineroahorrado - deudas 




Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
  las funciones nos permiten encapsular guardar bloques de codigo para reutilizarlos y ademas ejecutarlos en el futuro 


¿Cuándo me sirve usar una función en mi código?
nos sirve cuando tenemis variables o bloques de codigo muy  parecidos (con cambios que podrian ser paramtros y argumnetos) que podemos encapsular para reutilizar mas de una vez en el futuro .  tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo


¿Cuál es la diferencia entre parámetros y argumentos de una función?
las funciones reciben parametros cuando las creamos y le enviamos argumentos cuando las ejecutamos 


2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

fuction nombreCompleto(name,lastname){
    return name + "" + lastname
}

fuction saludo (name,lastname,username){
const completeName =nombreCompleto(name,lastname)

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

saludo("juanita" ,"dias","juanita@gmail.com")


1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional?
son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validaccion

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if(else,else if) , swicht
el condicional if (else if else) nos permite hacer validaciones completamente disititas (si asi queremos ) en cada validacion o condicional. en cambion en el switch todos los casos se comparan con la misma variable o condicion que definimos en el swicht 

¿Puedo combinar funciones y condicionales?
si.,las funciones pueden encapsular cualquier blque de codigo, incluyendo condicionales 





2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}



3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏




1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion .


¿Qué tipos de ciclos existen en JavaScript?
while,for,do while


¿Qué es un ciclo infinito y por qué es un problema?
es cuando la validcion de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicacion cuando el navegador ya no puede ,mas de tanto ejecucion de ese blque de codigo

¿Puedo mezclar ciclos y condicionales?
si aunque los ciclos son una especie de condicionales nada nos impide agregar  mas condicionales dentro del ciclo




2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}



3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.





1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
es una lista de elementos 
const arreglo  = ["hola","1"]

¿Qué es un objeto?
es una lista de elementos pero cada elemento tiene un nombre clave 
const objecto = {
  nombre  : "camilo",
  edad : 19
}


¿Cuándo es mejor usar objetos o arrays?
arrays cuando lo qe haremos en un elemento es lo mismo que en todos los elementos 
demas (la regla se puede imcuplir ) mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro atgoritmo


¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
si, los arrays pueder guardar obejtos y los obejtos pueden guardar arrays en sus propiedades

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).