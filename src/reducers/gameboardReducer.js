  
export const gameboardReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GAMEBOARD_WORDS':
      return action.words;
    default:
      return state;
  }
}