const container = document.getElementById('container');

// function that makes the grid
function makeGrid(size){
    let totalGrid = size * size;
    for (c = 0;c < totalGrid; c++){
        const cell = document.createElement('div');
        cell.classList.add('newSquare');
        container.appendChild(cell);
        cell.addEventListener('mouseover',sketch);
    }
    document.documentElement.style.setProperty("--rowNum",size);
    document.documentElement.style.setProperty("--colNum",size);
}
makeGrid(16);

// function that detects that overtop of cell, find a way to change the color
function sketch(e){
    e.target.classList.add('my-color-class');   
}

function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(e){
    reset();
    let newSize = prompt('New Grid Size');
    makeRows(newSize,newSize);
})
    
