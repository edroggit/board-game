import './App.css'
import { useState } from "react";

import StartMenu from "./components/game-menus/start-menu";
import { getRandomNumber } from "./helpers/helpers";

import DiceScore from "./components/board/dice-score/DiceScore"
import data from "./data/data";

import PlayerToken from "./components/board/player-token/PlayerToken";

import Board from "./components/board/Board"


function App() {
  const [selectingPlayers, setSelectingPlayers] = useState(true);
  const [playing, setPlaying] = useState(false)
  const [show, setShow] = useState(false);

  const [winner, setWinner] = useState();




  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [playerScore, setPlayerScore] = useState([]);


  return (
    <div className="container">
      {
        selectingPlayers && (
          <StartMenu
            setSelectingPlayers={setSelectingPlayers} setNumberOfPlayers={setNumberOfPlayers} setPlayerScore={setPlayerScore} setPlaying={setPlaying}
          />
        )
      }
      {
        playing && (
          <Board playerScore={playerScore} setPlayerScore={setPlayerScore} numberOfPlayers={numberOfPlayers} setShow={setShow} setWinner={setWinner} setPlaying={setPlaying} />
        )
      }

    </div>
  )
}

export default App
