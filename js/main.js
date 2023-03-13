export default {
    el: document.querySelector("#nombre"),
    area: document.querySelector("#areaLat"),
    vol: document.querySelector("#volumen"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(radio, altura){
        let areaLat=0;
        let volumen=0;
        let pi = 3.1415;

        areaLat = 2 * pi * radio * altura;
        volumen = pi * Math.pow(radio,2) * altura;

        this.el.insertAdjacentText("beforebegin", `Altura=${altura}   Radio=${radio} `);
        this.area.insertAdjacentText("beforeend", `El área lateral del cilindro es de ${areaLat.toFixed(2)}`);
        this.vol.insertAdjacentText("beforeend", `El volumen del cilindro es de ${volumen.toFixed(2)}`);
    },
}