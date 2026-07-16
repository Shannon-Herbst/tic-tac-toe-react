import React, { useContext } from 'react'
import { CellStyle } from './GameCell.Styled';
import { GameContext } from '../../contexts/GameContext';
import { checkForWinner } from '../../utils/GameUtils';
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from '../Modal/RoundOverModal';
import { SoundEffectContext } from '../../contexts/SoundEffectsContexts';

function GameCell({ cellItem, index }) {
    const { updateBoard, game, roundComplete } = useContext(GameContext);
    const { hoverSfx } = useContext(SoundEffectContext);
    const { handleModal } = useContext(ModalContext);

    const cellClickHandler = () => {
        if (game.board[index] !== null) return; 

        const updatedBoard = [...game.board];
        updatedBoard[index] = game.turn; 

        updateBoard(index); 

        const result = checkForWinner(updatedBoard); 

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
        <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>{cellItem}</CellStyle>
    );
}

export default GameCell;