// USER EXPERIENCE
// 1. A player starts their turn.
// 2. Player will click a cell.
// 3. Add their token (X or O) to that cell.
// 4. If player won, they will see a WIN message, if not, start over with the next player.

// GAME LOGIC
// - Keep track of whose turn it is.
// - Player X will have the first turn.
// - Keep track of which cells the player clicked.
// - Since no players have clicked on any cells yet, we will have empty histories of their clicks.
// - AddEventListener (CLICK) on each of the 9 cells.
//   - Get all nine cell elements in an array
//   - Loop over them, adding a click event listener to each.
//   - On click, add the player token (X or O).
//   - On click, record which cell the player clicked.
//      - Push cell element ID to the player's selection array. 
//   - On click, check if the player won.
//      - TODO: What do we need to do to get this done?
//   - On click, after everything is done for the current turn, change currentPlayer.

let currentPlayer = 'X'
const playerXSelections = []
const playerOSelections = []
const winningCombinations = [
    // Horizontal Win Combos:
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // Vertical Win Combos:
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // Diagonal Win Combos:
    [1, 5, 9],
    [3, 5, 7],
]


const cellElements = document.querySelectorAll('.grid-cell')

for (let index = 0; index < cellElements.length; index += 1) {
    let cellElement = cellElements[index]
    cellElement.addEventListener('click', function () {
        console.log('Player clicked on cell ' + cellElement.id)
        cellElement.innerHTML = currentPlayer

        if (currentPlayer === 'X') {
            playerXSelections.push(Number(cellElement.id))
            currentPlayer = 'O'
        } else if (currentPlayer === 'O') {
            playerOSelections.push(Number(cellElement.id))
            currentPlayer = 'X'
        }
        //let winningCombinations = [
         //   [1, 2, 3],
        //    [4, 5, 6]
      // ]
       //playerXSelections = [4, 6, 2, 1, 5]
       

    })
}

function checkforWin () {
const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // Vertical Win Combos:
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // Diagonal Win Combos:
    [1, 5, 9],
    [3, 5, 7],
].
    
        //return true;
       console.log('checkForWin')
}

