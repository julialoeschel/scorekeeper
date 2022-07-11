import Player from "../components/Player";
import PlayerName from "../components/PlayerName";
import styled from "styled-components";
import Navigation from "../components/Navigation";

export default function Home({
  players,
  game,
  onNameSet,
  onScoreChange,
  onReset,
  onEndGame,
}) {
  return (
    <>
      <StyledHeading>ScoreKeeper</StyledHeading>
      <StyledGameName>{game}</StyledGameName>
      <ListofPlayers>
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            score={player.score}
            onScoreChange={onScoreChange}
          ></Player>
        ))}
      </ListofPlayers>
      <EndGameButton onClick={onEndGame}>End Game</EndGameButton>
      <ResetButton onClick={onReset}>reset</ResetButton>
      <PlayerName onNameSet={onNameSet}></PlayerName>
      <Navigation />
    </>
  );
}
const ListofPlayers = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResetButton = styled.button`
  padding: 25px 18px;
  position: fixed;
  right: 30px;
  bottom: 90px;
  border-radius: 50%;
  border: none;
  background-color: white;
  box-shadow: gray 0px 5px 15px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const EndGameButton = styled.button`
  padding: 50px 30px;
  position: fixed;
  left: 50px;
  bottom: 90px;
  border-radius: 50%;
  border: none;
  background-color: white;
  box-shadow: gray 0px 5px 15px;

  &:hover {
    background-color: lightcoral;
  }
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: lightcoral;
`;

const StyledGameName = styled.h2`
  padding: 0 20px;
  color: lightcoral;
`;
