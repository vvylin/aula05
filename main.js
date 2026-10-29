// funções identificador() {}
function ola(){
    console.log("Seja bem vindo a sala de aula!")
}
//
//
//
//
//


function fnValidarIdade(){
    var idade = document.getElementById("idadeUsuario").value 

    console.log(idade)

    if(idade >= 18){
        alert("Você pode dirigir!")
    } else { 
        alert("VOCÊ NÃO PODE DIRIGIR!")
    }
}


function fnValidarVogal() {


var vogal = document.getElementById("vogalUsuario").value

switch (vogal) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        alert("Você digitou uma vogal!")
    break;

    default:
        alert("Você digitou uma consoante!")
        break; 
    }    
    
}