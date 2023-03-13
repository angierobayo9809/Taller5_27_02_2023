export default {
    el: document.querySelector("#nombre"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(num1, num2){

        let minimo = Math.min(num1, num2);
        let maximo = Math.max(num1, num2);

        this.el.insertAdjacentText("beforeend", `${minimo} , ${maximo}`);
    },
}