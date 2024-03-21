const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value ='';
    mensaje.style.backgroundImage = 'none'
}




function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    console.log(stringEncriptada);
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
  
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'],['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
    }
    console.log(stringDesencriptada);
    return stringDesencriptada
}

function copiarTexto() {
    let textoACopiar = document.getElementById("texto_a_copiar");
    textoACopiar.select();
    document.execCommand("copy");
   

}

// function copy() {
//     let copyText = document.querySelector("#input");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector("#copy").addEventListener("click", copy);