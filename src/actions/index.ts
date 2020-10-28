export const setGameboardWords = (words: string[]) => ({
  type: 'SET_GAMEBOARD_WORDS',
  words,
});

export const setLoading = (isLoading: boolean) => ({
  type: 'SET_LOADING',
  isLoading,
});