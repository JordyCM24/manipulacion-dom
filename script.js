//voy a seleccionar dentro del documento mi h1 en string 
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');




form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(evento) {
    //console.log({evento});
    //evento.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}


function btnOnClick (params){
    let sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}




//Tipos de input (consultar para mi)
//escuchar eventos (consultar para mi)

/*const input = document.querySelector('input');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');


console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});
//cambio el titulo del html es una etiqueta html lo convierte
h1.innerHTML = "Instituto Superior Tecnologico <br> Japon ";
//convierte todo a Texto 
//h1.innerText = "Instituto Superior Tecnologico <br> Japon ";
//Extraer atributos 
console.log(h1.getAttribute('pantalla')); //si pongo class entre los parentesis lee las clases que tenga 
//Cambiar lo que tiene la clase 
//h1.setAttribute('class', 'Movil');
//Agrego una clase, con remove quito una 
h1.classList.add('Tablet');
//agrego un valor al input
input.value="Jordy Calderon";
//creo etiquetas 
const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/800px-Collage_of_Six_Cats-02.jpg');
console.log(img);
pid.append(img);
//reemplazo y hago que desaparezca el texto del pid(c borra la imagen)
//pid.innerHTML = "";

//Agrega una etiqueta hijo al pid
//pid.appendChild(img);*/



