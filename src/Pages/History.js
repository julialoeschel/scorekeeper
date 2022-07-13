import styled from "styled-components";
import Navigation from "../components/Navigation";

export default function History({ historyData }) {
  return (
    <>
      <StyledHeading>History</StyledHeading>
      {historyData &&
        historyData.map((game) => {
          return (
            <>
              {
                <>
                  <StyledGameName>
                    {game[0] ? game[0].game : `spiel ohne Namen`}
                  </StyledGameName>
                  <List>
                    {game.map((player) => {
                      return (
                        <ListElement key={player.name}>
                          <Score>{player.name} </Score>{" "}
                          <Score>score: {player.score}</Score>
                        </ListElement>
                      );
                    })}
                  </List>
                </>
              }
            </>
          );
        })}
      <Navigation />
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
  color: lightcoral;
`;

const StyledGameName = styled.h2`
  padding: 0 40px;
  color: lightcoral;
`;

const List = styled.ul`
  list-style: none;
  width: 70%;
`;

const ListElement = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Score = styled.span``;
