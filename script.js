const container = document.querySelector('#container')

// criação das div
const grid = Array(256).fill(null)

for(let i = 0; i < grid.length; i++) {
    const casas = document.createElement('div')
    casas.classList.add('grid')
    container.appendChild(casas)    
}

const casas = document.querySelectorAll('.grid')
casas.forEach(casa => {
    casa.addEventListener('mouseover', (e) =>
    e.target.classList.add('selected'))
})

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clearGrid)

function clearGrid() {
    casas.forEach(casa => {
        casa.classList.remove('selected')
    })
}