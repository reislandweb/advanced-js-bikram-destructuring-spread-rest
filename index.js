//RESUELVE LOS EJERCICIOS AQUÍ

console.log("Hola");

console.log("**EJERCICIO 1 - Destructuring arrays - **");

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [ ,{name:nameAna, email:emailAna}] = empleados;
console.log(nameAna, emailAna);

console.log("**EJERCICIO 2**");

let [{email:emailLuis}] = empleados;
console.log(emailLuis);

console.log("**EJERCICIO 3**");
//console.log(maximaManana);

let { today:maximaHoy, tomorrow:maximaManana } = HIGH_TEMPERATURES;
console.log(`Temperatura maxima de hoy: ${maximaHoy}`);
console.log(`Temperatura maxima de mañana: ${maximaManana}`);

console.log("**EJERCICIO 5 - Spread/Rest -**");

function sumEveryOther (...number) {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total += number[i];
    }
    return total;
}
console.log(sumEveryOther(1,48));

console.log("**EJERCICIO 6 **");

function addOnlyNums(...number) {
    return number.reduce((sum, value) => {
        return typeof value === "number" ? sum + value : sum;
    },0);
}
console.log(addOnlyNums(1, "perro", 9, "gato", 4));

console.log("**EJERCICIO 7 **");

function countTheArgs (...number) {
    return number.length;
}
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

console.log("**EJERCICIO 8 **");

function combineTwoArrays (arr1, arr2) {

    return [ ...arr1, ...arr2];
}
console.log(combineTwoArrays(
    [ "Francia", "Italia", "Brasil"],
    ["Zaragoza", "Barcelona", "Madrid"]
));

console.log("**EJERCICIO 9 **");

function onlyUniques(...arr) {
    let resultado = arr.filter((num, index) => {
        return arr.indexOf(num) === index;
    })
    return resultado;
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

console.log("**EJERCICIO 10 **");

function combineAllArrays(...arr) {
    return arr.reduce((acc, curr) => [...acc, ...curr]);
}
console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1],[4, 2, 1],[3, 6, 7, 8]));

console.log("**EJERCICIO 11 **");

function sumAndSquare(...n) {
    let suma = 0;
    for (let i = 0; i < n.length; i++) {
        suma += n[i]**2;
    }
    return suma;
}
console.log(sumAndSquare(2,6,4));



//Echo por Erick
function combineAllArrays(...args){
    let total =[];
    for (let array of args){
      total.push(...array);
    } return total;
};
console.log(combineAllArrays([3, 6, 7, 8], [2, 7,'queso', 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));