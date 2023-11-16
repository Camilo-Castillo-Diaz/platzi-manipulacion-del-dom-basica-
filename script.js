// leeer html y seleccionar 
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito")
const pid= document.querySelector("#pid")
const input = document.querySelector("input")
console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})



// cambiar html desde de js

// h1.innerText= "hola mundo <br> feo"
// h1.innerHTML= "hola mundo  <br> feo" insertar texto 


// console.log(h1.getAttribute("class")) // agregar atributos 

// h1.setAttribute("class" ,"rojo") //modificar atributos


h1.classList.add("rjo") // agregar clase
h1.classList.remove("verde") // eliminar clase 


input.value="hola mundo" // agragar en input 

const img = document.createElement("img") // crear elementos 
img.setAttribute("src","https://i.pinimg.com/474x/ed/48/f3/ed48f396e5cee4f6484085cb7abd669d.jpg") //agrgar atributos
pid.innerHTML="" // eliminamos el parrafo y agrga la img 
pid.appendChild(img); // insertamos la img con app en el parrafo pid 


// escuchar eventos 

const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const boton = document.querySelector("#boton")
const p1 = document.querySelector("#resultado")
const form = document.querySelector("#formulario")

//onclick

// function butononclik(){
//    let i= parseInt(input1.value )
//    let o = parseInt(input2.value)
//    suma = i + o
//   p1.innerHTML ="resultado : " + suma
// }



// addeventlistener

// boton.addEventListener("click",butononclik)
// function butononclik(){
//    let i= parseInt(input1.value )
//    let o = parseInt(input2.value)
//    suma = i + o
//   p1.innerHTML ="resultado : " + suma
// }




// fomrulario
// form.addEventListener("submit",butononclik)
// function butononclik(event){
//     event.preventDefault() // no se recarge la pagina 
//     let i= parseInt(input1.value )
//     let o = parseInt(input2.value)
//     suma = i + o
//    p1.innerHTML ="resultado : " + suma
//  }

//  otra forma 
boton.addEventListener("click",butononclik)
function butononclik(){
    // en html se agrga el type para que funcione
    let i= parseInt(input1.value )
    let o = parseInt(input2.value)
    suma = i + o
   p1.innerHTML ="resultado : " + suma
 }