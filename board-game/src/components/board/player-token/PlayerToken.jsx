import "./PlayerToken.css";

const PlayerToken = ({ player }) => {
  const playerTurn = player["player"]
  console.log("playerturn", playerTurn)
  const colours = {
    0: "red",
    1: "green",
    2: "blue",
    3: "black",
  };
  return (
    <div className="token">
      <div
        className="inside-token"
        style={{ backgroundColor: `${colours[playerTurn]}` }}
      />
    </div>
  );
};

export default PlayerToken;
