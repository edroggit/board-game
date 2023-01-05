import { useState } from "react";
import './Board.css'
import data from "../../data/data";
import { getRandomNumber } from "../../helpers/helpers";

import DiceScore from "./dice-score/DiceScore"

import CardDetailDisplay from "./card-detail-display/CardDetailDisplay"
import WinnerMenu from "../game-menus/WinnerMenu";
import Gameboard from "../Gameboard";


const Board = ({ playerScore, setSelectingPlayers, setPlayerScore, numberOfPlayers, setPlaying, selectedCards, winnerMenu, setWinnerMenu }) => {
    const [playerTurn, setPlayerTurn] = useState(0);
    const [roll, setRoll] = useState(6);
    const [displayCard, setDisplayCard] = useState("");
    const [winner, setWinner] = useState();


    function rollDoubleDice(numberOfPlayers) {
        const role = getRandomNumber(1, 6);
        const newArray = [...playerScore];
        const oldScore = playerScore[playerTurn]["score"];
        const newScore = (playerScore[playerTurn].score += role);

        newArray[playerTurn] = { player: playerTurn, score: oldScore + role };
        if (newScore < 26) {
            setRoll(role);
            setPlayerScore(newArray);
            setDisplayCard(data[newScore - 1]["cardDetail"]);
            console.log("player", playerTurn);
            if (playerTurn + 1 < numberOfPlayers) {
                setPlayerTurn(playerTurn + 1);
            } else {
                setPlayerTurn(0);
            }
        } else {
            newArray[playerTurn] = { player: playerTurn, score: 26 }
            setPlayerScore(newArray)
            setWinner(playerTurn + 1);
            setPlayerTurn(0);
            // setRoll(0);
            // setDisplayCard(data[0]["cardDetail"]);
            setWinnerMenu(true)
        }
    }

    return (
        <div className="board-wrapper">
            <div className="card-detail-container">
                {winnerMenu !== true ?
                    <div className="card-details">
                        <button className="dice-button" onClick={() => rollDoubleDice(numberOfPlayers)}>
                            Roll
                    </button>
                        <DiceScore roll={roll} />
                    </div>
                    : <WinnerMenu winner={winner} setWinnerMenu={setWinnerMenu} setPlayerScore={setPlayerScore} setSelectingPlayers={setSelectingPlayers} setPlaying={setPlaying} />}
            </div>
            <Gameboard playerScore={playerScore} />
            <div className="card-detail-container">
                <div className="card-details">
                    <div className="player-turn">Player: {playerTurn + 1}</div>
                    <CardDetailDisplay displayCard={displayCard} />
                </div>
            </div>
        </div >
    )
}

export default Board;