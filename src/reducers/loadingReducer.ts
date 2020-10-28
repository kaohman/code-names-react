export const loadingReducer = (state = true, action: { type: string; isLoading: boolean; }) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}