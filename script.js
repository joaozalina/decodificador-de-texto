const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


//As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar (stringEncriptada) {

    let matrixCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++ ) {
        if(stringEncriptada.includes(matrixCodigo[i][0])) {
            
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1]);

        }
    }
    return stringEncriptada;
}





function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar (stringDesencriptada) {

    let matrixCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++ ) {
        if(stringDesencriptada.includes(matrixCodigo[i][1])) {
            
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}


function copiarMensagem() {
    var pegarTexto = document.getElementById("mensagem__para__copiar");
    pegarTexto.select();
    pegarTexto.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(pegarTexto.value);
    alert("Copiada a mensagem: " + pegarTexto.value);
}
