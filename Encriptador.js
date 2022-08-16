// texto a encriptar
function encriptar(text) {
    let vocales = ['a', 'e', 'i', 'o', 'u'],
        codigo = ['ai', 'enter', 'imes', 'ober', 'ufat'],
        arr = Array.from(text)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (arr[i] === vocales[j]) {
                arr[i] = codigo[j]
            }
        }
    }
    arr = arr.toString().replace(/,/g, '')

    return arr
}

// texto a desencriptar

function decriptar(text) {
    let vocales = ['a', 'e', 'i', 'o', 'u']

    text = text.replace(/ai/g, vocales[0])
    text = text.replace(/enter/g, vocales[1])
    text = text.replace(/imes/g, vocales[2])
    text = text.replace(/ober/g, vocales[3])
    text = text.replace(/ufat/g, vocales[4])

    return text
}

const texto = document.querySelector('.entrada textarea'),
    boton1 = document.querySelector('.entrada .encriptar'),
    boton2 = document.querySelector('.entrada .desencriptar'),
    targeta = document.querySelector('main .salida .targeta'),
    copyBoton = document.querySelector('.salida .targeta button')


boton1.addEventListener('click', () => {
    targeta.children[0].style.display = 'none'
    targeta.children[1].style.display = 'none'
    targeta.children[3].style.visibility = 'visible'
    
    targeta.children[2].textContent= ''
    targeta.children[2].style.fontSize = '24px'
    targeta.children[2].style.backgroundColor = 'white'
    targeta.children[2].style.borderRadius = '20px'
    targeta.children[2].textContent = encriptar(texto.value)
    targeta.children[2].style.padding = '30px 30px 120px 30px'
    
    texto.value = ''
})

boton2.addEventListener('click', () => {
    targeta.children[0].style.display = 'none'
    targeta.children[1].style.display = 'none'
    targeta.children[3].style.display = 'block'
    
    targeta.children[2].textContent= ''
    targeta.children[2].style.fontSize = '24px'
    targeta.children[2].style.backgroundColor = 'white'
    targeta.children[2].style.padding = '30px'
    targeta.children[2].textContent = decriptar(texto.value)
    targeta.children[2].style.padding = '30px 30px 120px 30px'

    
    texto.value = ''
})

copyBoton.addEventListener('click', () => {
    navigator.clipboard.writeText(targeta.children[2].textContent)
})




