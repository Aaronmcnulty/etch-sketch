

const classNamesArr = ["one", "two", "three", "four", "five", "six", 
                       "seven", "eight", "nine", "ten"]


const gridContainer = document.getElementById("grid-container")
const tileChangeButton = document.getElementById("tile-change-button")


//initial tile width and height figure. 
let tileNumber = 16



// Prompts user for the number of tiles for the width/height, must be a number between 1 and 100.

tileChangeButton.addEventListener("click", event =>{
    tileNumber = prompt("Choose the grid width and height (up to 100)")
    if (tileNumber > 100 || tileNumber < 1 || (tileNumber % tileNumber) != 0){
        alert("Please choose a number between 1 and 100")
    } else{
        createBoard(tileNumber)
    }
    
})



function createBoard(tilesHeightWidth){

// Removes initial pixel grid
        gridContainer.innerHTML = ""

//Equation for total number of tiles in grid (height * width), for loop creates tiles using that total.
    let tilesTotal = tileNumber * tileNumber
    for (i= 1; i <= tilesTotal; i++){
        const gridBlock = document.createElement("div")
       
// Uses total of i to create unique id for each tile.
        gridBlock.id = `grid-block${i}`
        gridBlock.className = 'grid-block'
        gridBlock.value = 0

/*Equation works out what each tiles width and height must be in order to event fit as a square 
in the 500px by 500px grid container*/
        let tileSizeEquation = 500/tilesHeightWidth
        gridBlock.style.width = `${tileSizeEquation}px`
        gridBlock.style.height = `${tileSizeEquation}px`
        gridContainer.appendChild(gridBlock)    

/* Each tiles value starts as 0. When mouse event occurs 1 is added to the tiles value. 
A new className is assigned to the tile using the value as the index number of the classNameArr.  
Each className has a darker background color shade attribute which is added to the tile.*/
        gridBlock.addEventListener("mouseover", event => {
                
            if (gridBlock.value <= 9) {
                    
                gridBlock.className = `grid-block ${classNamesArr[gridBlock.value]}`
                gridBlock.value++
            }
        })
    }
}


//Create the inital board with 16 by 16 tiles.
createBoard(tileNumber)


