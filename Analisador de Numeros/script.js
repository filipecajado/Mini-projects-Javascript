let num = document.getElementById('txtn')
let val = document.getElementById('selval')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }

}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
  
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let n = Number(num.value)

        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado `
        val.appendChild(item)
    } else {
       
        alert('Valor inválido ou valor já existe na Lista')           
        
    }
    num.value = ''
    num.focus( )
}

function maior(l) {
    let maior = 0
    for (let c = 0; c < l.length; c++) {

        if (l[c] > maior) {
            maior = l[c]
        }
    }

    return maior
}

function menor(l) {
    let menor = 1
    for (let c = 0; c < l.length; c++) {

        if (l[c] <= l[0]) {
            menor = l[c]
        }
    }
    
    return menor
}



function somar(l) {
    let soma = 0
    for (let c = 0; c < l.length; c++) {

        soma += Number(l[c])
    }
    
    return soma
}


function finalizar(){
    if (valores.length == 0){
        alert('Não possivel Finalizar com a Lista vazia')
    } else {
        alert('Finalizado com sucesso acompanhe os valores')

        res.innerHTML = `Ao todo temos ${valores.length} números Cadastrados<br>`

        res.innerHTML += `<br>O maior número adicionado é o ${maior(valores)}.<br>`

        res.innerHTML += `<br>O menor número adicionado é o ${menor(valores)}.<br>`

        res.innerHTML += `<br>A soma dos números adicionados é  ${somar(valores)}.<br>`

        res.innerHTML += `<br>A média dos números é ${somar(valores)/valores.length}.<br>`


    }

}