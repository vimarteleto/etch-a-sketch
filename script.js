const root = document.documentElement

// barra slider para mudança do grid
const slider = document.querySelector('.slider')
const sliderResult = document.querySelector('.slider-result')
sliderResult.textContent = `grid size: ${slider.value} x ${slider.value}`
// atualização do grid conforme mudança no slider
slider.oninput = function() {
    sliderResult.textContent = `grid size: ${slider.value} x ${slider.value}`
}

// botao de criação de novo grid
const newGridButton = document.querySelector('#grid-button')
newGridButton.addEventListener('click', newGrid)

// grid inicial de 30x30
let grid = Array(Number(slider.value) ** 2)
const gridContainer = document.querySelector('#grid-container')
for(let i = 0; i < grid.length; i++) {
    const casas = document.createElement('div')
    casas.classList.add('grid')
    gridContainer.appendChild(casas)    
}

// atualização do grid
function newGrid() {
    // se existe filhos, remove os filhos
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    // atualização do grid
    grid.length = (Number(slider.value) ** 2)
    for(let i = 0; i < grid.length; i++) {
        const casas = document.createElement('div')
        casas.classList.add('grid')
        gridContainer.appendChild(casas)    
    }
    
    // atualização da variavel css
    let gridRowsColumns = Number(slider.value)
    root.style.setProperty('--gridRowsColumns', gridRowsColumns)

    let squareSize = `${30 * 20 / gridRowsColumns}px`
    root.style.setProperty('--squareSize', squareSize)

    // funcao de desenho
    onOff()
}

// funcao para chamada no event listener
function changeOnEvent(e) {
    e.target.style.setProperty('background-color', sliderColor.value)
}

// iniciar desenho ao clique
function startColoring() {
    // evento de 'mouseover' para adição de propriedade de estilo
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
        casa.addEventListener('mouseover', changeOnEvent)   
    })    
}

// parar desenho ao clique
function stopColoring() {
    // evento de 'mouseover' para adição de propriedade de estilo
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
        casa.removeEventListener('mouseover', changeOnEvent)    
    })
}
const on = document.querySelector('.on')
const off = document.querySelector('.off')
// liga e desliga ao clique
let state = false
function onOff() {
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
        casa.addEventListener('click', () => {
        state = !state
        if(state) {
            startColoring()
            on.textContent = on.textContent.toUpperCase()
            on.style.setProperty('color', 'green')
            on.style.setProperty('font-weight', 'bold')
            off.style.setProperty('color', 'gray')
            off.textContent = off.textContent.toLowerCase()
            off.style.setProperty('font-weight', 'normal')
        }
        else {
            stopColoring()
            off.textContent = off.textContent.toUpperCase()
            off.style.setProperty('color', 'red')
            off.style.setProperty('font-weight', 'bold')
            on.style.setProperty('color', 'gray')
            on.textContent = on.textContent.toLowerCase()
            on.style.setProperty('font-weight', 'normal')
        }
        })
    }) 
}
onOff()



// botao de limpeza de propriedade de estilo
const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearGrid)

function clearGrid() {
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
        casa.style.removeProperty('background-color')
    })
}

// alterando a cor por meio de variavel css
const sliderColor = document.querySelector('#slider-color')
sliderColor.addEventListener('change', () => {
    root.style.setProperty('--gridColor', sliderColor.value)
})

