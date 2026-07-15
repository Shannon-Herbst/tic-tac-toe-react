import React, { useContext } from 'react';
import {Container} from "../../styles/General.Styled"
import { GameBoardStyle } from './Game.Styled';
import GameCell from '../../Components/GameCell/GameCell';
import { GameContext } from '../../contexts/GameContext';

function Game() {
  const {game} = useContext(GameContext)
  
  return (
    <Container>
      <GameBoardStyle>
        {
          game.board.map((item,index) => (
            <GameCell cellItem={item} index={index}/>
          ))
        }
      </ GameBoardStyle>
    </Container>
  )
}

export default Game