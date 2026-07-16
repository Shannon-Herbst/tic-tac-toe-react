import React, { useContext } from 'react'
import { CellStyle } from './GameCell.Styled';
import { GameContext } from '../../contexts/GameContext';
import { checkForWinner } from '../../utils/GameUtils';
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from '../Modal/RoundOverModal';

function GameCell({ cellItem, index }) {
    const { updateBoard, game, roundComplete } = useContext(GameContext);
    const { handleModal } = useContext(ModalContext);

    const cellClickHandler = () => {
        if (game.board[index] !== null) return; // ignore clicks on filled cells

        // build the board as it WILL be, since setGame is async
        const updatedBoard = [...game.board];
        updatedBoard[index] = game.turn; // game.turn is the mark being placed now

        updateBoard(index); // this updates state + flips turn

        const result = checkForWinner(updatedBoard); // "x" | "o" | "draw" | false

        if (result) {
            const winner =
                result === "draw"
                    ? "draw"
                    : result === game.player1.choice
                    ? "player1"
                    : "player2";

            roundComplete(winner);
            handleModal(<RoundOverModal />);
        }
    };

    return (
        <CellStyle onClick={cellClickHandler}>{cellItem}</CellStyle>
    );
}

export default GameCell;