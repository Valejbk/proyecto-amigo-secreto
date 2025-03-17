let amigoSecreto = [];

function agregarAmigo() {
  let amigos = document.getElementById("amigo").value;
  if (amigos.trim() === "") {
    alert("Ingresar un nombre válido");
  } else {
    amigoSecreto.push(amigos);
    document.querySelector("#amigo").value = "";
    mostrarAmigos();
  }
  console.log(amigos);
}
function mostrarAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigoSecreto.length; index++) {
    const element = amigoSecreto[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  if (amigoSecreto.length != 0) {
    let amigoSeleccionado = Math.floor(Math.random() * amigoSecreto.length);
    console.log(amigoSeleccionado);
    alert("El ganador es: " + amigoSecreto[amigoSeleccionado]);
  } else{
    alert('Debe añadir amigos antes del sorteo');
  }
}
