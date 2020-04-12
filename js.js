const container = document.getElementById('container');

// function that makes the grid
function makeGrid(size){
    let totalGrid = size * size;
    for (c = 0;c < totalGrid; c++){
        const cell = document.createElement('div');
        cell.classList.add('newSquare');
        container.appendChild(cell);
        cell.addEventListener('mouseover',blackAndWhite);
    }
    document.documentElement.style.setProperty("--rowNum",size);
    document.documentElement.style.setProperty("--colNum",size);
}
makeGrid(16);

//function that adds color to the grid
function colorGrid(size){
    let totalGrid = size * size;
        for(c = 0; c < totalGrid; c++){
        const cell = document.createElement('div');
        cell.classList.add('newSquare');
        container.appendChild(cell);
        cell.addEventListener('mouseover', color);
        }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
}

// Grey scale function
function greyGrid(size){
    let totalGrid = size * size;
        for(c = 0; c < totalGrid; c++){
        const cell = document.createElement('div');
        cell.classList.add('newSquare');
        container.appendChild(cell);
        cell.addEventListener('mouseover', greyScale);
        }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
}

// function that detects that overtop of cell, find a way to change the color
function blackAndWhite(e){
    e.target.classList.add('my-color-class');   
}

// function that adds color to the squares
function color(e){
    e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    e.target.border = '0px';
}

// Function that add grey scale to divs
function greyScale(e){
    e.target.style.backgroundColor = 'black';
    e.target.style.opacity -= '-0.1';
}

// Function to reset grid
function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
// Function to reset the grid and add new grid size
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(e){
    reset();
    let newSize = prompt('New Grid Size');
    makeGrid(newSize);
})

// Color button function
const colorButton = document.getElementById('rainbow');
colorButton.addEventListener('click', function(e){
    reset();
    let newSize = prompt('New Grid Size:');
    colorGrid(newSize);
})  

// Grey Scale button function
const greyScaleButton = document.getElementById('greyscale');
greyScaleButton.addEventListener('click', function(e){
    reset();
    let newSize = prompt('New Grid Size:');
    greyGrid(newSize);
})  


