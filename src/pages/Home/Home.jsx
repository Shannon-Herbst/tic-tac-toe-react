import React from 'react';
import {Subtitle, Title, Container} from '../../styles/General.Styled';
import Button from '../../Components/Button/Button';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</ Subtitle>
      <Button onClick={()=> navigate("/game-on")}>Play Now</Button>
    </Container>
  )
}

export default Home