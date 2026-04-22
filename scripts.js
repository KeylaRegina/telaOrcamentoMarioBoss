

/*
variaveis
espaço de memoria que vc reserva e pode guardar o que quiser la dentro
3 jeitos de criar uma varial
-var - jeito antigo
-let - pode alterar o valor depois
-const - constante nao altera.

Função = um trecho de codigo que só é executado, quando é chamado*/

const form= document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}