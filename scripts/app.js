function init() {

  const theGrid = document.querySelector(".grid-screen")
  console.log(theGrid)
  const width = 20
  const numberCells = width * (width) - 39
  console.log("the number of cells:", numberCells)
  const cellsArray = []
  console.log("my array with all divs:", cellsArray)

  const spaceshipClass = 'spaceShip'
  const shipStartPosition = 1
  let shipCurrentPosition = 1

  console.log("ship starting position cell: ", shipStartPosition)
  console.log("ship current position cell: ", shipCurrentPosition)




  //The Grid
  function createGrid() {
    for (let i = 1; i < numberCells; i++) {
      const cell = document.createElement("div")
      cell.innerText = i
      theGrid.appendChild(cell)
      cellsArray.push(cell)
    }
    addSpaceShip(shipStartPosition)
  }

  //Add the ship to the grid

  function addSpaceShip(position) {
    console.log('position of the spaceship :', position)
    cellsArray[position].classList.add(spaceshipClass)
  }

  //remoce spaship from the grid
  function removeSpaceShip(position){
    console.log("remove works")
    cellsArray[position].classList.remove(spaceshipClass)
  }

  //movement logic 
  function handleKeyUp(event) {
    const key = event.keyCode
    console.log(key)
    removeSpaceShip(shipCurrentPosition)

    if (key==39 && shipCurrentPosition<numberCells-2){
      shipCurrentPosition++
    }
    if (key==37 && shipCurrentPosition>0){
      shipCurrentPosition--
    }
    if (key==38 && shipCurrentPosition >= width){
      shipCurrentPosition=shipCurrentPosition-width
    }
    if (key==40 && shipCurrentPosition<341){
      shipCurrentPosition=shipCurrentPosition+width
    }

    addSpaceShip(shipCurrentPosition)
  }


  document.addEventListener('keyup', handleKeyUp)
  createGrid()

}
window.addEventListener('DOMContentLoaded', init)