function init() {
  let score=0
  // const firstName = (window.prompt("Hello There what is your name?"))
  // let lifes=Number(window.prompt(`hello ${firstName} how many lifes do you want to begin with?`))
  
  // if (lifes>5){
  //   lifes=Number(window.prompt(`${firstName} dont you think you asking for too many lifes choose again but less that 5 this time!?`))
  // }

  // if (lifes>5){
  //   lifes=Number(window.prompt(`${firstName} dont you think you asking for too many lifes choose again but less that 5 this time!?`))
  // }
  let lifes= 2
  console.log(lifes)

  const theGrid = document.querySelector(".grid-screen")
  console.log(theGrid)
  const width = 20
  const numberCells = width * (width) - 39
  console.log("the number of cells:", numberCells)
  const cellsArray = []
  console.log("my array with all divs:", cellsArray)
  //? spaceship stuff
  const spaceshipClass = 'spaceShip'
  const shipStartPosition = numberCells-11
  let shipCurrentPosition = numberCells-11

  console.log("ship starting position cell: ", shipStartPosition)
  console.log("ship current position cell: ", shipCurrentPosition)
  //! this is enemy stuff
  const enemyClass ="enemy" 
  const enemyStartPosition=7
  let enemyCurrentPosition=7

  




  //The Grid
  function createGrid() {
    for (let i = 1; i < numberCells; i++) {
      const cell = document.createElement("div")
      cell.innerText = i
      theGrid.appendChild(cell)
      cellsArray.push(cell)
    }
    addSpaceShip(shipStartPosition)
    addEnemy(enemyStartPosition)
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


  //! add enemy to the grid!
function addEnemy(position){
  cellsArray[position].classList.add(enemyClass)
  console.log("enemy position: ",enemyStartPosition)
  enemymoves(enemyStartPosition)
}

function removeEnemy(position){
  console.log("remove ENEMY works")
  cellsArray[position].classList.remove(enemyClass)
}

function enemymoves(position){
  // removeEnemy(position)
  // enemyCurrentPosition++
  // addEnemy(enemyCurrentPosition)
}


}
window.addEventListener('DOMContentLoaded', init)