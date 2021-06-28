function microwave(comida, tempo) {
switch (comida) {
    case 'Macarrão':
    case 'Brigadeiro':
        if (tempo < 8) {
            console.log('Tempo insuficiente');
        }
        else if (tempo >= 24) {
            console.log('Kabum');
        }
        else if (tempo >= 16) {
            console.log('A comida Queimou');
        }
        else {
            console.log('Comida pronta');
        }
        break;

    case 'Pipoca':
        if (tempo < 10) {
        console.log('Tempo insuficiente');
}
        else if (tempo >= 30) {
        console.log('Kabum');
}
        else if (tempo >= 20) {
        console.log('A comida Queimou');
}
        else {
        console.log('Comida pronta');
}
        break;
    case 'Feijão':
        if (tempo<12){
                console.log('Tempo insuficiente');
            }
        else if (tempo >= 36) {
                console.log('Kabum');
            }
        else if (tempo >= 24) {
                console.log('A comida Queimou');
            }
        else {
                console.log('Comida pronta');
            }
        break;

    case 'Carne':
        if (tempo < 15) {
            console.log('Tempo insuficiente');
        }
        else if (tempo >= 45) {
            console.log('Kabum');
        }
        else if (tempo >= 30ls) {
            console.log('A comida Queimou');
        }
        else {
            console.log('Comida pronta');
        }
        break;

    default: { 
        console.log('Prato Inexistente');
        }
    }
}

microwave ('Brigadeiro', 8)
microwave ('Macarrão', 8)
microwave ('Brigadeiro', 7)
microwave ('Macarrão', 16)
microwave ('Brigadeiro', 25)
microwave ('Pipoca', 11)
microwave ('Feijão', 25)
microwave ('Carne', 16)
microwave ('Sopa', 8)
