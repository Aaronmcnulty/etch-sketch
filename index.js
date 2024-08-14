const op = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

const gridContainer = document.getElementById("grid-container")

for (i= 1; i <= 256; i++){
    const gridBlock = document.createElement("div")
    gridBlock.id = `grid-block${i}`
    gridBlock.className = 'grid-block'
    gridBlock.value = 0
    gridContainer.appendChild(gridBlock)
    gridBlock.addEventListener("mouseover", event => {
            
            console.log(gridBlock.value)
            
            if (gridBlock.value <= 9) {
                
            gridBlock.className = `grid-block ${op[gridBlock.value]}`
            gridBlock.value++
        }
    })
  

}