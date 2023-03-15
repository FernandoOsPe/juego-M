let ataqueJugador 
let ataquePC

let boton_monster_jugador = document.getElementById("boton_monster")
    boton_monster_jugador.addEventListener("click", selec_m_j)

let botonAire = document.getElementById("boton_aire")
    botonAire.addEventListener("click" , ataqueAire)
let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click" , ataqueFuego)
let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click" , ataqueTierra)

function ataqueAire() {
    ataqueJugador = "AIRE"
    ataqueEnemigo()
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueEnemigo()
}


function ataqueEnemigo() {
    let ataqueAleatorrio = aleatorio(1,3)

    if (ataqueAleatorrio == 1) {
        ataquePC = "AIRE"
    } else if (ataqueAleatorrio == 2) {
        ataquePC = "FUEGO"
    } else {
        ataquePC = "TIERRA"
    }  

    combate()
    
}

function combate() {
    if(ataqueJugador == ataquePC) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "AIRE" && ataquePC == "TIERRA") { 
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "FUEGO" && ataquePC == "AIRE") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "TIERRA" && ataquePC == "FUEGO") {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE") 
    }
    
}


function crearMensaje(resultado) {
    let seleccionarMensaje = document.getElementById("mensaje")
    let parrafo = document.createElement("p")
    parrafo.innerHTML =  "Tu monster ataco con " + ataqueJugador + ", el monter enemigo ataco con " + ataquePC + " - " + resultado 
    seleccionarMensaje.appendChild(parrafo)
}



function selec_m_j() {
    let inputTotumix = document.getElementById("totumix")
    let inputAmiwis = document.getElementById("amiwis")
    let inputGordobadoo = document.getElementById("gordobadoo")
    let spanMosterJudador = document.getElementById("monster_jugador")


    let seleccionj = (inputTotumix.checked) ? 
        spanMosterJudador.innerHTML = ("totumix") 
        : (inputAmiwis.checked) ? spanMosterJudador.innerHTML = ("amiwis")
        : (inputGordobadoo.checked) ? spanMosterJudador.innerHTML = ("gordobadoo")
        : alert ("selecciona un monster")  
    return seleccionj &&
        selecMascotaPc()

    // if (inputTotumix.checked) {
    //     spanMosterJudador.innerHTML = "Totumix🌪️"
    // } else if (inputAmiwis.checked) {
    //     spanMosterJudador.innerHTML = "Amiwis🔥"
    // } else if (inputGordobadoo.checked) {
    //      spanMosterJudador.innerHTML = "gordobadoo🌱"
    // } else {
    //     alert ("selecciona tu monster")
    // }
    
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
 

function selecMascotaPc() {
    let mosnterAleatorio = aleatorio(1,3)
    let spanMonsterPc = document.getElementById("monster_pc")
    let seleccionM = (mosnterAleatorio == 1) ? 
    spanMonsterPc.innerHTML = "totumix" 
    : (mosnterAleatorio == 2) ? spanMonsterPc.innerHTML = "amiwis"
    : spanMonsterPc.innerHTML = "gordobadoo"
    return seleccionM

     

    // if (mosnterAleatorio == 1) {
    //     spanMonsterPc.innerHTML = "Totumix🌪️"
    // } else if (mosnterAleatorio == 2) {
    //     spanMonsterPc.innerHTML = "Amiwis🔥"
    // } else {
    //     spanMonsterPc.innerHTML = "gordobadoo🌱"
    // } 

}





