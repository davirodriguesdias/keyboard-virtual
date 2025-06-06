var tela = document.querySelector('div#view')


function digitar(par){

    tela.innerHTML += par

}

function space() {
    tela.innerHTML += '   '
}

function back() {

    var tela = document.querySelector('div#view').innerHTML

    document.querySelector('div#view').innerHTML = tela.substring(0,tela.length -1)
}

function bk() {
    tela.innerHTML += '<br>'
}