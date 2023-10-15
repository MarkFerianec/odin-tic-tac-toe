const gameBoard = (function () {
    const gameBoardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return { gameBoardArray };
})();

// const gameBoardDisplay = document.querySelector('.gameboard');
// const gameBoardFirstColumn = document.querySelector('.firstcolumn');
// const gameBoardSecondColumn = document.querySelector('.secondcolumn');
// const gameBoardThirdColumn = document.querySelector('.thirdcolumn');

// function createPlayer(name, marker) {
//     // function markSpot (marker) {
//     // gameBoardFirstColumn.addEventListener('click', toggleMarker);

//     // function toggleMarker() {
//     // gameBoardFirstColumn.textContent = marker;
//     // }
//     // }

//     // return { name, marker, markSpot };
//     return { name, marker };
// }

// maybe something that creates player objects using typed input from users?
// read input from user, create object using inputs. Player 1 is first input, player 2 is second input.

// player1 = createPlayer("Mark", "X");
// player2 = createPlayer("Someone", "O");
// console.log(player1);
// console.log(player2);

// const displayController = (function () {
//     for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
//         const div = document.createElement('div');
//         div.style.padding = '50px';
//         div.textContent = gameBoard.gameBoardArray[i];
//         div.addEventListener('click', toggleMarker);

//         console.log(gameBoard.gameBoardArray[i]);

//         if (i < 3) {
//         gameBoardFirstColumn.appendChild(div)
//         }
//         else if (i < 6) {
//         gameBoardSecondColumn.appendChild(div);
//         }
//         else {
//         gameBoardThirdColumn.appendChild(div);
//         }
//         function toggleMarker() {
            
//             div.textContent = player1.marker;
//             // div.textContent = "X";
//         }
//     }
// })();



