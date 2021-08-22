# Shoot The Alien

![image](https://user-images.githubusercontent.com/43549151/130363680-bd3c7371-634c-4c15-b9df-e23a08c249e2.png)

# 1.0 Brief

Design a grid-based game using HTML, CSS, and JavaScrip. The goal is to kill the alliens before the hit you or react the end of the screen

# 2.0 How To run the App
  2.1 Open the index.html with chrome
  2.2 run the app.js with the command node app.js
  2.3 hit the start button on the screen
  
# 3.0 Technologies used

*  HTML5
*  CSS3
*  JavaScript
*  Chrome
*  VS Code
*  Google Fonts
*  Git & GitHub

# 4.0 Process
In games like this you always start with the grid


```
  function createGrid() {
    for (let i = 0; i < numberCells; i++) {
      const cell = document.createElement("div")
      // cell.innerText = i
      theGrid.appendChild(cell)
      cellsArray.push(cell)
    }
  }
```
Then you proceed with creating the spaceshit, enemies on the screen. 
if you want to create many then you should be using an array. 
Movement detection is the next thing you should take care of. 
Lastly you should detect the collisions.

```
  function collisionDetectionAlienBullet() {

    if (cellsArray[bulletCurrentPosition]
      .classList.contains(alienClass, bulletClass)) {
      score += 100
      scoreDisplay.innerText = score
      // removeBullet(bulletCurrentPosition)
      const aliensRemoved = aliensArray.indexOf(bulletCurrentPosition)
      alliensRemovedArray.push(aliensRemoved)
      console.log(alliensRemovedArray)
      checkGameOver()
    }
  }
```

After that you can add many more features like timers, levels, extra lifes

# 5.0 Screenshot

![image](https://user-images.githubusercontent.com/43549151/130364230-d1763b15-a0e2-46c4-b6f1-4d905a792270.png)


# 6.0 Key Learnings

Making my first static JS browser game from scratch was a great learning exercise and a fun way to consolidate my learnings. In particular, I learnt a lot about DOM manipulation, different use cases for different JS array methods, and working with timers, also in hindsight I would spend a lot more time planning each stage of my build as this would help prevents some errors I had to debug.
