function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor,digite um número!')
    } else {
        var n = Number(num.value) // var n,recebe o numero escolhido e validara ele como numero e não texto.
        var c = 1 // variavel contadora
        tab.innerHTML = '' // para limpar a tela depois do comando executado
        while (c <= 10) {
            var item = document.createElement('option') // para criar o select aqui sem ter que colocar no html
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) // sem isso,a tabuada não aparece na tela
            c++ // nunca esquecer de incrementar

        }
    }

}