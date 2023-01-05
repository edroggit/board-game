import "./StartMenu.css";
import { useState } from "react";
import { createInitialScore } from "../../helpers/helpers"

import allCards from "../../data/allcards"

const StartMenu = ({ setSelectingPlayers, setNumberOfPlayers, setPlayerScore, setPlaying, setMenu, selectedCards, setSelectedCards }) => {
  const [selectionMenu, setSelectionMenu] = useState({ playerSelect: true, cardSelect: false })
  const [numOfCardsSelected, setNumOfCardsSelected] = useState(0)
  const [disableButton, setDisableButton] = useState(true)

  function handlePlayerSelect(e) {
    setNumberOfPlayers(e.target.id);
    setPlayerScore(createInitialScore(e.target.id));
    setSelectionMenu({ playerSelect: false, cardSelect: true })
  }

  function handleCardSelect(position) {

    const newCards = [...selectedCards]
    const indexOfSelectedCard = newCards.indexOf(allCards[position - 1])

    if (indexOfSelectedCard === -1) {
      newCards.push(allCards[position - 1])
    } else {
      newCards.splice(indexOfSelectedCard, 1)
    }

    setNumOfCardsSelected(newCards.length)
    setSelectedCards(newCards)

    if (newCards.length === 24) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }

  function handleSubmit() {
    setMenu({
      selectingPlayers: false,
      playing: true
    })
  }

  return (
    <>
      {
        selectionMenu.playerSelect && (
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
        )
      }
      {
        selectionMenu.cardSelect && (
          <>
            <ul className="card-selection-wrapper">
              {allCards.map((card) => {
                const { id, cardDetail } = card
                return (
                  <div key={id} className="card-selector" onClick={() => handleCardSelect(id)}>{cardDetail}</div>
                )
              })}
            </ul>
            <div>You have selected: {numOfCardsSelected} cards</div>
            <button disabled={disableButton} onClick={handleSubmit}>Select cards</button>
          </>
        )
      }

    </>
  );
};

export default StartMenu;
