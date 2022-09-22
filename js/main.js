'use strict'



// Step1 – the seed app:
// 1. Create a 4x4 gBoard Matrix containing Objects. Place 2 mines 
// manually when each cell’s isShown set to true. 
// 2. Present the mines using renderBoard() function.

// Step2 – counting neighbors:
// 1. Create setMinesNegsCount() and store the numbers 
// (isShown is still true)
// 2. Present the board with the neighbor count and the mines 
// using renderBoard() function.
// 3. Have a console.log presenting the board content – to help 
// you with debugging

// Step3 – click to reveal:
// 1. When clicking a cell, call the cellClicked() function.
// 2. Make the default “isShown” to be “false”
// 3. Implement that clicking a cell with “number” reveals the 
// number of this cell

// Step4 – randomize mines' location:
// 1. Randomly locate the 2 mines on the board
// 2. Present the mines using renderBoard() function.

// var cell = {
//     minesAroundCount: 4,
//     isShown: false,
//     isMine: false,
//     isMarked: true

// }
const gmin = '💥'
const gflage = '🚩'

var gLevel = {
    SIZE: 4,
    MINES: 2
};
var gStartTime
var gTimeInterval

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
var gBoard

function initGame(size, mines) {
    
    gLevel.SIZE = size
    gLevel.MINES = mines
    resetEvrutung()
    
    
    gBoard = buildBoard(gLevel.SIZE);
    renderBoard(gBoard, '.board');
   
}


function buildBoard(size) {
    const board = [];
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            const cell = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false

            }
            board[i][j] = cell
        }
    }

    // board[0][0].isMine = true
    // board[3][2].isMine = true
    // // board[0][0].isShown = true
    // board[3][2].isShown = true

    RendomMinesCell(board, gLevel.MINES)
    console.log(board);
    return board;
}



function renderBoard(board, selector) {
    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>\n'
        for (var j = 0; j < board[0].length; j++) {

            var cell = ''
            const className = `cell-cell-${i}-${j}`
            var res = setMinesNegsCount(board, i, j)
            // board[i][j].minesAroundCount = res
            // if (board[i][j].isMine && board[i][j].isShown) cell = gmin
            // else if (res < 8) cell = res
            // console.log(res);

            strHTML += `<td class="${className}"
            onclick="cellClicked(this,${i},${j})">
            ${cell}</td>`
        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody></table>'
    // console.log(board);

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}



function cellClicked(elCell, i, j,) {
    
    if (gGame.isOn) {
        if (!gStartTime) startTimer()

        

        
        if (!gBoard[i][j].isShown) {
            gBoard[i][j].isShown = true
            gGame.shownCount++
            
            // Model:
            if (gBoard[i][j].isMine) {
                // gBoard[i][j] = gmin
                elCell.innerText = gmin
                checkGameOver(gBoard[i][j].isMine)
                gGame.markedCount++
                gGame.shownCount--
            }
            else if (elCell.innerText = gBoard[i][j].minesAroundCount !== 0) {
                elCell.innerText = gBoard[i][j].minesAroundCount
            }
            else {
                elCell.innerText = gBoard[i][j].minesAroundCount
            }
            // Dom:
        }
        
        checkGameOver()
        
    }
}



function cellMarked(elCell) {
    // var temp = elCell.i
    console.log(elCell);

}


function checkGameOver(lose) {
    var sizetobe = gLevel.SIZE * gLevel.SIZE
    // console.log(sizetobe);
    var min = gLevel.MINES
    // console.log(min);
    if (gGame.shownCount === (sizetobe - min) ) {
        console.log('winner');
        gGame.isOn = false
        stopTimer()
        return true


    }
    if (lose) {
        console.log('loser');
        stopTimer()
        gGame.isOn = false
    }
}

// function expandShown(board, elCell, i, j) {

// }


function setMinesNegsCount(board, rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j]
            if (currCell.isMine) count++

        }
    }
    board[rowIdx][colIdx].minesAroundCount = count
   
    return count
}


function expandShown(board, elCell, rowIdx, colIdx) {
    // for (var rowIdx = i - 1; rowIdx < i + 1; rowIdx++) {
    //     if (i < 0 || i >= board.length) continue
    //     for (var colIdx = j - 1; colIdx < i + 1; colIdx++) {
    //         if (i === rowIdx && j === colIdx) continue
    //         if (j < 0 || j >= board[0].length) continue
    //         elCell.innerText = board[i][j].minesAroundCount
    //     }
    // }
    // for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    //     if (i < 0 || i >= board.length) continue
    //     for (var j = colIdx - 1; j <= colIdx + 1; j++) {
    //         if (i === rowIdx && j === colIdx) continue
    //         if (j < 0 || j >= board[0].length) continue
    //         elCell.innerText = board[i][j].minesAroundCount


    //     }
    // }
    // if(i>=gLevel.SIZE||i<0||j<0||j>=gLevel.SIZE){
    //     // elCell.innerText=gBoard[i][j].minesAroundCount
    //     return
    // }
    // else{


    // if(i>=gLevel.SIZE){
    //     elCell.innerText=gBoard[i][j].minesAroundCount
    //     setMinesNegsCount(board, i, j+1) 
    // }
    // if(j>=gLevel.SIZE){
    //     elCell.innerText=gBoard[i][j].minesAroundCount
    //     setMinesNegsCount(board, i+1, j) 
    // }
}


function RendomMinesCell(board, NumOfMines) {
    while (NumOfMines !== 0) {
        var res = board[getRandomIntInclusive(0, gLevel.SIZE - 1)][getRandomIntInclusive(0, gLevel.SIZE - 1)]
        // console.log(res);
        if (!res.isMine) {
            board[getRandomIntInclusive(0, gLevel.SIZE - 1)][getRandomIntInclusive(0, gLevel.SIZE - 1)].isMine = true
            // console.log(board);
            NumOfMines--
        }
    }

}


function restat(elCell) {
    if (checkGameOver()) {
        
        elCell.innerText = '😎'
        
    }
    else {
        elCell.innerText = '🤯'
    }
    
    resetEvrutung()
    initGame(gLevel.SIZE, gLevel.MINES)
    stopTimer()

}
function updateTimer() {
    var diff = Date.now() - gStartTime
    var inSeconds = (diff / 1000).toFixed(3)
    document.querySelector('.timer').innerText = 'Game Time:\n' + inSeconds
}

function startTimer() {
    gStartTime = Date.now()
    gTimeInterval = setInterval(updateTimer, 100)

}
function stopTimer() {
    gStartTime = 0
    
    clearInterval(gTimeInterval)
}
function resetEvrutung(){
    // document.querySelector('.button').innerText= '😀'
    // elCell.innerText = '😀'
    gGame.markedCount = 0
    gGame.shownCount = 0
    gGame.isOn = true
        document.querySelector('.timer').innerText ='Game Time:\n'+'0'
            // document.querySelector('.restat').innerText ='😀'


}

