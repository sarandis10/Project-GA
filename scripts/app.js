function init() {
  const theGrid = document.querySelector(".grid-screen")
  const width = 20
  const height = 19
  const numberCells = width * height
  const cellsArray = []
  const aliensArray = []
  const alienClass = "enemy"
  const spaceshipClass= "spaceShip"
  const numberOfAliens = 10
  console.log(numberCells)


  function createRandomNumberForAliens() {
    for (let i = 0; i <= numberOfAliens / 2; i++) {
      let randomNumber = Math.floor((Math.random() * 20));
      if (randomNumber == 0) {
        randomNumber = randomNumber + 2
      }
      if (randomNumber == 19) {
        randomNumber = randomNumber - 2
      }
      aliensArray.push(randomNumber)
    }
    for (let i = 0; i <= numberOfAliens / 2; i++) {
      let randomNumber = Math.floor((Math.random() * 20) + 20);
      if (randomNumber == 20) {
        randomNumber = randomNumber + 2
      }
      if (randomNumber == 39) {
        randomNumber = randomNumber - 2
      }
      aliensArray.push(randomNumber)
    }
  }
  createRandomNumberForAliens()

  function createGrid() {
    for (let i = 0; i < numberCells; i++) {
      const cell = document.createElement("div")
      cell.innerText = i
      theGrid.appendChild(cell)
      cellsArray.push(cell)
    }
  }
  createGrid()

  function createAliens() {
    console.log("allies function")
    for (let i = 0; i < aliensArray.length; i++) {
      console.log("2ond if")
      cellsArray[aliensArray[i]].classList.add(alienClass)
      console.log("allies function IF")
    }
  }
  createAliens()


  function createSpaceShip() {
    cellsArray[370].classList.add(spaceshipClass)
  }
  createSpaceShip()

  function spaceshipMovement(){
    
    
  }
  spaceshipMovement()

}
window.addEventListener('DOMContentLoaded', init)


const scoreDisplay = document.querySelector('.score-display')
//   const lifesDisplay = document.querySelector('.lifes-display')
//   let score = 0
//   let lifes = 3

//   lifesDisplay.innerText = lifes
//   scoreDisplay.innerText = score



//   console.log(lifes)

//   const theGrid = document.querySelector(".grid-screen")
//   console.log(theGrid)
//   const width = 20
//   const numberCells = width * (width) - 39
//   console.log("the number of cells:", numberCells)
//   const cellsArray = []
//   console.log("my array with all divs:", cellsArray)


//   // spaceship stuff
//   const spaceshipClass = 'spaceShip'
//   const shipStartPosition = numberCells - 11
//   let shipCurrentPosition = numberCells - 11

//   //? bullet stuff
//   let bulletCurrentPosition = shipCurrentPosition
//   const bulletClass = "bullet"





//   //! this is enemy stuff
//   const enemyClass = "enemy"
//   const enemyStartPosition = 7
//   let enemyCurrentPosition = 7

//   //?The Grid
//   function createGrid() {
//     for (let i = 1; i < numberCells; i++) {
//       const cell = document.createElement("div")
//       // cell.innerText = i
//       theGrid.appendChild(cell)
//       cellsArray.push(cell)
//     }
//     addSpaceShip(shipStartPosition)
//     addEnemy(enemyStartPosition)
//   }



//   //Add the ship to the grid
//   function addSpaceShip(position) {
//     cellsArray[position].classList.add(spaceshipClass)
//   }

//   //! add enemy to the grid!
//   function addEnemy(position) {
//     cellsArray[position].classList.add(enemyClass)
//   }

//   //remove spacehip to the grid
//   function removeSpaceShip(position) {
//     cellsArray[position].classList.remove(spaceshipClass)
//   }

//   //!remove enemy from the grid
//   function removeEnemy(position) {
//     cellsArray[position].classList.remove(enemyClass)
//   }

//   //?  Add bullet in the screen 
//   function fireBullet(event) {
//     const key = event.keyCode
//     if (key == 32) {
//       bulletCurrentPosition = shipCurrentPosition - 20
//       cellsArray[bulletCurrentPosition].classList.add(bulletClass)
//       const timer = setInterval(() => {
//         removeBullet(bulletCurrentPosition)
//         bulletCurrentPosition = bulletCurrentPosition - 20
//         console.log("bullet current poss", bulletCurrentPosition)
//         cellsArray[bulletCurrentPosition].classList.add(bulletClass)
//         colisionTwo(bulletCurrentPosition, enemyCurrentPosition)
//         if (bulletCurrentPosition < 0) {
//           removeBullet(bulletCurrentPosition)
//         }
//       }, 500)
//       console.log("Ftanoume edo?")

//     }

//   }

//   // ? remove bullet

//   function removeBullet(position) {
//     cellsArray[position].classList.remove(bulletClass)
//   }

//   //movement logic 
//   function handleKeyUp(event) {
//     const key = event.keyCode
//     removeSpaceShip(shipCurrentPosition)

//     if (key == 39 && shipCurrentPosition < numberCells - 2) {
//       shipCurrentPosition++
//     }
//     if (key == 37 && shipCurrentPosition > 0) {
//       shipCurrentPosition--
//     }
//     if (key == 38 && shipCurrentPosition >= width) {
//       shipCurrentPosition = shipCurrentPosition - width
//     }
//     if (key == 40 && shipCurrentPosition < 341) {
//       shipCurrentPosition = shipCurrentPosition + width
//     }
//     addSpaceShip(shipCurrentPosition)
//   }


//   document.addEventListener('keyup', handleKeyUp)
//   document.addEventListener('keydown', fireBullet)
//   createGrid()
//   enemymoves(enemyStartPosition)


//   //! move enemy
//   function enemymoves(position) {
//     addEnemy(position)

//     const timer = setInterval(() => {
//       removeEnemy(enemyCurrentPosition)
//       enemyCurrentPosition = enemyCurrentPosition + 1
//       addEnemy(enemyCurrentPosition)
//       colision(shipCurrentPosition, enemyCurrentPosition)
//       console.log("enemy pos", enemyCurrentPosition)
//     }, 10000)
//   }
//   //collision detection BETWEEN SPACESHIP AND ENEMY
//   function colision(shipCurrentPosition, enemyCurrentPosition) {
//     console.log("INSIDE COLISION FUNCTION")
//     if (shipCurrentPosition == enemyCurrentPosition || enemyCurrentPosition == shipCurrentPosition) {
//       lifes--
//       lifesDisplay.innerText = lifes
//     }
//     if (lifes == 2) {
//       alert("Game Over")
//     }
//   }
//   function colisionTwo(bulletCurrentPosition, enemyCurrentPosition) {
//     console.log("eewewew", bulletCurrentPosition, enemyCurrentPosition)
//     if (bulletCurrentPosition == enemyCurrentPosition) {
//       console.log("mpainei mesa sto if?")
//       score = score + 100
//       scoreDisplay.innerText = score
//       removeEnemy(enemyCurrentPosition)
//       removeBullet(bulletCurrentPosition)
//     }
//   }

//   //this is for the watch only!!
//   const watchScreen = document.querySelector('.time')
//   let timer = 0
//   function getCurrentTime() {
//     timer++
//     return timer
//   }
//   watchScreen.innerHTML = getCurrentTime()
//   setInterval(() => {
//     watchScreen.innerHTML = getCurrentTime()
//   }, 1000)



// // brief

// const theBrief=document.querySelector(".brief")
// console.log(theBrief)
// const briefString="The Brief: \n kill all the space invaders and save the prince who has been kidnapped!"

// theBrief.innerText=setInterval(
// ()=>{
//   theBrief.innerText=briefString
// },2000)