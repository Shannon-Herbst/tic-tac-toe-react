import React from 'react';
import { TURN_SECONDS } from '../../contexts/GameContext';
import { TimerBarFill, TimerBarTrack, TimerLabel, TimerValue, TimerWrapper } from './Timer.Styled';

function Timer({ timeLeft, playerName }) {
  const urgent = timeLeft <= 3;
  const percent = Math.max(0, (timeLeft / TURN_SECONDS) * 100);

  return (
    <TimerWrapper>
      <TimerLabel>{playerName}'s turn</TimerLabel>
      <TimerValue urgent={urgent}>{timeLeft}s</TimerValue>
      <TimerBarTrack>
        <TimerBarFill percent={percent} urgent={urgent} />
      </TimerBarTrack>
    </TimerWrapper>
  );
}

export default Timer;
