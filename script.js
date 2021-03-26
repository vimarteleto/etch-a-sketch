const gridContainer = document.querySelector('#grid-container')
const root = document.documentElement

// barra slider para mudança do grid
const slider = document.querySelector('.slider')
const sliderResult = document.querySelector('.slider-result')
sliderResult.textContent = slider.value
// atualização do grid conforme mudança no slider
slider.oninput = function() {
    sliderResult.textContent = slider.value
}

// botao de criação de novo grid
const newGridButton = document.querySelector('#grid-button')
newGridButton.addEventListener('click', newGrid)

// grid inicial de 16x16
let grid = Array(Number(slider.value) ** 2)
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
    coloringGrd() 
}

// funcao de desenho
function coloringGrd() {
    // evento de 'mouseover' para adição de classe com estilo
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
    casa.addEventListener('mouseover', (e) =>
    e.target.classList.add('selected'))
    })    
}
coloringGrd()

// botao de limpeza da classe com estilo
const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearGrid)

function clearGrid() {
    let casas = document.querySelectorAll('.grid')
    casas.forEach(casa => {
        casa.classList.remove('selected')
    })
}
