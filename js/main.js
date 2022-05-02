function Bin2Iker() {
    var binario = document.getElementById("binario").value
    var parrafo = document.getElementById("decimal")
    var resultado = parseInt(binario, 2);
    parrafo.innerHTML = resultado

    for (var i = 0; i < binario.length; i++) {
        if ((binario[i] !== '1') && (binario[i] !== '0')) {
            document.getElementById("decimal").innerHTML = 'ERROR only 0 and 1';
            error.classList.add("error-ikerC")
            return;
        }
        if (document.getElementById("binario") === document.hasFocus()) {
            error.classList.remove("error-ikerC");
        }
        error.classList.remove("error-ikerC");

    }
    if (parrafo.innerHTML == "NaN") {
        parrafo.innerHTML = "Esperando Iker Esta pensando mucho...."
    }

}