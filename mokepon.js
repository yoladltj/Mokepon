let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciarJuego = document.getElementById("boton-reiniciar")
    sectionReiniciarJuego.style.display = "none"

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click" , reiniciarJuego)
}

//SELECCION DE MASCOTAS


function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let sectionSeleccionarMascota = document.getElementById("seleccionar-macota")
    sectionSeleccionarMascota.style.display = "none"

    let inputIgnis = document.getElementById("ignis")
    let inputMarina = document.getElementById("marina")
    let inputGaia = document.getElementById("gaia")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputIgnis.checked){
        spanMascotaJugador.innerHTML = "ignis"
        
    } else if(inputMarina.checked){
        spanMascotaJugador.innerHTML = "marina"
        
    } else if(inputGaia.checked){
        spanMascotaJugador.innerHTML = "gaia"
        
    } else {
        alert("NO SELECCIONASTE NADA AÚN")
    } 

    seleccionarMascotaEnemigo() 
    
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "ignis"

    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "marina"

    } else (mascotaAleatorio == 3)
        spanMascotaEnemigo.innerHTML = "gaia"
}

//ATAQUES DEL JUGADOR 

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()

}


function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()

}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()

}

//ATAQUES DEL ENEMIGO

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else if(ataqueAleatorio == 3)
        ataqueEnemigo = "TIERRA"
        
    combate()
}

function combate(){
      
    let spanvidasJugador = document.getElementById("vidas-jugador")
    let spanvidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo) {
        spanvidasJugador.innerHTML = vidasJugador
        spanvidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    } else{
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
        crearMensaje("PERDISTE")
    }
    
    revisarVidas()
    
}

function revisarVidas(){

        if (vidasJugador == 0){
            crearMensajeFinal("que pena...PERDISTE :(")

     } else if(vidasEnemigo == 0){
        crearMensajeFinal("¡FELICIDADES! GANASTE :D")

     }

     
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}


function crearMensajeFinal(resultadoFinal){

    let sectionMensajes = document.getElementById("resultado")
    
    sectionMensajes.innerHTML=resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciarJuego = document.getElementById("boton-reiniciar")
    sectionReiniciarJuego.style.display = "flex"
}

function reiniciarJuego(){
    location.reload()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load" , iniciarJuego)