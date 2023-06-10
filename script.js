// use constant because board size does not change during our program
const BOARD_SIZE = 4

let board = [];

// Initialize board to a multidimentional array with nested arrays representing rows
function initializeBoard(){
    for(let i = 0; i < BOARD_SIZE; i++){
        let row = []
        for(let j = 0; j < BOARD_SIZE; j++){
            row.push(0)
        }
        board.push(row)
    }
}

// Custom printBoard function to increase readability of our board
function printBoard(){
    board.forEach((row) => {
        console.log(row.join(" "))
    })
}

// function to generate a random tile on our board
function generatedRandomTile() {
    // Create empty array 'emptyCells'
    // Iterate throguh the board
        // If board at the cell is 0
            // Add cell coordinates to emptyCells
    // We use Math.random() to choose a random index in the emptyCells array
    // Using the random index, choose a random cell coordinate
    // Insert a new tile into the empty cell
    // Using the random cell coordinate, insert new title into our game board

    let emptyCells = [];
    for (let y = 0; y < BOARD_SIZE; y++){
        for (let x = 0; x < BOARD_SIZE; x++){
            if (board[y][x] === 0){
                let coordinate = {
                    x: x,
                    y: y
                };
                emptyCells.push(coordinate)
            }
        }
    }
    let randomCellIndex = Math.floor(Math.random() * emptyCells.length)
    let randomCellCoordinate = emptyCells[randomCellIndex];
    board[randomCellCoordinate.y][randomCellCoordinate.x] = Math.random() < 0.9 ? 2 : 4;    
}

function main(){
    initializeBoard()
    generatedRandomTile()
    printBoard()
}

main()