var grid = document.getElementById('.container')

function addToGrid(){
    var newDiv = document.createElement(grid);
    newDiv.appendChild(newDiv);
    console.log(newDiv);

}
