let present = document.querySelector('#present')

let showPresent = (ev) => {
    let main = document.querySelector('.presentMode')
    let btn = ev.currentTarget
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let div = document.createElement('div')
    let shadowBox = document.querySelector('.shadowBox')

    p1.id = 'paragOne'
    p1.className = 'parag'
    p1.innerText = 'Uma simples lembrancinha mas de coração para lembra do nosso aniversário.'

    p2.id = 'paragTwo'
    p2.className = 'parag'
    p2.innerText = 'Parabéns Deizinha mutas felicidades, desejo tudo de bom para você minha companheira de aniversário.'

    p3.id = 'paragThree'
    p3.className = 'parag'
    p3.innerHTML = 'Espero que viva muitos mais anos aproveitando a vida e que nos conheçamos mais pra compartilhar bons momentos.&#x1F496'

    div.id = 'paragContainer'

    main.classList.remove('presentMode')
    main.classList.add('surpriseMode')

    btn.remove()
    
    div.append(p1, p2, p3)
    shadowBox.appendChild(div)
}

present.addEventListener('click', showPresent)