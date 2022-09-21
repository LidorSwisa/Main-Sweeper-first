'use strict'

var gLevel = {
    SIZE: 4,
    MINES: 2
   };

   var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
   }


   var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
   }
   
const gMain = '💥'

var cell = {
    isMine: false
}

var gboard=buildBoard(4)
function initGame() {
    // Model:
    // gBoard= buildBoard(4)
    // createPacman(gBoard)
    // createGhosts(gBoard)
    // gDeadGhosts = []
    
    // gGame.score = 0
    // gGame.isWin = false
    // gGame.foodCount = 0
    // gGame.isOn = true
    
    // Dom
    
    renderBoard(gboard, '.board')
    // document.querySelector('.modal').style.display = 'none'
    // document.querySelector('h2 span').innerText = gGame.score

    // gCherryInterval = setInterval(createCherry, 5000)
}



function buildBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {


            board[i][j] = gBoard
            // board[i][j].isMine=true
            // board[i][j].isMine = true
            if (board[i][j].isMine) {
                board[i][j] = gMain

            }

        }
    }
    // console.log(board[i][j]);
    board[3][3].isMine = true
    board[2][2].isMine = true
    board[1][1].isMine = true
    if (board[3][3].isMine) {
        board[3][3] = gMain
        board[2][2] = gMain
        board[1][1] = gMain
    }
    // console.log(board);
    return board
}
console.log(gboard);



function setMinesNegsCount(gboard, rowIdx, colIdx) {
    var MinesCount = 0
    console.log(gboard);
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gboard.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= gboard[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            var currCell = gboard[i][j]
            if (currCell.isMine) MinesCount++
        }
    }
    return MinesCount
}

var res= setMinesNegsCount(gBoard,0,1)

console.log(res)