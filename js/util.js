// function setMinesNegsCount(board, rowIdx, colIdx) {
    //     var temp=board[rowIdx][colIdx]
    //     console.log(temp);
    //     for (var i = rowIdx ; i <= rowIdx + 2; i++) {
    //         if (i < 0 || i >= board.length) continue
    
    //         for (var j = colIdx; j <= colIdx + 2; j++) {
    //             if (j < 0 || j >= board[0].length) continue
    //             if (i === rowIdx && j === colIdx) continue
    
    //             // board[i][j].minesAroundCount = emptyMinessCount
    
    //             var emptyMinessCount = 0
    //             var currCell = board[i][j]
    //             if (currCell.isMine ) {
    //                 emptyMinessCount++
    //                board[i][j].minesAroundCount = board[i][j].minesAroundCount+1
    //                     console.log(board[i][j].minesAroundCount);
    //             }
    
    //             // board[i][j].minesAroundCount = emptyMinessCount
    //             if(i===0&&j===1)console.log(board[0][1].minesAroundCount);
    //         }
    //     }
    //     // console.log(board);
    //     return emptyMinessCount
    // }


    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    
    