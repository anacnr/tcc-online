console.log("Script JS")

const input = document.querySelector('input')
const button_submit = document.getElementById('icon-butt')

window.prompt("Digite um supermercado:")

button_submit.addEventListener('click', ()=>{

if(input.value.length == 0){
    alert
    ("Por favor digite alguma coisa")
}
else {

    const body = document.querySelector('body')

    document.querySelector("#message").style.display = 'none'

    if(input.value == 'maçã' || input.value == 'maca'){

        const card = document.createElement("div")
        card.className = 'results'
        card.style.cursor = 'pointer'
    
        body.appendChild(card)
    
        const h1 = document.createElement("h1")
        h1.className = 'title'
    
        card.appendChild(h1)
    
        const dates = document.createElement("p")
        dates.className = 'phrase-prod'
        dates.innerHTML = 'nome'
    
        card.appendChild(dates)
    
        const image = document.createElement("img")
        image.className = 'img-product'
    
        card.appendChild(image)
    
        
        const abbr = document.createElement("abbr")
        abbr.title = 'Adicionar produto.'
        card.appendChild(abbr)
    
        const button = document.createElement("button")
        button.type = 'button'
        button.className = 'button-card'
    
        abbr.appendChild(button)
    
        const i = document.createElement("i")
        i.className = 'bi bi-cart-plus'
    
        button.appendChild(i)

        document.querySelector('.results > h1').innerHTML = 'Maçã'
        document.querySelector('.results > img').src = '/imagens/produtos/frutas/apples-min.jpg'
        document.querySelector('.results > p').innerHTML = 'Preço: 2,50 por kg'
        document.querySelector('.results > p').style.marginTop = '40px'
    }
    else if (input.value == 'limão' || input.value == 'limao'){
        const card = document.createElement("div")
        card.className = 'results'
        card.style.cursor = 'pointer'
    
        body.appendChild(card)
    
        const h1 = document.createElement("h1")
        h1.className = 'title'
    
        card.appendChild(h1)
    
        const dates = document.createElement("p")
        dates.className = 'phrase-prod'
        dates.innerHTML = 'nome'
    
        card.appendChild(dates)
    
        const image = document.createElement("img")
        image.className = 'img-product'
    
        card.appendChild(image)
    
        
        const abbr = document.createElement("abbr")
        abbr.title = 'Adicionar produto.'
        card.appendChild(abbr)
    
        const button = document.createElement("button")
        button.type = 'button'
        button.className = 'button-card'
    
        abbr.appendChild(button)
    
        const i = document.createElement("i")
        i.className = 'bi bi-cart-plus'
    
        button.appendChild(i)

        document.querySelector('.results > h1').innerHTML = 'Limão'
        document.querySelector('.results > img').src = '/imagens/produtos/frutas/lemons-min.jpg'
        document.querySelector('.results > p').innerHTML = 'Preço: 1,50 por kg'
        document.querySelector('.results > p').style.marginTop = '40px'
    }
    else if(input.value == 'picanha'){
        const card = document.createElement("div")
        card.className = 'results'
        card.style.cursor = 'pointer'
    
        body.appendChild(card)
    
        const h1 = document.createElement("h1")
        h1.className = 'title'
    
        card.appendChild(h1)
    
        const dates = document.createElement("p")
        dates.className = 'phrase-prod'
        dates.innerHTML = 'nome'
    
        card.appendChild(dates)
    
        const image = document.createElement("img")
        image.className = 'img-product'
    
        card.appendChild(image)
    
        
        const abbr = document.createElement("abbr")
        abbr.title = 'Adicionar produto.'
        card.appendChild(abbr)
    
        const button = document.createElement("button")
        button.type = 'button'
        button.className = 'button-card'
    
        abbr.appendChild(button)
    
        const i = document.createElement("i")
        i.className = 'bi bi-cart-plus'
    
        button.appendChild(i)

        document.querySelector('.results > h1').innerHTML = 'Picanha'
        document.querySelector('.results > img').src = '/imagens/produtos/carne/steak-min.png'
        document.querySelector('.results > p').innerHTML = 'Preço: 1,50 por kg'
        document.querySelector('.results > p').style.marginTop = '40px'
    }
}

});//Evento de envio do form

document.querySelector("#product").addEventListener("click", ()=>{
    setTimeout(()=>{
        location.href = '../../lista.html'
    },1000)
})