import "./WinnerMenu.css"

const WinnerMenu = ({ winner, setWinnerMenu, setPlaying, setSelectingPlayers }) => {
    const handleClick = () => {
        setPlaying(false)
        setWinnerMenu(false)
        setSelectingPlayers(true)
    }
    return (
        <div>
            <h1>Player {winner} won the game</h1>
            <button className="dice-button" onClick={handleClick}>Play again</button>
        </div>
    )
}

export default WinnerMenu;