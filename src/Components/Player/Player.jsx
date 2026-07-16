import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.Styled';
import Avatar, { genConfig } from 'react-nice-avatar';
import { Text } from '../../styles/General.Styled';

function Player({ player, isPlayerActive }) {

  const config = genConfig() 

  return (
    <PlayerWrapper >
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar style={{ width: '8rem', height: '8rem' }} {...player.avatarConfig} />
      </AvatarWrapper>
    <Text>{player.name} ({player.choice.toUpperCase()})</Text>
    <Text>{player.score}</Text>
    </PlayerWrapper>
  )
}

export default Player