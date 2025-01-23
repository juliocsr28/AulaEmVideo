function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verfique as informações novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'velho.jpg')
            } else {
                //Se erguer os braços Deus puxa.
                img.setAttribute('src', 'mumia.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'velha.jpg')
            } else {
                //Se erguer os braços Deus puxa.
                img.setAttribute('src', 'mumia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<p> <\p>`
        if (idade >100) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos. <p>Se erguer os braços Deus puxa<\p>`
        }
        res.appendChild(img)  
    }
}