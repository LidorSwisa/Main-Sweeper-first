'use strict'

// function buildBoard(size) {
//     var board = []
//     for (var i = 0; i < size; i++) {
//         board[i] = []
//         for (var j = 0; j < size; j++) {


//             board[i][j] = cell
//             // board[i][j].isMine=true
//             // board[i][j].isMine = true
//             if (board[i][j].isMine) {
//                 board[i][j] = gMain

//             }

//         }
//     }
//     // console.log(board[i][j]);
//     board[3][3].isMine = true
//     board[2][2].isMine = true
//     board[1][1].isMine = true
//     if (board[3][3].isMine) {
//         board[3][3] = gMain
//         board[2][2] = gMain
//         board[1][1] = gMain
//     }
//     // console.log(board);
//     return board
// }



function cellClicked(elCell, num) {
    console.log(elCell.dataset, num);
    if (+elCell.dataset.num === gNextNum) {
        if (gNextNum === 1) startTimer()
        elCell.classList.add('clicked')
        gNextNum++
        if (gNextNum >= gSize) stopTimer()
        renderNextNum()
    }
}

function startTimer() {
    gStartTime = Date.now()
    gTimeInterval = setInterval(updateTimer, 100)

}

function updateTimer() {
    var diff = Date.now() - gStartTime
    var inSeconds = (diff / 1000).toFixed(3)
    document.querySelector('.timer').innerText = inSeconds
}

function stopTimer() {
    clearInterval(gTimeInterval)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function renderBoard(board, selector) {
    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}



function setMinesNegsCount(board, rowIdx, colIdx) {
    var MinesCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            var currCell = board[i][j]
            if (currCell.isMine) MinesCount++
        }
    }
    return MinesCount
}