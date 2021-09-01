function podeSubir(altura, seAcompanhada) {
    if (altura >= 1.4 && altura < 2) {
        return "Vá lá e seja feliz";
    }
    else if (altura >= 1.2 && altura <= 1.4 && seAcompanhada == false) {
        return "Ok, passou perto, mas pode ir e ser feliz"
    }
    else if (altura < 1.2){
        return "Não adianta chorar, pode voltar pra casa"
    }
    else {
        return "Não acha que está grande demais para entrar no brinquedo?"
    }
}

console.log(podeSubir(1, true))

