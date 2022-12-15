import "./StartMenu.css";

import { createInitialScore } from "../../helpers/helpers"

const StartMenu = ({ setSelectingPlayers, setNumberOfPlayers, setPlayerScore, setPlaying }) => {
  function handlePlayerSelect(e) {
    setNumberOfPlayers(e.target.id);
    setPlayerScore(createInitialScore(e.target.id));
    setSelectingPlayers(false)
    setPlaying(true);
  }
  return (
    <div className="starting-menu-wrapper">
      <div className="starting-heading-wrapper">
        <h1>Select number of players</h1>
      </div>
      <div className="starting-buttons">
        <button
          id={1}
          className="start-button"
          onClick={(e) => handlePlayerSelect(e)}
        >
          1
            </button>
        <button
          id={2}
          className="start-button"
          onClick={(e) => handlePlayerSelect(e)}
        >
          2
            </button>
        <button
          id={3}
          className="start-button"
          onClick={(e) => handlePlayerSelect(e)}
        >
          3
            </button>
        <button
          id={4}
          className="start-button"
          onClick={(e) => handlePlayerSelect(e)}
        >
          4
            </button>
      </div>
    </div>
  );
};

export default StartMenu;
