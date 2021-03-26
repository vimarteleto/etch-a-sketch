const gridContainer = document.querySelector('#grid-container')

// criação das divs por meio de vetor
let grid = Array(400) // isso deve ser o valor de slide**2 !!!

for(let i = 0; i < grid.length; i++) {
    const casas = document.createElement('div')
    casas.classList.add('grid')
    gridContainer.appendChild(casas)    
}

// alterando linhas e colunas na variavel css
    // talvez colocar em uma função para alterar depois do clique, para manter o valor padrao 16 !!!
const root = document.documentElement
let gridRowsColumns = Math.sqrt(grid.length) // isso deve ser o valor de slide !!!
root.style.setProperty('--gridRowsColumns', gridRowsColumns)

// evento de 'mouseover' para adição de classe com estilo
const casas = document.querySelectorAll('.grid')
casas.forEach(casa => {
    casa.addEventListener('mouseover', (e) =>
    e.target.classList.add('selected'))
})


// botao de limpeza da classe com estilo
const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearGrid)

function clearGrid() {
    casas.forEach(casa => {
        casa.classList.remove('selected')
    })
}

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

function newGrid() {
    //?????????
}


