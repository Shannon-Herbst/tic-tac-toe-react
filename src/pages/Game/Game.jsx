import React, { useContext, useEffect, useRef, useState } from 'react';
import {Container} from "../../styles/General.Styled"
import { GameBoardStyle, GameBoardWrapper } from './Game.Styled';
import GameCell from '../../Components/GameCell/GameCell';
import { GameContext, TURN_SECONDS } from '../../contexts/GameContext';
import { ModalContext } from '../../contexts/ModalContext';
import Player from '../../Components/Player/Player';
import Timer from '../../Components/Timer/Timer';
import RoundOverModal from '../../Components/Modal/RoundOverModal';

function Game() {
  const {game, handleTurnTimeout} = useContext(GameContext)
  const {modal, handleModal} = useContext(ModalContext)
  const [timeLeft, setTimeLeft] = useState(TURN_SECONDS)
  const canTimeout = useRef(false)

  const activePlayer = game.player1.choice === game.turn ? game.player1 : game.player2
  const boardKey = game.board.join(',')
  const roundLocked = modal || game.isRoundOver
  const slotId = roundLocked ? 'paused' : `${game.turn}-${boardKey}`
  const [activeSlotId, setActiveSlotId] = useState(slotId)

  if (activeSlotId !== slotId) {
    setActiveSlotId(slotId)
    if (!roundLocked) {
      setTimeLeft(TURN_SECONDS)
    }
  }

  useEffect(() => {
    if (modal || game.isRoundOver) {
      canTimeout.current = false
      return undefined
    }

    canTimeout.current = false
    setTimeLeft(TURN_SECONDS)

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          canTimeout.current = true
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      canTimeout.current = false
      clearInterval(interval)
    }
  }, [game.turn, boardKey, modal, game.isRoundOver])

  useEffect(() => {
    if (timeLeft > 0 || !canTimeout.current || modal || game.isRoundOver) {
      return
    }

    canTimeout.current = false
    handleTurnTimeout()
    handleModal(<RoundOverModal />)
  }, [timeLeft, modal, game.isRoundOver, handleTurnTimeout, handleModal])
  
  return (
    <Container>
      <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn}/>
      <GameBoardWrapper>
        <Timer key={slotId} timeLeft={roundLocked ? 0 : Math.max(0, timeLeft)} playerName={activePlayer.name} />
        <GameBoardStyle>
          {
            game.board.map((item,index) => (
              <GameCell cellItem={item} index={index} key={index}/>
            ))
          }
        </GameBoardStyle>
      </GameBoardWrapper>
      <Player player={game.player2} isPlayerActive={game.player2.choice === game.turn}/>
    </Container>
  )
}

export default Game
