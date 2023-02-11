function mostrar(){
   
    var data = new Date()
    var anoAtual = data.getFullYear()
    var mesAtual = data.getMonth() + 1
    
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var mes = document.getElementById('txtmes')


    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        alert(" [ERRO] Verifique os dados e tente novamente! ")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (mesAtual < Number(mes.value)) {
            idade = idade - 1
        }
        
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src' , 'bebe-m.png')
            } else if (idade < 25) {
                // jovem 
                img.setAttribute('src' , 'jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src' , 'adulto-m.png') 
            }else  {
                // idoso 
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src' , 'bebe-f.png')
            } else if (idade < 25) {
                // jovem 
                img.setAttribute('src' , 'jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src' , 'adulto-f.png') 
            }else  {
                // idoso 
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} de ${idade} anos`
        // Adicionar img abaixo de #res
        res.appendChild(img)
    }

}