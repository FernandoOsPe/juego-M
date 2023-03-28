let ataqueJugador 
let ataquePC
let vidasJugador = 3
let vidasPC = 3

let sectionOcultarAtaques = document.getElementById("selec_atk")
    sectionOcultarAtaques.style.display = "none"

let sectionReiniciar = document.getElementById("boton_reset")
    sectionReiniciar.style.display = "none"
    

let boton_monster_jugador = document.getElementById("boton_monster")
    boton_monster_jugador.addEventListener("click", selec_m_j)

let botonAire = document.getElementById("boton_aire")
    botonAire.addEventListener("click" , ataqueAire)
let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click" , ataqueFuego)
let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click" , ataqueTierra)

let botonReiniciar = document.getElementById("boton_reset")
    botonReiniciar.addEventListener("click", reiniciarJuego)


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
    let spanVidasJugador = document.getElementById("vidas_jugador")
    let spanVidasPc = document.getElementById("vidas_pc")


    if(ataqueJugador == ataquePC) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "AIRE" && ataquePC == "TIERRA") { 
        crearMensaje("GANASTE")
        vidasPC--
        spanVidasPc.innerHTML = vidasPC
    } else if(ataqueJugador == "FUEGO" && ataquePC == "AIRE") {
        crearMensaje("GANASTE")
        vidasPC--
        spanVidasPc.innerHTML = vidasPC
    } else if(ataqueJugador == "TIERRA" && ataquePC == "FUEGO") {
        crearMensaje("GANASTE")
        vidasPC--
        spanVidasPc.innerHTML = vidasPC
    } else {
        crearMensaje("PERDISTE") 
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    cantidadVidas()  
}

function cantidadVidas() {
    if (vidasPC == 0) {
        crearFinal("FELICIDADES, GANASTE!👌")
    } else if (vidasJugador == 0) {
        crearFinal("LO SIENTO, PERDISTE😒")
    }
}



function crearMensaje(resultado) {
    let seleccionarMensaje = document.getElementById("resultados")
    let ataquesDelPc = document.getElementById("ataques_del_pc")
    let ataqueDelJugador = document.getElementById("ataques_del_jugador")

   
    let nuevoAtaqueDelPc = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    
    seleccionarMensaje.innerHTML = resultado
    nuevoAtaqueDelPc.innerHTML = ataquePC
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador

    
    ataquesDelPc.appendChild(nuevoAtaqueDelPc)
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
}


function crearFinal(resultadoFinal) {
    let seleccionarMensaje = document.getElementById("resultados")

    seleccionarMensaje.innerHTML =  resultadoFinal
        
    let botonAire = document.getElementById("boton_aire")
         botonAire.disabled = true
    let botonFuego = document.getElementById("boton_fuego")
        botonFuego.disabled = true
    let botonTierra = document.getElementById("boton_tierra")
        botonTierra.disabled = true

        let sectionReiniciar = document.getElementById("boton_reset")
        sectionReiniciar.style.display = "block"
}



function selec_m_j() {
    let sectionOcultarMonster = document.getElementById("selec_moster")
        sectionOcultarMonster.style.display = "none"

    let sectionOcultarAtaques = document.getElementById("selec_atk")
        sectionOcultarAtaques.style.display = "flex"

    let inputTotumix = document.getElementById("totumix")
    let inputAmiwis = document.getElementById("amiwis")
    let inputGordobadoo = document.getElementById("gordobadoo")
    let spanMosterJudador = document.getElementById("monster_jugador")


    let seleccionj = 
         (inputTotumix.checked) ? spanMosterJudador.innerHTML = ("totumix") 
        : (inputAmiwis.checked) ? spanMosterJudador.innerHTML = ("amiwis")
        : (inputGordobadoo.checked) ? spanMosterJudador.innerHTML = ("gordobadoo")
        : alert ("selecciona un monster")  
    return seleccionj && 
        selecMonstertaPc() 



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


function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
 

function selecMonstertaPc() {
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





