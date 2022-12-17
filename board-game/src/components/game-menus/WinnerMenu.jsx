import "./WinnerMenu.css"

const WinnerMenu = ({ winner, setPlaying, setSelectingPlayers }) => {
    const handleClick = () => {
        setPlaying(false)
        setSelectingPlayers(true)
    }
    return (
        <div>
            <h1>Player {winner} won the game</h1>
            <button onClick={handleClick}>Play again</button>

        </div>
    )
}

export default WinnerMenu;