function init() {
    
const theGrid=document.querySelector(".grid-screen")
console.log(theGrid)
const width=20
const numberCells=width*(width)-38
// console.log(numberCells)
const cellsArray=[]

const spaceshipClass="spaceShip"


//The Grid
function createGrid(){
  for (let i=1; i<numberCells; i++){
    const cell= document.createElement("div")
    cell.innerText = i
    theGrid.appendChild(cell)
    cellsArray.push(cell)
  }
}
createGrid()

}
  window.addEventListener('DOMContentLoaded', init)