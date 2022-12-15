import "./DiceScore.css"

import Dice1 from "../../../assets/Dice1.png";
import Dice2 from "../../../assets/Dice2.png";
import Dice3 from "../../../assets/Dice3.png";
import Dice4 from "../../../assets/Dice4.png";
import Dice5 from "../../../assets/Dice5.png";
import Dice6 from "../../../assets/Dice6.png";

const DiceScore = ({ roll }) => {
  let imgPath;
  switch (roll) {
    case 1:
      imgPath = Dice1;
      break;
    case 2:
      imgPath = Dice2;
      break;
    case 3:
      imgPath = Dice3;
      break;
    case 4:
      imgPath = Dice4;
      break;
    case 5:
      imgPath = Dice5;
      break;
    case 6:
      imgPath = Dice6;
      break;
    default:
      Dice1;
  }
  return (
    <div className="dice-container">
      <img className="dice-image" src={imgPath} />
    </div>
  );
};

export default DiceScore;
