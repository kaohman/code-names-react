import { setGameboardWords } from '../actions';
import { words } from '../data/words';

export const getGameboardWords = (total: number) => {
  return async (dispatch: (arg0: { type: string; words: any; }) => void) => {
    try {
      let randomIndices: number[] = [];
      for (let i = 0; i < total; i++) {
        let value = Math.floor(Math.random() * total);
        while (randomIndices.includes(value)) {
          value = Math.floor(Math.random() * total);
        }
        randomIndices.push(value);
      }
      const randomWords = randomIndices.map(i => {
        return words[i];
      });
      dispatch(setGameboardWords(randomWords));
    } catch (error) {
    }
  }
}