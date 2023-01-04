import PlayerToken from "./board/player-token/PlayerToken";
import "./Gameboard.css"


const Gameboard = ({ playerScore }) => {

    const squares = [
        1, 2, 3, 4, 5, 6, 7, 8,
        0, 0, 0, 0, 0, 0, 0, 9,
        17, 16, 15, 14, 13, 12, 11, 10,
        18, 0, 0, 0, 0, 0, 0, 0,
        19, 20, 21, 22, 23, 24, 25, 26
    ];
    const gameSquares = [];

    for (let i = 0; i < squares.length; i++) {
        let square;
        if (squares[i] !== 0) {
            square = { type: "gamePiece", piecePosition: squares[i] }
            gameSquares.push(square)
        } else {
            square = { type: "edgePiece" }
            gameSquares.push(square)
        }
    }
    console.log("squares", gameSquares)
    return (
        <div className="game-grid">
            {
                gameSquares.map((square) => {
                    return (
                        <>
                            {square.type === "gamePiece" ?
                                <div key={square.piecePosition} className="game-card" style={{ backgroundColor: "white", width: "100%", height: "50px" }}>
                                    {
                                        playerScore.map((player) => <>{square.piecePosition === player.score && <PlayerToken player={player} />}</>)


                                    }
                                </div> :
                                <div key={square.piecePosition} style={{ backgroundColor: "black", width: "100%", height: "50px", opacity: 0.9 }}></div>}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Gameboard;