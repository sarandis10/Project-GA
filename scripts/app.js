function init() {

  const scoreDisplay = document.querySelector('.score-display')
  const lifesDisplay = document.querySelector('.lifes-display')
  const startButton = document.querySelector(".start")
  let score = 0
  let lifes = 3
  lifesDisplay.innerText = lifes
  scoreDisplay.innerText = score
  const theGrid = document.querySelector(".grid-screen")
  const width = 20
  const height = 19
  const numberCells = width * height
  const cellsArray = []
  const aliensArray = []
  let alliensRemovedArray = []
  const alienClass = "enemy"
  const spaceshipClass = "spaceShip"
  const bulletClass = "bullet"
  const lifeClass = "extraLife"
  const numberOfAliens = 1
  const spaceshipInitialPosition = 370
  let spaceshipCurrentPosition = spaceshipInitialPosition
  let bulletCurrentPosition = spaceshipCurrentPosition - 20
  const theBrief = document.querySelector(".brief")
  const audio = document.querySelector('#audio')
  console.log("is this audio?", audio)
  let randomLifeNumber
  theBrief.innerText = "The Brief: \n Use arrows to move and space to fire.\n  Good Luck!\n press Start to begin"

  function startGame() {
    function createRandomNumberForAliens() {
      for (let i = 0; i <= Math.floor(numberOfAliens / 2); i++) {
        let randomNumber = Math.floor((Math.random() * 20));
        if (randomNumber == 0) {
          randomNumber = randomNumber + 2
        }
        if (randomNumber == 19) {
          randomNumber = randomNumber - 2
        }
        console.log("random numbers1", randomNumber)
      }
      for (let i = 0; i <= Math.floor(numberOfAliens / 2); i++) {
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

    function createAliens(x) {
      for (let i = 0; i < x.length; i++) {
        if (!alliensRemovedArray.includes(i)) {
          cellsArray[x[i]].classList.add(alienClass)
        }

      }
    }
    createAliens(aliensArray)

    function removeAliens(x) {
      for (let i = 0; i < x.length; i++) {
        cellsArray[x[i]].classList.remove(alienClass)
      }
    }
    function createSpaceShip(x) {
      cellsArray[x].classList.add(spaceshipClass)
    }
    createSpaceShip(spaceshipInitialPosition)

    function removeSpaceShip(x) {
      cellsArray[x].classList.remove(spaceshipClass)
    }

    function spaceshipMovement(event) {
      const key = event.keyCode
      removeSpaceShip(spaceshipCurrentPosition)
      console.log(key)
      if (key == 37 && spaceshipCurrentPosition % width !== 0) {
        spaceshipCurrentPosition -= 1
        collisionDetectionAlienShip()
        collisionDetectionSpaceShipHeart()
      }
      if (key == 39 && spaceshipCurrentPosition % width !== width - 1) {
        spaceshipCurrentPosition += 1
        collisionDetectionAlienShip()
        collisionDetectionSpaceShipHeart()
      }
      if (key == 38 && spaceshipCurrentPosition >= width) {
        spaceshipCurrentPosition -= width
        collisionDetectionAlienShip()
        collisionDetectionSpaceShipHeart()
      }
      if (key == 40 && spaceshipCurrentPosition + width <= width * height - 1) {
        spaceshipCurrentPosition += width
        collisionDetectionAlienShip()
        collisionDetectionSpaceShipHeart()
      }
      if (key == 32) {
        createBullet(spaceshipCurrentPosition - 20)
        bulletCurrentPosition = spaceshipCurrentPosition - 20
      }
      console.log(spaceshipCurrentPosition)
      createSpaceShip(spaceshipCurrentPosition)
    }
    document.addEventListener('keyup', spaceshipMovement)

    function createBullet(x) {
      cellsArray[x].classList.add(bulletClass)
      playBulet()
      setInterval(() => {
        console.log("this is the interval for the bullet")
        checkGameOver()
        removeBullet(bulletCurrentPosition)
        bulletCurrentPosition = bulletCurrentPosition - 20
        cellsArray[bulletCurrentPosition].classList.add(bulletClass)
        console.log(bulletCurrentPosition)
        if (collisionDetectionAlienBullet()) {
          removeBullet(bulletCurrentPosition)
        }
        if (bulletCurrentPosition < width - 20) {
          removeBullet(bulletCurrentPosition)
        }
      }, 500)
    }

    function removeBullet(x) {
      console.log("remove bullet at location ", x)
      console.log("bullet current pos is", bulletCurrentPosition)
      cellsArray[x].classList.remove(bulletClass)
    }

    function alienMovement() {
      playAudio()
      removeAliens(aliensArray)
      for (let i = 0; i < aliensArray.length; i++) {
        aliensArray[i] += 20
        if (aliensArray[i] > 380 && aliensArray[i] < 399) {
          window.alert("Game over")
        }
      }
      createAliens(aliensArray)
      collisionDetectionAlienShip()
    }
    setInterval(alienMovement, 10000)

    function collisionDetectionAlienShip() {
      if (cellsArray[spaceshipCurrentPosition]
        .classList.contains(alienClass, spaceshipClass)) {
        lifes--
        lifesDisplay.innerText = lifes
        checkGameOver()
      }
    }

    function collisionDetectionAlienBullet() {

      if (cellsArray[bulletCurrentPosition]
        .classList.contains(alienClass, bulletClass)) {
        score += 100
        scoreDisplay.innerText = score
        const aliensRemoved = aliensArray.indexOf(bulletCurrentPosition)
        alliensRemovedArray.push(aliensRemoved)
        console.log(alliensRemovedArray)

      }
    }

    function checkGameOver() {
      console.log("check game over")
      if (alliensRemovedArray.length == aliensArray.length || lifes == 0) {
        window.alert("Game over!")
      }
    }



    // additional stuff..


    function playAudio() {
      console.log("music play!")
      audio.src = "/assets/Space.mp3"
      audio.play()
    }
    playAudio()

    function playBulet() {
      audio.src = "/assets/sniper.mp3"
      audio.play()
    }

    function playHeart() {
      audio.src = "/assets/Recording.M4A"
      audio.play()
    }


    function extraLife() {
      randomLifeNumber = Math.floor((Math.random() * 379));
      cellsArray[randomLifeNumber].classList.add(lifeClass)
      console.log("heart pos: ", randomLifeNumber)
    }
    setTimeout(function () { extraLife(); }, 5000);

    function collisionDetectionSpaceShipHeart() {
      console.log("collision  SPACE - HEART")
      if (spaceshipCurrentPosition == randomLifeNumber) {
        cellsArray[randomLifeNumber].classList.remove(lifeClass)
        lifes = lifes + 1
        lifesDisplay.innerText = lifes
        theBrief.innerHTML = "Well Done!! +1 Life"
        playHeart()
      }
    }
  }



  const watchScreen = document.querySelector('.time')
  let timer = 0
  function getCurrentTime() {
    timer++
    var hours = Math.floor(timer / 3600);
    var mins = Math.floor(timer / 60) - (hours * 60);
    var secs = Math.floor(timer - hours * 3600 - mins * 60);

    return `${hours}:${mins}:${secs}`
  }
  watchScreen.innerHTML = getCurrentTime()
  setInterval(() => {
    watchScreen.innerHTML = getCurrentTime()
  }, 1000)


  startButton.addEventListener("click", startGame)
}
window.addEventListener('DOMContentLoaded', init)

