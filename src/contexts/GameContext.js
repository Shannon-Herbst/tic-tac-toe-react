import { createContext, useState } from "react";
import { genConfig } from 'react-nice-avatar';

export const GameContext = createContext();
export const TURN_SECONDS = 10;

const emptyBoard = () => [null, null, null, null, null, null, null, null, null];

const createInitialGame = () => ({
    board: emptyBoard(),
    player1: {
        choice: "x",
        name: "player1",
        score: 0,
        color: "yellow",
        avatarConfig: genConfig()
    },
    player2: {
        choice: "o",
        name: "player2",
        score: 0,
        color: "purple",
        avatarConfig: genConfig()
    },
    turn: "x",
    roundWinner: "",
    isRoundOver: false,
    endedByTimeout: false
});

export const GameContextProvider = (props) => {
    const [game, setGame] = useState(createInitialGame);

    const updateBoard = (index) => {
        setGame((prevGame) => {
            if (prevGame.isRoundOver || prevGame.board[index] !== null) {
                return prevGame;
            }
            const updatedBoard = [...prevGame.board];
            updatedBoard[index] = prevGame.turn;
            return {
                ...prevGame,
                board: updatedBoard,
                turn: prevGame.turn === "x" ? "o" : "x"
            };
        });
    };

    const resetBoard = () => {
        setGame((prevGame) => ({
            ...prevGame,
            board: emptyBoard(),
            turn: "x",
            isRoundOver: false,
            endedByTimeout: false
        }));
    };

    const restartGame = () => {
        setGame(createInitialGame());
    };

    const toggleChoice = (choice) => (choice === "x" ? "o" : "x");

    const applyRoundResult = (prevGame, winner, endedByTimeout = false) => {
        const player1 = {
            ...prevGame.player1,
            choice: toggleChoice(prevGame.player1.choice)
        };
        const player2 = {
            ...prevGame.player2,
            choice: toggleChoice(prevGame.player2.choice)
        };

        if (winner === "draw") {
            player1.score += 0.5;
            player2.score += 0.5;
        } else {
            if (winner === "player1") {
                player1.score += 1;
            } else {
                player2.score += 1;
            }
        }

        return {
            ...prevGame,
            player1,
            player2,
            turn: "x",
            roundWinner: winner === "draw" ? "" : prevGame[winner],
            isRoundOver: true,
            endedByTimeout
        };
    };

    // winner is "player1" | "player2" | "draw"
    const roundComplete = (winner, endedByTimeout = false) => {
        setGame((prevGame) => {
            if (prevGame.isRoundOver) {
                return prevGame;
            }
            return applyRoundResult(prevGame, winner, endedByTimeout);
        });
    };

    const handleTurnTimeout = () => {
        setGame((prevGame) => {
            if (prevGame.isRoundOver) {
                return prevGame;
            }
            const winner =
                prevGame.turn === prevGame.player1.choice ? "player2" : "player1";
            return applyRoundResult(prevGame, winner, true);
        });
    };

    const resetGame = () => {
        setGame((prevGame) => ({
            ...prevGame,
            board: emptyBoard(),
            player1: {
                ...prevGame.player1,
                choice: "x",
                score: 0
            },
            player2: {
                ...prevGame.player2,
                choice: "o",
                score: 0
            },
            turn: "x",
            roundWinner: "",
            isRoundOver: false,
            endedByTimeout: false
        }));
    };

    return (
        <GameContext.Provider
            value={{
                game,
                setGame,
                updateBoard,
                resetBoard,
                roundComplete,
                handleTurnTimeout,
                resetGame,
                restartGame
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;