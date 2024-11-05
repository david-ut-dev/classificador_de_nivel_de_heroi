let save = ("receptaculo de raisenberg" , 7563).split(",")
let resultado = []

save.array.forEach(element => {

    let [nome, quantidade] = item.split(",");
    quantidade = parseInt(quantidade);

    if (quantidade < 1000) {
        resultado.push(`${nome}: ferro`)
    } else if (quantidade >1001 && quantidade<2000){
        resultado.push(`${nome}: bronze`)
    }else if (quantidade>2001 && 5000<quantidade){
        resultado.push(`${nome}: prata`)
    }else if (quantidade >5001 && 7000<quantidade){
        resultado.push(`${nome}: ouro`)
    }else if (quantidade>7001 && 8000<quantidade){
        resultado.push(`${nome}: platina`)
    }else if (quantidade>8001 && 9000<quantidade){
        resultado.push(`${nome}: Ascendente`)
    }else if (quantidade>9001 && 10000<quantidade){
        resultado.push(`${nome}: imortal`)
    }else (quantidade>10001){
        resultado.push(`${nome}: radiante`)
    }
   
});
console.log("O Herói de nome" + save [0] +" está no nível de" + save [1])
