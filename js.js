const container = document.getElementById("container");

document.addEventListener('mouseover', sketch);

function makeRows(rows,cols){
    container.style.setProperty('--grid-size',rows);
    container.style.setProperty('--grid-size',cols);
    for (c = 0;c < (rows*cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(16,16);

// function that detects that overtop of cell, find a way to change the color
function sketch(){
    
}
