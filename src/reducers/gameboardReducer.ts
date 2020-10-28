export const gameboardReducer = (state = [], action: { type: string; words: string[]; }) => {
  switch (action.type) {
    case 'SET_GAMEBOARD_WORDS':
      return action.words;
    default:
      return state;
  }
}