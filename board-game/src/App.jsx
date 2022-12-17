import './App.css'
import { useState } from "react";

import StartMenu from "./components/game-menus/StartMenu";
import Board from "./components/board/Board"


import Gameboard from "./components/Gameboard"


function App() {
  const [selectingPlayers, setSelectingPlayers] = useState(false);
  const [playing, setPlaying] = useState(false)
  const [winnerMenu, setWinnerMenu] = useState(false)


  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [playerScore, setPlayerScore] = useState([]);


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
