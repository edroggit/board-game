import './App.css'
import { useState } from "react";

import StartMenu from "./components/game-menus/StartMenu";
import Board from "./components/board/Board"


import Gameboard from "./components/Gameboard"


function App() {
  const [selectingPlayers, setSelectingPlayers] = useState(true);
  const [playing, setPlaying] = useState(false)
  const [winnerMenu, setWinnerMenu] = useState(false)


  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [playerScore, setPlayerScore] = useState([]);

  console.log("playerScore", playerScore)


  return (
    <div className="container">
      <Gameboard />
      {
        selectingPlayers && (
          <StartMenu
            setSelectingPlayers={setSelectingPlayers} setNumberOfPlayers={setNumberOfPlayers} setPlayerScore={setPlayerScore} setPlaying={setPlaying}
          />
        )
      }
      {
        playing && (
          <Board playerScore={playerScore} setPlayerScore={setPlayerScore} numberOfPlayers={numberOfPlayers} setPlaying={setPlaying} winnerMenu={winnerMenu} setWinnerMenu={setWinnerMenu} />
        )
      }


    </div>
  )
}

export default App
