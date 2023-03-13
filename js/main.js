export default {
    el: document.querySelector("#nombre"),
    value(){
        return this.el.innerHTML;
    },
    setValue(CATa,CATb){
        let hipotenusa=0;
        hipotenusa = Math.sqrt(Number(CATa)) +Math.sqrt(Number(CATb))
        this.el.insertAdjacentText("beforeend", `La Hipotenusa es de ${hipotenusa.toFixed(2)}`);
    },
}