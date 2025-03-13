let listaDeAmigos = [];
let sorteoRealizado = false;

const asignarTextoElemento = (elemento, texto) => {
    document.querySelector(elemento).innerHTML = texto;
};

const agregarAmigo = () => {
    if (sorteoRealizado) return alert("El sorteo ya se realizó. Reinicia para agregar nuevos amigos.");
    
    let nombresDeUsuario = document.getElementById('amigo');
    let nombre = nombresDeUsuario.value.trim();
    
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/.test(nombre)) return alert("Ingresa un nombre válido con al menos 3 letras.");
    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) return alert("Este nombre ya fue ingresado.");
    
    listaDeAmigos.push(nombre);
    nombresDeUsuario.value = "";
    actualizarLista();
};

const actualizarLista = () => {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = listaDeAmigos.map(amigo => `<li>${amigo}</li>`).join('');
    lista.style.display = listaDeAmigos.length ? "grid" : "none";
};

const sortearAmigo = () => {
    if (listaDeAmigos.length < 2) return alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
    
    let amigoSeleccionado = listaDeAmigos.splice(Math.floor(Math.random() * listaDeAmigos.length), 1)[0];
    listaDeAmigos = [];
    actualizarLista();
    asignarTextoElemento('h2', `El amigo secreto es: <strong>${amigoSeleccionado}</strong>`);
    sorteoRealizado = true;
};

const reiniciarJuego = () => {
    listaDeAmigos = [];
    sorteoRealizado = false;
    document.getElementById("listaAmigos").innerHTML = "";
    asignarTextoElemento('h2', "");
    document.getElementById("amigo").value = "";
};
