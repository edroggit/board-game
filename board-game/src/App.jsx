import './App.css'
import { useState } from "react";

import StartMenu from "./components/game-menus/StartMenu";
import Board from "./components/board/Board";

function App() {
  const [winnerMenu, setWinnerMenu] = useState(false)
  const [menu, setMenu] = useState({
    selectingPlayers: true,
    playing: false
  })
  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [playerScore, setPlayerScore] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  return (
    <div className="container">
      {
        menu.selectingPlayers && (
          <StartMenu
            setNumberOfPlayers={setNumberOfPlayers} setPlayerScore={setPlayerScore} menu={menu} setMenu={setMenu} selectedCards={selectedCards} setSelectedCards={setSelectedCards}
          />
        )
      }
      {
        menu.playing && (
          <Board playerScore={playerScore} setPlayerScore={setPlayerScore} numberOfPlayers={numberOfPlayers} selectedCards={selectedCards} winnerMenu={winnerMenu} setWinnerMenu={setWinnerMenu} />
        )
      }
    </div>
  )
}

export default App
