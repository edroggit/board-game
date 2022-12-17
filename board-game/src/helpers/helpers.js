export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createInitialScore = (numberOfPlayers) => {
  const arr = new Array();
  for (let i = 0; i < numberOfPlayers; i++) {
    arr.push({
      player: i,
      score: 0,
    });
  }
  return arr;
}