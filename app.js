import main from './js/main.js'
let salarioTotal =0;
for (let x = 1; x <= 3; x++){
    let nombre = prompt("Ingrese el nombre del obrero");
    let qtahrs = prompt("Ingrese la cantidad de horas trabajadas");

    salarioTotal +=  main.setValue(nombre, qtahrs);
    
}
main.lastRow(salarioTotal);