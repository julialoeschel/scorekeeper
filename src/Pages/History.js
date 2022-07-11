import styled from "styled-components";
import Navigation from "../components/Navigation";

export default function History({ historyData }) {
  return (
    <>
      <h2>History</h2>
      {historyData &&
        historyData.map((game) => {
          return (
            <>
              {
                <>
                  <h2>{game[0] ? game[0].game : `spiel ohne Namen`}</h2>
                  <ul>
                    {game.map((player) => {
                      return (
                        <li key={player.name}>
                          {player.name} score: {player.score}
                        </li>
                      );
                    })}
                  </ul>
                </>
              }
            </>
          );
        })}
      <Navigation />
    </>
  );
}
