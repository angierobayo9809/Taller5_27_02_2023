export default {
    el: document.querySelector("#nombre"),
    value(){
        return this.el.innerHTML;
    },
    setValue(){
        let respuesta="";
        let suma=0;
        for(let x = 1; x <=10; x++){
            respuesta += x +" + ";
            suma +=x;
        }

        this.el.insertAdjacentText("beforeend", ` ${respuesta.substring(0,respuesta.length-2) +" = "+suma}`);
    },
}