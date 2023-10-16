const gameBoard = (function () {
    const gameBoardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return { gameBoardArray };
})();

function createPlayer(name, marker) {
    // function markSpot (marker) {
    // gameBoardFirstColumn.addEventListener('click', toggleMarker);

    // function toggleMarker() {
    // gameBoardFirstColumn.textContent = marker;
    // }
    // }

    // return { name, marker, markSpot };
    return { name, marker };
}

// maybe something that creates player objects using typed input from users?
// read input from user, create object using inputs. Player 1 is first input, player 2 is second input.

player1 = createPlayer("Mark", "X");
player2 = createPlayer("Someone", "O");
console.log(player1);
console.log(player2);

const displayController = (function () {
    let firstPlayerTurn = true;

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
        if (firstPlayerTurn == true) {
            first.textContent = "X";
            gameBoard.gameBoardArray[0] = "X";
            firstPlayerTurn = false;
        }
        else {
            first.textContent = "O";
            gameBoard.gameBoardArray[0] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleSecondMarker() {
        if (firstPlayerTurn == true) {
            second.textContent = "X";
            gameBoard.gameBoardArray[1] = "X";
            firstPlayerTurn = false;
        }
        else {
            second.textContent = "O";
            gameBoard.gameBoardArray[1] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleThirdMarker() {
        if (firstPlayerTurn == true) {
            third.textContent = "X";
            gameBoard.gameBoardArray[2] = "X";
            firstPlayerTurn = false;
        }
        else {
            third.textContent = "O";
            gameBoard.gameBoardArray[2] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleFourthMarker() {
        if (firstPlayerTurn == true) {
            fourth.textContent = "X";
            gameBoard.gameBoardArray[3] = "X";
            firstPlayerTurn = false;
        }
        else {
            fourth.textContent = "O";
            gameBoard.gameBoardArray[3] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleFifthMarker() {
        if (firstPlayerTurn == true) {
            fifth.textContent = "X";
            gameBoard.gameBoardArray[4] = "X";
            firstPlayerTurn = false;
        }
        else {
            fifth.textContent = "O";
            gameBoard.gameBoardArray[4] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleSixthMarker() {
        if (firstPlayerTurn == true) {
            sixth.textContent = "X";
            gameBoard.gameBoardArray[5] = "X";
            firstPlayerTurn = false;
        }
        else {
            sixth.textContent = "O";
            gameBoard.gameBoardArray[5] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleSeventhMarker() {
        if (firstPlayerTurn == true) {
            seventh.textContent = "X";
            gameBoard.gameBoardArray[6] = "X";
            firstPlayerTurn = false;
        }
        else {
            seventh.textContent = "O";
            gameBoard.gameBoardArray[6] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleEighthMarker() {
        if (firstPlayerTurn == true) {
            eighth.textContent = "X";
            gameBoard.gameBoardArray[7] = "X";
            firstPlayerTurn = false;
        }
        else {
            eighth.textContent = "O";
            gameBoard.gameBoardArray[7] = "O";
            firstPlayerTurn = true;
        }
    }

    function toggleNinthMarker() {
        if (firstPlayerTurn == true) {
            ninth.textContent = "X";
            gameBoard.gameBoardArray[8] = "X";
            firstPlayerTurn = false;
        }
        else {
            ninth.textContent = "O";
            gameBoard.gameBoardArray[8] = "O";
            firstPlayerTurn = true;
        }
    }

})();

//I am aware that I am repeating code.
//I will look into making it more DRY in the future.

// if (gameBoard.gameBoardArray[0] == 'X' && gameBoard.gameBoardArray[1] == 'X' && gameBoard.gameBoardArray[2] == 'X') {
//     console.log("X wins");
// }



