const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    if(textArea.value=="" || textArea.value=='undefined'){
        alert("Ingrese una palabra para encriptar");
        return;
    }

    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado 
    textArea.value = "";
    mensaje.style.background = "none";        
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ei"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;    
}

function btnDesencriptar(){
    if(textArea.value=="" || textArea.value=='undefined'){
        alert("Ingrese una palabra para desencriptar");
        return;
    }

    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado 
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ei"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    if(mensaje.value=="" || mensaje.value=='undefined'){
        alert("Ingrese una palabra para encriptar");
        return;
    }

    /*textArea.value = mensaje.value;
    mensaje.value = "";    */

    mensaje.select();     
    document.execCommand('copy');
}
    
  
