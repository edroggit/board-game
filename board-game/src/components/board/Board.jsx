import { useState } from "react";
import './Board.css'
import PlayerToken from "./player-token/PlayerToken"
import data from "../../data/data";
import { getRandomNumber } from "../../helpers/helpers";

import DiceScore from "./dice-score/DiceScore"

import CardDetailDisplay from "./card-detail-display/CardDetailDisplay"




const Board = ({ playerScore, setPlayerScore, numberOfPlayers, setShow, setWinner, setPlaying }) => {
    const [playerTurn, setPlayerTurn] = useState(0);
    const [roll, setRoll] = useState(6);
    const [displayCard, setDisplayCard] = useState("");




    function rollDoubleDice(numberOfPlayers) {
        const role = getRandomNumber(1, 6);
        const newArray = [...playerScore];
        const oldScore = playerScore[playerTurn]["score"];
        const newScore = (playerScore[playerTurn].score += role);

        newArray[playerTurn] = { player: playerTurn, score: oldScore + role };
        if (newScore < data.length - 1) {
            setRoll(role);
            setPlayerScore(newArray);
            setDisplayCard(data[newScore]["cardDetail"]);
            console.log("player", playerTurn);
            if (playerTurn + 1 < numberOfPlayers) {
                setPlayerTurn(playerTurn + 1);
            } else {
                setPlayerTurn(0);
            }
        } else {
            setShow(true);
            setWinner(playerTurn + 1);
            setPlayerTurn(0);
            setRoll(0);
            setDisplayCard(data[0]["cardDetail"]);
        }
    }

    return (
        <div>
            <div className="card-detail-container">
                <button
                    onClick={() => rollDoubleDice(numberOfPlayers)}
                >
                    Roll
            </button>
                <DiceScore roll={roll} />
            </div>
            <div className="grid">
                {data.map((card, index) => {
                    console.log(card);
                    return (
                        <div key={index} className="grid-card">
                            {index["cardDetail"]}
                            {playerScore.map(({ player, score }) => {
                                if (score === index) {
                                    return <PlayerToken player={player} />;
                                }
                            })}
                        </div>
                    );
                })}
            </div>
            <div className="card-detail-container">
                <div>Player: {playerTurn + 1}</div>
                <CardDetailDisplay displayCard={displayCard} />
            </div>
        </div>
    )
}

export default Board;