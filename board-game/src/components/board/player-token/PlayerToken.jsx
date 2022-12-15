import "./PlayerToken.css";

export const colours = {
  0: "red",
  1: "green",
  2: "blue",
  3: "black",
};

const PlayerToken = ({ player }) => {
  return (
    <div className="token">
      <div
        className="inside-token"
        style={{ backgroundColor: `${colours[player]}` }}
      />
    </div>
  );
};

export default PlayerToken;
