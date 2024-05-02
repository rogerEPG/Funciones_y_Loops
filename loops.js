// PRIMERO_______________________
// 1.1
for(let i = 0 ; i <= 10; i++){
    console.log(i)
}

// 1.2
let j=0
while(j <= 10){
    console.log(j)
    j++
}

// 1.3
for(let x = 83; x >= 24; x--){
    console.log(x)
}
// 1.4
let s = 83
while(s >= 24){
    console.log(s)
    s--
}

// SEGUNDO____________________
let num = 2
for(let y = 0; y <= 10; y++){
    console.log(`${num} x ${y} = ${num*y}`)
}

// TERCERO_____________________
for(let k = 0; k<=10; k++){
    console.log(`${k} ${k**2} ${k**3}`)
}

// CUARTO______________________
let suma = 0
for(let z = 0; z <= 10; z++){
    suma += z
    console.log(suma)
}
 
// QUINTO______________________
// 5.1
for(let f = 0; f <= 100; f++){
    if(f >= 10 && f <= 23){
        console.log(f)
    } else if(f >= 56 && f <= 62){
        console.log(f);
    }
}

// 5.2
for(let u = 0; u <= 100; u++){
    if(u % 5 === 0 || u % 7 === 0){
        console.log(u);
    }
}

// SEXTO__________________________
let number = prompt("ingrese un numero")
let par = 0
let impar = 0
for(let m = 0; m <= number; m++){
    if(m % 2 === 0){
        par += m
    } else if(m % 2 !== 0){
        impar += m
    }
}

console.log(`la suma de todos los numeros pares del 0 al <<${number}>> es <<${par}>>, y
    la suma de todos los numeros impares del 0 al <<${number}>> es <<${impar}>>`)

// SEPTIMO___________________________
for(let h = ""; h.length <= 7; h+="#"){
    console.log(h)
}

// OCTAVO_____________________________


let filas = ["      ##      ", "     ####     ", "    ######    ", "   ########   ", "  ##########  ",
 " ############ ", "##############", " ############ ", "  ##########  ", "   ########   ", "    ######    ",
 "     ####     ", "      ##      "]

for(let i=0; i<=filas.length -1; i++){
    console.log(filas[i])
}
