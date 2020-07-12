const getRandomPage = (maxPage) => {
  return Math.floor(Math.random() * maxPage);
};

const getRandomHalf = () => {
  return Math.round(Math.random()) + 1;
};

const playWord = (src) =>
  new Audio(`https://raw.githubusercontent.com/AlinaKutya/rslang-data/master/${src}`).play();

export { getRandomPage, getRandomHalf, playWord };
