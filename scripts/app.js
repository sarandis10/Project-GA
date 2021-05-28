function init() {
    
const theGrid=document.querySelector(".grid-screen")
console.log(theGrid)
const width=20
const numberCells=width*(width)-40
console.log("the number of cells:",numberCells)
const cellsArray=[]
console.log("my array with all divs:",cellsArray)

const spaceshipClass='spaceShip'
const shipStartPosition=0
console.log("ship starting position cell: ",shipStartPosition)




//The Grid
function createGrid(){
  for (let i=0; i<numberCells; i++){
    const cell= document.createElement("div")
    cell.innerText = i
    theGrid.appendChild(cell)
    cellsArray.push(cell)
  }
  addSpaceShip(shipStartPosition)
}

//Add the ship to the grid

function addSpaceShip(position){
  console.log('position of the spaceship :', position)
  cellsArray[position].classList.add(spaceshipClass)
}




createGrid()

}
  window.addEventListener('DOMContentLoaded', init)