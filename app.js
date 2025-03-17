let amigoSecreto = generarSorteo
let intentos = 1;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function agregarAmigo() {
    let detalleAmigos = document.getElementById('amigo').value; 
    console.log(detalleAmigos);

    intentos++;

    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Amigo Secreto');
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
    amigoSecreto = generarSorteo();
    intentos = 1;
}


function sortearAmigo() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('sortear').setAttribute('disabled','true');
}












let listaAmigos = [1,2,3,4,5,6];
let ingresos = 0;
let maximaCantidadNombres = 6;



let listaAmigos = prompt("Escribe un nombre: ");
    /*agregarAmigo()   add*/

    /*agregar un nombre válido*/ 

/*let listaAmigos= [1,2,3,4,5,6]*/


/*while {
   /*agregarAmigo()  add*/
}
*/

   /*if (maximaCantidadNombres >6) {
        alert ('No puedes ingresar más nombres')
   }*/

/*breack; ¿?*/
