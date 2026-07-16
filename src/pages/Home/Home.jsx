import React, { useContext } from 'react';
import {Subtitle, Title, Container} from '../../styles/General.Styled';
import Button from '../../Components/Button/Button';
import { useNavigate } from "react-router-dom";
import { SoundEffectContext } from '../../contexts/SoundEffectsContexts';

function Home() {
  const navigate = useNavigate();
  const {hoverSfx} = useContext(SoundEffectContext)
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</ Subtitle>
      <Button onClick={()=> navigate("/game-on")} onMouseEnter={() => hoverSfx()}>Play Now</Button>
    </Container>
  )
}

export default Home