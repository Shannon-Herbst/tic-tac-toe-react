const checkForSequence = (option1, option2, option3) => {
    if(option1 === null || option2 === null || option3 === null){
        return false;
    }
    return option1 === option2 && option2 === option3
}

export const checkForWinner = (board) => {

    // check rows
    for(let i=0; i<9; i+=3) {
        if(checkForSequence(board[i], board[i+1], board[i+2])){
            console.log("row winner");
            return board[i]; // returns "x" or "o"
        }
    }

    // check columns
    for(let i=0; i<3; i+=1) {
        if(checkForSequence(board[i], board[i+3], board[i+6])){
            console.log("column winner");
            return board[i];
        }
    }

    // check diagonals
    if(checkForSequence(board[0], board[4], board[8])){
        console.log("diagonal winner");
        return board[0];
    }

    if(checkForSequence(board[2], board[4], board[6])){
        console.log("diagonal winner");
        return board[2];
    }

    // no winner - check for draw
    if(!board.includes(null)){
        return "draw";
    }

    // game still in progress
    return false;
}