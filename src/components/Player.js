import { useState } from "react";
import styled from "styled-components";
import PlayerButton from "./PlayerButton";

export default function Player({ player, onScoreChange }) {
  function handleCLick(winOrLoose) {
    winOrLoose.children === "+"
      ? onScoreChange(player.score + 1, player.id)
      : onScoreChange(player.score - 1, player.id);
  }

  return (
    <ListElement>
      {player.name}
      <PlayerButton onClick={handleCLick}>+</PlayerButton>
      <StyledSpan>{player.score}</StyledSpan>
      <PlayerButton onClick={handleCLick}>-</PlayerButton>
    </ListElement>
  );
}

const ListElement = styled.li`
  background-color: AliceBlue;
  list-style: none;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 40px 40px 40px;
`;

const StyledSpan = styled.span`
  justify-self: center;
`;
