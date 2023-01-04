import "./StartMenu.css";
import { useState } from "react";
import { createInitialScore } from "../../helpers/helpers"

import allCards from "../../data/allcards"

const StartMenu = ({ setSelectingPlayers, setNumberOfPlayers, setPlayerScore, setPlaying }) => {
  const [checkedState, setCheckedState] = useState(allCards);
  let [numOfCardsSelected, setNumOfCardsSelected] = useState(0)
  const [disableButton, setDisableButton] = useState(true)

  function handlePlayerSelect(e) {
    setNumberOfPlayers(e.target.id);
    setPlayerScore(createInitialScore(e.target.id));
    setSelectingPlayers(false)
    setPlaying(true);
  }

  function handleCardSelect(position) {
    let updateCheckedState = [...checkedState]
    position = position - 1;
    updateCheckedState[position].selected = !updateCheckedState[position].selected;
    if (updateCheckedState[position].selected === true) {
      numOfCardsSelected++
    } else {
      numOfCardsSelected--
    }

    if (numOfCardsSelected === 3) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
    setNumOfCardsSelected(numOfCardsSelected)
    setCheckedState(updateCheckedState);
  }
  return (
    <>
      {/* <div className="starting-menu-wrapper">
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
      </div> */}
      <ul className="card-selection-wrapper">
        {allCards.map((card) => {
          const { id, cardDetail } = card
          return (
            <div key={id} className="card-selector" onClick={() => handleCardSelect(id)}>{id}</div>
          )
        })}
      </ul>
      <div>You have selected: {numOfCardsSelected} cards</div>
      <button disabled={disableButton}>Select cards</button>


    </>
  );
};

export default StartMenu;
