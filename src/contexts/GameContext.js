import { createContext, useState } from "react";
import { genConfig } from 'react-nice-avatar';

export const GameContext = createContext();

export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board: [null, null, null, null, null, null, null, null, null],
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
        roundWinner: ""
    });

    const updateBoard = (index) => {
        const updatedBoard = [...game.board];
        updatedBoard[index] = game.turn;
        setGame({
            ...game,
            board: updatedBoard,
            turn: game.turn === "x" ? "o" : "x"
        });
    };

    const resetBoard = () => {
        setGame((prevGame) => ({
            ...prevGame,
            board: [null, null, null, null, null, null, null, null, null],
            turn: "x"
        }));
    };

    const restartGame = () => {
        setGame({
            board: [null, null, null, null, null, null, null, null, null],
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
        roundWinner: ""
        })
    }

    const toggleChoice = (choice) => (choice === "x" ? "o" : "x");

    const switchTurn = () => {
        setGame((prevGame) => ({
            ...prevGame,
            player1: {
                ...prevGame.player1,
                choice: toggleChoice(prevGame.player1.choice)
            },
            player2: {
                ...prevGame.player2,
                choice: toggleChoice(prevGame.player2.choice)
            },
            turn: "x",
            roundWinner: ""
        }));
    };

    const updateScore = (winner) => {
        if (winner === "draw") {
            setGame((prevGame) => ({
                ...prevGame,
                player1: {
                    ...prevGame.player1,
                    score: prevGame.player1.score + 0.5
                },
                player2: {
                    ...prevGame.player2,
                    score: prevGame.player2.score + 0.5
                },
                roundWinner: ""
            }));
        } else {
            setGame((prevGame) => ({
                ...prevGame,
                [winner]: {
                    ...prevGame[winner],
                    score: prevGame[winner].score + 1
                },
                roundWinner: prevGame[winner]
            }));
        }
    };

    // winner is "player1" | "player2" | "draw"
    const roundComplete = (winner) => {
        updateScore(winner);
        switchTurn();
    };

    const resetGame = () => {
        setGame((prevGame) => ({
            ...prevGame,
            board: [null, null, null, null, null, null, null, null, null],
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
            roundWinner: ""
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
                resetGame,
                restartGame
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;