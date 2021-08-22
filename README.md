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
