let numeros=[];
for (let i = 0; i < 100; i++) {
    numeros.push(i+1);
}
 
let porDos = numeros.map(function(numero){
    console.log(numero)
 return numero  * 2
});

console.log(porDos)

let MayorCinco = porDos.filter( numero => numero != 5)
console.log(MayorCinco);

let numeroMayor = porDos.find( numero => numero > 10);
console.log(numeroMayor);

const pokemones = [
 { nombre: 'pikachu', poder: 12 },
 { nombre: 'bulbasaur', poder: 6 },
 { nombre: 'charizard', poder: 19 },
 { nombre: 'squirtle', poder: 3 },
 { nombre: 'metwo', poder: 6 }, 
]

const mayorPoder = pokemones.filter( pokemones => pokemones.poder > 10);
console.log(mayorPoder);



/*let numerosPar=[];
for (let i = 0; i < 100; i++) {
    numerosPar.push(i++);
}
console.log(numerosPar)*/