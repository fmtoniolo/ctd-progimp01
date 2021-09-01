/* Grupo 7:
Felipe Toniolo
Evandro Mariano
Mozarth Spier
Alison Trennepohl
Henrique Nunes */

//opção 1: pipoca - 10s
//opção 2: macarrão - 8s
//opção 3: carne - 15s
//opção 4: feijão - 12s
//opção 5: brigadeiro - 8s

function microondas (prato, tempoUsuario) {
    switch (prato) {
        case "pipoca":
        console.log(seTempo(tempoUsuario, 10));
        break;
        case "macarrão":
        console.log(seTempo(tempoUsuario, 8));
        break;
        case "carne":
        console.log(seTempo(tempoUsuario, 15));
        break;
        case "feijão":
        console.log(seTempo(tempoUsuario, 12));
        break;
        case "brigadeiro":
        console.log(seTempo(tempoUsuario, 8));
        break;
        default:
            console.log("Prato inexistente");
    }
}

function seTempo(tempoUsuario, tempoAlimento){
    if (tempoUsuario < tempoAlimento) {
        return "Tempo insuficiente";
    }
    else if (tempoUsuario < (tempoAlimento*2)){
        return "Prato pronto, bom apetite!!!";
    }
    else if (tempoUsuario < (tempoAlimento*3)) {
        return "A comida queimou!";
    }
    else return "KABUMM!";
}

//modelo: microondas("feijão", 10)
microondas()