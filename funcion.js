const nombre =(name,lastname,nickname)=>{
    let completeName = name+lastname
 console.log(`mi nombre es ${completeName} pero prefiero que me digas ${nickname}`)
}
nombre("juan david "  , "castro gallelo" ,"juandc")


// if else

const TipoDeSuscripcion  ="basic"


if(TipoDeSuscripcion ==="free"){
    console.log("solo puede tomar los cursos gratis ")
}else if(TipoDeSuscripcion === "basic"){
    console.log("puedes tomar casi todos los cursos de platzi durante un mes ")
} else if(TipoDeSuscripcion === "expert"){
    console.log("puedes tomar casi todos los cursos durante un año ")

}else if(TipoDeSuscripcion ==="expertoDuo"){
    console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un año")
}


   function solIf (suscripcion){ if(suscripcion ==="free"){
    console.log("solo puede tomar los cursos gratis ")}

    if(suscripcion ==="basic"){
        console.log("puedes tomar casi todos los cursos de platzi durante un mes ")
    
    }
    if(suscripcion ==="expert "){
        console.log("puedes tomar casi todos los cursos durante un año ")
    
    }
    if(suscripcion ==="expertPlus"){
        console.log("puedes tomar casi todos los cursos durante un año ")
    
    }
    console.warn("no exixte")
}

solIf("free")
    // doWhile

    let contador = 0

    while (contador < 5) {
        contador++
        console.log(contador)
    }


    let contador2 = 10
    do {
        console.log(contador2)
        contador2--

    } while (contador2 >= 2 );

console.log("-------------------")
      
//   3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.
     
   let contador4 = 0
   let suma = parseInt(prompt ("cuanto  es 2 + 2"))


   if(suma === 4){
    alert("felictaciones")
   }else{
    while (suma != 4) {
      alert("ingresa la respuesta correcta")
        suma = prompt ("cuanto  es 2 + 2")
         contador4++
  }
  alert("felictaciones")
   }
   


   let respuesta1;
   while(respuesta1 !="4"){
    let pregunta = prompt("cuanto es 2 + 2")
    respuesta1 = pregunta;
   }

         
//    Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// const array =(arreglo)=>{
//   console.log(arreglo[0])
// }
// array(["hola","mundo","hola"])

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

const array =(arreglo)=>{
    for (let i = 0 ; i < arreglo.length; i++) {
      
        console.log(arreglo[i])
    }
  }
  array(["hola","mundo","hola"])


//   Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const object ={
    nombre :"camilo",
    apellido :"diaz",
    edad :19,
    comidad:["arroz","pollo"]
}

const objeto =(object)=>{
    for (const i in object) {
        console.log(i) 
        console.log(object[i])
    }
}
objeto(object)





// segunda se convierte el objeto en arreglo con el object.values(objeto)
function imprimirElementoporelementoobjeto(obj){
    const arr = Object.values(obj);
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i])
    }
}

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional

let arreglo = ["solo puede tomar los cursos gratis","puedes tomar casi todos los cursos de platzi durante un mes ","puedes tomar casi todos los cursos durante un año"]

let TipoDeSuscripcion2 =["basic","experto","expertoPro"]

let respuesta = "experto"

for (let i = 0 ; i < arreglo.length ; i++) {

    if(respuesta == TipoDeSuscripcion2[i]){
        console.log(`el tipo de suscripcion es ${TipoDeSuscripcion2[i]} y  ${arreglo[i]}`)
     }
}


const tiposSupcriciones = {
    free :"solo puede tomar los cursos gratis",
    basic :"puedes tomar casi todos los cursos de platzi durante un mes ",
    expert: "puedes tomar casi todos los cursos durante un año"
}

function Conseguir(suscripcion){
 if(tiposSupcriciones[suscripcion]){
    console.log(tiposSupcriciones[suscripcion])
    return
 }
 console.warn("no existe")
}
tiposSupcriciones("free")

