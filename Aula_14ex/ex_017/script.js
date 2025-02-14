function gerartabuada() {
    var numero = document.getElementById('txtn')
    var res = document.getElementById('res')
    if(numero.value.length == '') {
        alert('[ERRO] Verifique os números')
    } else {
        var n = Number(numero.value)
        res.innerHTML = ''
        for(c=1; c<=10; c++) {
          /*res.innerHTML += `${n} X ${c} = ${n*c}<br> `;*/
          let item = document.createElement('option')
          item.text = `${n} X ${c} = ${n*c}`
          item.value = `res${c}`
          res.appendChild(item)
        }    
    }
}

