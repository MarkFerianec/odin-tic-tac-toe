const gameBoard = (function () {
    const gameBoardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return { gameBoardArray };
})();

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

const displayController = (function () {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');
    const seventh = document.querySelector('.seventh');
    const eighth = document.querySelector('.eighth');
    const ninth = document.querySelector('.ninth');

    first.textContent = gameBoard.gameBoardArray[0];
    second.textContent = gameBoard.gameBoardArray[1];
    third.textContent = gameBoard.gameBoardArray[2];
    fourth.textContent = gameBoard.gameBoardArray[3];
    fifth.textContent = gameBoard.gameBoardArray[4];
    sixth.textContent = gameBoard.gameBoardArray[5];
    seventh.textContent = gameBoard.gameBoardArray[6];
    eighth.textContent = gameBoard.gameBoardArray[7];
    ninth.textContent = gameBoard.gameBoardArray[8];

    first.addEventListener('click', toggleFirstMarker);
    second.addEventListener('click', toggleSecondMarker);
    third.addEventListener('click', toggleThirdMarker);
    fourth.addEventListener('click', toggleFourthMarker);
    fifth.addEventListener('click', toggleFifthMarker);
    sixth.addEventListener('click', toggleSixthMarker);
    seventh.addEventListener('click', toggleSeventhMarker);
    eighth.addEventListener('click', toggleEighthMarker);
    ninth.addEventListener('click', toggleNinthMarker);

    function toggleFirstMarker() {
        first.textContent = "X";
        gameBoard.gameBoardArray[0] = "X";
    }

    function toggleSecondMarker() {
        second.textContent = "X";
        gameBoard.gameBoardArray[1] = "X";
    }

    function toggleThirdMarker() {
        third.textContent = "X";
        gameBoard.gameBoardArray[2] = "X";
    }

    function toggleFourthMarker() {
        fourth.textContent = "X";
        gameBoard.gameBoardArray[3] = "X";
    }

    function toggleFifthMarker() {
        fifth.textContent = "X";
        gameBoard.gameBoardArray[4] = "X";
    }

    function toggleSixthMarker() {
        sixth.textContent = "X";
        gameBoard.gameBoardArray[5] = "X";
    }

    function toggleSeventhMarker() {
        seventh.textContent = "X";
        gameBoard.gameBoardArray[6] = "X";
    }

    function toggleEighthMarker() {
        eighth.textContent = "X";
        gameBoard.gameBoardArray[7] = "X";
    }

    function toggleNinthMarker() {
        ninth.textContent = "X";
        gameBoard.gameBoardArray[8] = "X";
    }

})();

//I am aware that I am repeating code.
//I will look into making it more DRY in the future.

// if (gameBoard.gameBoardArray[0] == 'X' && gameBoard.gameBoardArray[1] == 'X' && gameBoard.gameBoardArray[2] == 'X') {
//     console.log("X wins");
// }



