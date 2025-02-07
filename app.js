// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []; //Creamos la lista vacia
let numeroSorteo=0; //Inicializamos el sorteo en 0
function agregarAmigo(){ 
    let nombre = document.getElementById('amigo').value;
    if (nombre == ""){ //Verificamos que el nombre sea correcto
        alert("Ingresa un nombre");
    } else{
        nombres.push(nombre); //Ingresamos el nombre en la lista
        mostrarLista();
        document.getElementById('amigo').value = ""; //Reiniciamos el cuadro de texto
    }
}
function mostrarLista(){
    const listaElementos = document.getElementById('listaAmigos'); 
    listaElementos.innerHTML = "";

    nombres.forEach(nombre =>{ //Uso de la funcion flecha para iterar la lista y mostrar los datos
        const li =document.createElement('li');
        li.textContent=nombre;
        listaElementos.appendChild(li);
    });
}
function sortearAmigo(){
    numeroSorteo= Math.floor(Math.random()*nombres.length); //Usamos un numero aleatorio entre 0 y la longitud de la lista
    const ganador = document.getElementById('resultado');
    ganador.innerHTML="";
    const titulo = document.createElement('h1');
    titulo.textContent="El nombre ganador es: "+nombres[numeroSorteo];
    ganador.appendChild(titulo);
}