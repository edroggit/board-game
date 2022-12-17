import "./Gameboard.css"

const Gameboard = () => {
    const squares = [];
    for (let i = 0; i < 24; i++) {
        let square = {}
        if (i === 0 || i === 23) {
            square.style = { backgroundColor: "red" }
            squares.push(square)
        } else {
            square.style = { backgroundColor: "white" }
            squares.push(square)
        }
    }
    console.log("squares", squares)
    return (
        <div className="game-grid">
            {
                squares.map((square, index) => {
                    let color = square.style["backgroundColor"]
                    console.log(color)
                    return (
                        <div key={index} className="card" style={{ backgroundColor: `${color}` }}>{index}</div>
                    )
                })
            }
        </div>
    )
}

export default Gameboard;