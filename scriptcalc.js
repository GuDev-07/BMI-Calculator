function calcularIMC(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    
    if (!peso || isNaN(peso) || !altura || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "Insira os numeros antes de conferir por favor!";
        return;
    }

    
    const calculo = peso / (altura * altura);
    let resultado = "IMC: " + calculo.toFixed(2) + "<br>";

    

    if (calculo < 18.5){
        resultado += "ABAIXO DO PESO!";
    }
    
    else if (calculo >= 18.5 && calculo < 25){
        resultado += "PESO NORMAL";
    }
    
    else if (calculo >= 25 && calculo < 30){
        resultado += "ACIMA DO PESO";
    }
    
    else if (calculo >= 30 && calculo < 40){
        resultado += "OBESO";
    }
    
    else{
        resultado += "OBESIDADE GRAVE";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function cancelar() {
    // Limpa os campos de entrada
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';

    // Limpa a mensagem de resultado
    document.getElementById("resultado").innerHTML = '';
}

