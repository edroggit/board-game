import "./Gameboard.css"

const FAKEPLAYERDATA = [{ player: 1, score: 10 }, { player: 2, score: 10 }]

const Gameboard = () => {
    const squares = [1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1
    ];
    const gameSquares = [];
    let piecePosition = 0;

    for (let i = 0; i < squares.length; i++) {
        let square;
        if (squares[i] === 1) {
            square = { type: "gamePiece", piecePosition: piecePosition }
            piecePosition++
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
                                <div key={square.piecePosition} style={{ backgroundColor: "white", width: "100%", height: "50px" }}>
                                    {
                                        FAKEPLAYERDATA.map((player) => <>{square.piecePosition === player.score && <div>Hi</div>}</>)


                                    }
                                </div> :
                                <div key={square.piecePosition} style={{ backgroundColor: "black", width: "100%", height: "50px" }}></div>}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Gameboard;