import { getRandomHalf } from './utils';

const getWords = async (page, level) => {
  try {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;
    const res = await fetch(url);
    const json = await res.json();
    const half = getRandomHalf();
    let resHalf = [];
    if (half === 1) {
      resHalf = json.slice(0, 10);
    } else if (half === 2) {
      resHalf = json.slice(10, 20);
    }
    return resHalf;
  } catch (error) {
    console.log(error);
  }
};

export { getWords };
