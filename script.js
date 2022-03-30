function exibirLetras(value) {
    const numerosLetras = document.getElementById('numerosLetras');

    if(value.checked === true){
        numerosLetras.style.display = "flex";
    }else{
        numerosLetras.style.display = "none";
    }

}j

function exibirPalavras(value) {
    const numerosPalavras = document.getElementById('numerosPalavras');

    if(value.checked === true){
        numerosPalavras.style.display = "flex";
    }else{
        numerosPalavras.style.display = "none";
    }

}

function contarLetrasPalavras(area) {
    const numerosLetras = document.getElementById('numerosLetras');
    const numerosPalavras = document.getElementById('numerosPalavras');

    const resultadoLetras = area.value.length;
    let resultadoPalavras = area.value.split(' ').length;
    
    if(area.value === ""){
        resultadoPalavras = 0;
    }

    
    numerosLetras.innerHTML = `${resultadoLetras} letras`; 
    numerosPalavras.innerHTML = `${resultadoPalavras} palavras`;

}


