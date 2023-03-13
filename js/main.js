export default {
    el: document.querySelector("#nombre"),
    tabla: document.querySelector("#tabla"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(nombre, qtahrs){
        let valorHr=30000;
        let NominaObrero=valorHr*qtahrs;

        this.tabla.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${nombre}</td>
                <td>${qtahrs}</td>
                <td>${NominaObrero}</td>
            </tr>`);

        return NominaObrero;
    },
    lastRow(salarioTotal)
    {
        this.tabla.insertAdjacentHTML("beforeend", `
            <tr>
                <td colspan=2>NOMINA TOTAL</td>
                <td>${salarioTotal}</td>
            </tr>`);
    }
}