var a = document.getElementById('area')
var b = document.getElementById('area1')
var c = document.getElementById('area2')

a.addEventListener('click', clicar)
a.addEventListener('mouseout', sair)
function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'grey'
}
function sair() {
    a.window.alert('Você clicou no 1º botão!')
    a.style.background = 'lightgrey'
}

b.addEventListener('click', clicar)
b.addEventListener('mouseout', sair)
function clicar() {
    b.window.alert('Você clicou no 2º botão!')
    b.style.background = 'grey'
}
function sair() {
    b.style.background = 'lightgrey'
}

c.addEventListener('click', clicar)
c.addEventListener('mouseout', sair)
function clicar() {
    c.window.alert('Você clicou no 3º botão!')
    c.style.background = 'grey'
}
function sair() {
    c.style.background = 'lightgrey'
}