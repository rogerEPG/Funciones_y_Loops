// PRIMERO___________________
let length = prompt("Ingrese el largo del rectangulo")
let width = prompt("ingrese el ancho del resctangulo")

function area(l=5, w=3){
    return console.log("Area del rectangulo: "+l*w)
}

area(length, width)

// SEGUNDO_____________________
let celcius =prompt("ingrese grados celcius")

function fahrenheit(c){
    return console.log(c+" grados Celcius = "+((c*9/5) + 32)+" grados Fahrenheit")
}

fahrenheit(celcius)

// TERCERO________________________
let minimum = parseInt(prompt("ingrese el numero minimo"))
let maximum = parseInt(prompt("ingrese el numero maximo"))

function random(min,max){
    let result = Math.random() * (max - min) + min
    result = result.toFixed(2)
    return console.log(result)
}

random(minimum, maximum)


// CUARTO____________________________

let radio = prompt("ingrese el radio de un circulo")

function circulo(r){
    let area = 3.14 * r**2
    return console.log("Area: "+area+" radio: "+r)
}

circulo(radio)


//QUINTO
let numberChildren = ["uno", "dos", "tres", "cuatro", "cinco"]
let partnerName = ["Angie", "Valentina", "Carlota", "Joanna", "Jessica"]
let nameCity = ["París", " Tokio", "Budapest", "Chicago", "Londres"]
let work = ["Desarrollador", "Carnicero", "Guarda espalda", "Piloto de rally", "Aviador"]

function tellTheFuture(numberChildren, partnerName, nameCity, work  ){
    let chil = Math.floor(Math.random() * numberChildren.length)
    let part = Math.floor(Math.random() * partnerName.length)
    let city = Math.floor(Math.random() * nameCity.length)
    let wk = Math.floor(Math.random() * work.length)
    return console.log(`Trabajaras en <<${nameCity[city]}>>, trabajando como <<${work[wk]}>>, y
     tendras <<${numberChildren[chil]}>> hijos con <<${partnerName[part]}>>`)
}

tellTheFuture(numberChildren, partnerName, nameCity, work)


