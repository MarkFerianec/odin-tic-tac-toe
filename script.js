const gameBoard = (function () {
    const gameBoardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return { gameBoardArray };
})();

const gameBoardDisplay = document.querySelector('.gameboard');
const gameBoardFirstColumn = document.querySelector('.firstcolumn');
const gameBoardSecondColumn = document.querySelector('.secondcolumn');
const gameBoardThirdColumn = document.querySelector('.thirdcolumn');

const displayController = (function () {
    for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
        const div = document.createElement('div');
        div.style.padding = '50px';
        div.textContent = gameBoard.gameBoardArray[i];
        console.log(gameBoard.gameBoardArray[i]);
        if (i < 3) {
            gameBoardFirstColumn.appendChild(div)
        }
        else if (i < 6) {
            gameBoardSecondColumn.appendChild(div);
        }
        else {
            gameBoardThirdColumn.appendChild(div);
        }
    }
})();

