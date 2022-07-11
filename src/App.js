import "./App.css";
import Home from "./Pages/Home";
import History from "./Pages/History";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import NewGame from "./Pages/NewGame";

function App() {
  const [historyData, setHistoryData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState([]);
  let navigate = useNavigate();

  function handleNameSet(newName) {
    setPlayers([
      ...players,
      { game: game, name: newName, id: newName, score: 0 },
    ]);
  }

  function handleScoreChange(newscore, id) {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, score: newscore } : player
      )
    );
  }

  function handleReset() {
    setPlayers(players.map((player) => ({ ...player, score: 0 })));
  }

  function handleEndGame() {
    setHistoryData([...historyData, players]);
    setPlayers([]);
    navigate("/");
  }

  function handleGameInput(gamename, playersArray) {
    setGame(gamename);
    const names = playersArray.split(",");
    const namesarray = names.map((name) => name.trim());

    setPlayers(
      namesarray.map((name) => ({ game: game, name: name, id: name, score: 0 }))
    );

    navigate("/home");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<NewGame onGameInput={handleGameInput} />} />

        <Route
          path="home"
          element={
            <Home
              players={players}
              game={game}
              onNameSet={handleNameSet}
              onScoreChange={handleScoreChange}
              onReset={handleReset}
              onEndGame={handleEndGame}
            />
          }
        />
        <Route path="history" element={<History historyData={historyData} />} />
      </Routes>
    </>
  );
}

export default App;
