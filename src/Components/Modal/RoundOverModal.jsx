import React, { useContext } from 'react';
import { Title, Subtitle } from '../../styles/General.Styled';
import { ModalHeader, ModalBody, ModalFooter } from './Modal.Styled';
import Button from '../Button/Button';
import { GameContext } from '../../contexts/GameContext';
import { ModalContext } from '../../contexts/ModalContext';

function RoundOverModal() {
  const { resetBoard, resetGame, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const handleContinue = () => {
    handleModal();
    resetBoard();
  };

  const handleRestart = () => {
    handleModal();
    resetGame();
  };

  return (
    <>
      <ModalHeader>
        <Title primary>Round Complete</Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle primary>
          {game.roundWinner ? `${game.roundWinner.name} won this round` : "round drawn"}
        </Subtitle>
        <Subtitle primary>{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name} : {game.player2.score}</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button onClick={handleContinue}>Continue</Button>
        <Button onClick={handleRestart}>Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;