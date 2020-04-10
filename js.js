const container = document.getElementById("container");

// function that makes the grid
function makeRows(rows,cols){
    container.style.setProperty('--grid-size',rows);
    container.style.setProperty('--grid-size',cols);
    for (c = 0;c < (rows*cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover',sketch);
    };  
};
makeRows(16,16);

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
    
