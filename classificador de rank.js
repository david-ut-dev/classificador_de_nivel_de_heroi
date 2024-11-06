let save = "receptaculo de raisenberg , 7563";
let resultado = [];

save.split(";").forEach(item => {
    let [nome, quantidade] = item.split(",");
    quantidade = parseInt(quantidade);

    if (quantidade < 1000) {
        resultado.push(`${nome.trim()}: ferro`);
    } else if (quantidade >= 1001 && quantidade <= 2000) {
        resultado.push(`${nome.trim()}: bronze`);
    } else if (quantidade >= 2001 && quantidade <= 5000) {
        resultado.push(`${nome.trim()}: prata`);
    } else if (quantidade >= 5001 && quantidade <= 7000) {
        resultado.push(`${nome.trim()}: ouro`);
    } else if (quantidade >= 7001 && quantidade <= 8000) {
        resultado.push(`${nome.trim()}: platina`);
    } else if (quantidade >= 8001 && quantidade <= 9000) {
        resultado.push(`${nome.trim()}: Ascendente`);
    } else if (quantidade >= 9001 && quantidade <= 10000) {
        resultado.push(`${nome.trim()}: imortal`);
    } else {
        resultado.push(`${nome.trim()}: radiante`);
    }
});

resultado.forEach(item => console.log(`O Herói de nome ${item.split(":")[0]} está no nível de ${item.split(":")[1].trim()}`));
