const form = document.getElementById('campo')
//let formEValido = true;

form.addEventListener('submit', function(e) {

    e.preventDefault();
    
    const campoAinput = document.getElementById('campo-a')
    const campoBinput = document.getElementById('campo-b')

    const campoA = parseFloat(campoAinput.value)
    const campoB = parseFloat(campoBinput.value)

    const errorMessage = 'Faça novamente, seu valor é menor que o campo A'
    const mensagemSucesso = `Parabéns seu valor ${campoBinput.value} superou o valor ${campoAinput.value} do campo A`

    if (campoA < campoB) { 
        alert(mensagemSucesso)
        campoAinput.value = ' '
        campoBinput.value = ' '
    } 
    
    else {
        alert(errorMessage)
        campoAinput.value = ' '
        campoBinput.value = ' '
    }
})